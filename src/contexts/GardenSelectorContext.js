import React, {createContext, useCallback, useContext, useMemo} from 'react';
import {PREDEFINED_GARDENS} from "../data/area.data";
import {PLANT_DATA} from "../data/plant.data";
import {useLocalStorage} from "../hooks/useLocalStorage";

const GardenSelectorContext = createContext();

function getGardenEnrichedWithPlants(selectedGarden, plants) {
    return selectedGarden.map(area => ({...area, plant: plants.find(p => p.shortName === area.plantName)}))
}

function getGardenGroupedByPlants(areasSelectedGarden) {
    const uniquePlantNames = [...new Set(areasSelectedGarden.map(a => a.plantName))];
    return uniquePlantNames.map(p => ({
        plantName: p,
        plant: areasSelectedGarden.find(a => a.plantName === p).plant,
        areas: areasSelectedGarden.filter(a => a.plantName === p)
    }));
}

function getPlantIds(areasSelectedGarden) {
    const plantIds = [...new Set(areasSelectedGarden.map(a => a.plant.id))];
    console.log("getPlantIds", plantIds);
    return plantIds;
}

export function GardenSelectorProvider(props) {
    const [indexSelectedGarden, setIndexSelectedGardenInternal] = useLocalStorage("indexSelectedGarden", 2);

    //array of areas
    //contains no plantinfo, only short plantName
    const selectedGarden = useMemo(
        () => PREDEFINED_GARDENS[indexSelectedGarden].areas,
        [indexSelectedGarden]
    );

    //array of areas
    //contains plantinfo for each area
    const areasSelectedGarden = useMemo(
        () => getGardenEnrichedWithPlants(selectedGarden, PLANT_DATA),
        [selectedGarden]);

    //array of objects for each plant in this garden
    //each object contains plantName, plant (plantinfo), areas
    const areasSelectedGardenGroupedByPlants = useMemo(
        () => getGardenGroupedByPlants(areasSelectedGarden),
        [areasSelectedGarden]);

    //array of ids of each plant in this garde
    const plantIdsForSelectedGarden = useMemo(
        () => getPlantIds(areasSelectedGarden),
        [areasSelectedGarden]);

    const selectGarden = useCallback(
        gardenNameToSelect => {
            const index = PREDEFINED_GARDENS.findIndex(g => g.name === gardenNameToSelect);
            setIndexSelectedGardenInternal(index);
        },
        []);

    const api = useMemo(
        () => ({
            areasSelectedGarden,
            indexSelectedGarden,
            areasSelectedGardenGroupedByPlants,
            plantIdsForSelectedGarden,
            selectGarden,
        }),
        [areasSelectedGarden, indexSelectedGarden, areasSelectedGardenGroupedByPlants, plantIdsForSelectedGarden, selectGarden,]);

    return <GardenSelectorContext.Provider value={api}>
        {props.children}
    </GardenSelectorContext.Provider>
}

export const useGardenSelectorContext = () => useContext(GardenSelectorContext);
