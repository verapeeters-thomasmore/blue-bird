import React, {createContext, useCallback, useContext, useMemo} from 'react';
import {PREDEFINED_GARDENS} from "../data/area.data";
import {PLANT_DATA} from "../data/plant.data";
import {useLocalStorage} from "../hooks/useLocalStorage";

const GardenSelectorContext = createContext();

function gardenEnrichedWithPlants(garden, plants) {
    return garden.map(area => ({...area, plant: plants.find(p => p.shortName === area.plantName)}))
}

function groupByPlants(areasSelectedGarden) {
    const uniquePlantNames = [...new Set(areasSelectedGarden.map(a => a.plantName))];
    return uniquePlantNames.map(p => ({
        plantName: p,
        plant: areasSelectedGarden.find(a => a.plantName === p).plant,
        areas: areasSelectedGarden.filter(a => a.plantName === p)
    }));
}

export function GardenSelectorProvider(props) {
    const [indexSelectedGarden, setIndexSelectedGardenInternal] = useLocalStorage("indexSelectedGarden", 2);

    const areasSelectedGarden = useMemo(
        () =>
            gardenEnrichedWithPlants(PREDEFINED_GARDENS[indexSelectedGarden].areas, PLANT_DATA),
        [indexSelectedGarden]);

    const areaInfoGroupedByPlants = useMemo(
        () => groupByPlants(areasSelectedGarden),
        [areasSelectedGarden]);

    const plantIdsForSelectedGarden = useMemo(() => areaInfoGroupedByPlants.map(plantInfo => plantInfo.plant.id), [areaInfoGroupedByPlants]);

    const selectGarden = useCallback(
        gardenNameToSelect => {
            const index = PREDEFINED_GARDENS.findIndex(g => g.name === gardenNameToSelect);
            setIndexSelectedGardenInternal(index);
        },
        []);

    const api = useMemo(
        () => ({
            areasSelectedGarden, indexSelectedGarden, areaInfoGroupedByPlants, plantIdsForSelectedGarden, selectGarden,
        }),
        [areasSelectedGarden, indexSelectedGarden, areaInfoGroupedByPlants, plantIdsForSelectedGarden, selectGarden,]);

    return <GardenSelectorContext.Provider value={api}>
        {props.children}
    </GardenSelectorContext.Provider>
}

export const useGardenSelectorContext = () => useContext(GardenSelectorContext);
