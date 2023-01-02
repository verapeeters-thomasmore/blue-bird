import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {getNextAreaId, PREDEFINED_GARDENS} from "../data/area.data";
import {PLANT_DATA} from "../data/plant.data";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {findPlantData} from "../utils/plant_utils";

const GardenSelectorContext = createContext();

function getGardenEnrichedWithPlants(selectedGarden, plants) {
    return selectedGarden.map(area => ({...area, plant: findPlantData(plants, area.plantName)}))
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
    return [...new Set(areasSelectedGarden.map(a => a.plant.id))];
}

export function GardenSelectorProvider(props) {
    const [indexSelectedGarden, setIndexSelectedGardenInternal] = useLocalStorage("indexSelectedGarden", 2);
    const [areas, setAreas] = useState(PREDEFINED_GARDENS[indexSelectedGarden].areas);

    // console.log(indexSelectedGarden, areas);

    //array of areas
    //contains plantinfo for each area
    const areasSelectedGarden = useMemo(
        () => getGardenEnrichedWithPlants(areas, PLANT_DATA),
        [areas]);

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
            setAreas(PREDEFINED_GARDENS[index].areas);
        },
        []);

    const addArea = useCallback(
            (x, z, plantName) => {
                if (!plantName) return;
                const newArea = {
                    id: getNextAreaId(),
                    x: x,
                    z: z,
                    plantName: plantName
                };
                return setAreas([...areas, newArea]);
            },
            [areas]
        )
    ;
    const clearArea = useCallback(
        (x, z) => setAreas(areas.filter(a => !(a.x === x && a.z === z))),
        [areas]);

    const api = useMemo(
        () => ({
            areasSelectedGarden,
            indexSelectedGarden,
            areasSelectedGardenGroupedByPlants,
            plantIdsForSelectedGarden,
            selectGarden,
            addArea,
            clearArea
        }),
        [areasSelectedGarden, indexSelectedGarden, areasSelectedGardenGroupedByPlants, plantIdsForSelectedGarden, selectGarden, addArea, clearArea]);

    return <GardenSelectorContext.Provider value={api}>
        {props.children}
    </GardenSelectorContext.Provider>
}

export const useGardenSelectorContext = () => useContext(GardenSelectorContext);

//TODO add area that already exists
//TODO which button is selected
//TODO topview on editPage
//TODO select-pages: select-button and go to Home