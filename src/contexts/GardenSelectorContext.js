import React, {createContext, useCallback, useContext, useMemo} from 'react';
import {getNextAreaId, PREDEFINED_GARDENS} from "../data/area.data";
import {PLANT_DATA} from "../data/plant.data";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {findPlantDataByShortName} from "../utils/plant_utils";

const GardenSelectorContext = createContext();

function getGardenEnrichedWithPlants(selectedGarden, plants) {
    return selectedGarden.map(area => ({...area, plant: findPlantDataByShortName(plants, area.plantName)}))
}

function getGardenGroupedByPlants(areasSelectedGarden) {
    const uniquePlantNames = [...new Set(areasSelectedGarden.map(a => a.plantName))];
    return uniquePlantNames.map(p => ({
        plantName: p,
        plant: areasSelectedGarden.find(a => a.plantName === p).plant,
        areas: areasSelectedGarden.filter(a => a.plantName === p)
    }));
}

export function GardenSelectorProvider(props) {
    const [indexSelectedGarden, setIndexSelectedGardenInternal] = useLocalStorage("indexSelectedGarden", 2);
    const [areas, setAreas] = useLocalStorage("gardenAreas", PREDEFINED_GARDENS[indexSelectedGarden]?.areas);
    const [isDirty, setIsDirty] = useLocalStorage("gardenAreasIsDirty", false);

    console.log(indexSelectedGarden, areas, isDirty);

    //array of areas
    //contains plantinfo for each area
    const areasSelectedGarden = useMemo(
        () => {
            console.log("useMemo areasSelectedGarden", indexSelectedGarden, areas)
            return getGardenEnrichedWithPlants(areas, PLANT_DATA)
        },
        [areas]);

    const propertiesSelectedGarden = useMemo(
        () => PREDEFINED_GARDENS[indexSelectedGarden],
        [indexSelectedGarden]);

    //array of objects for each plant in this garden
    //each object contains plantName, plant (plantinfo), array of areas
    const areasSelectedGardenGroupedByPlants = useMemo(
        () => getGardenGroupedByPlants(areasSelectedGarden),
        [areasSelectedGarden]);

    //array of ids of each plant in this garde
    const plantIdsForSelectedGarden = useMemo(
        () => areasSelectedGardenGroupedByPlants.map(p => p.plant.id),
        [areasSelectedGardenGroupedByPlants]);


    //array of data of each plant in this garde
    const plantDataForSelectedGarden = useMemo(
        () => areasSelectedGardenGroupedByPlants.map(p => p.plant),
        [areasSelectedGardenGroupedByPlants]);

    const selectGarden = useCallback(
        gardenNameToSelect => {
            const index = PREDEFINED_GARDENS.findIndex(g => g.name === gardenNameToSelect);
            setIndexSelectedGardenInternal(index);
            setAreas(PREDEFINED_GARDENS[index].areas);
            setIsDirty(false);
        },
        []);

    const selectGardenAreas = useCallback(
        areas => {
            setIndexSelectedGardenInternal(undefined);
            setAreas(areas);
            setIsDirty(false);
        },
        []);

    const addArea = useCallback(
            (x, z, plantName) => {
                if (!plantName) return;
                if (areas.find(a => a.x === x && a.z === z && a.plantName === plantName)) return;
                const newArea = {
                    id: getNextAreaId(),
                    x: x,
                    z: z,
                    plantName: plantName
                };
                setIsDirty(true);
                setAreas([...areas, newArea]);
            },
            [areas]
        )
    ;
    const clearArea = useCallback(
        (x, z) => {
            setIsDirty(true);
            setAreas(areas.filter(a => !(a.x === x && a.z === z)));
        },
        [areas]);

    const api = useMemo(
        () => ({
            areasSelectedGarden,
            indexSelectedGarden,
            propertiesSelectedGarden,
            areasSelectedGardenGroupedByPlants,
            plantIdsForSelectedGarden,
            plantDataForSelectedGarden,
            selectGarden,
            selectGardenAreas,
            addArea,
            clearArea,
            isDirty,
        }),
        [areasSelectedGarden, indexSelectedGarden, propertiesSelectedGarden,
            areasSelectedGardenGroupedByPlants, plantIdsForSelectedGarden, plantDataForSelectedGarden,
            selectGarden, selectGardenAreas, addArea, clearArea, isDirty]);

    return <GardenSelectorContext.Provider value={api}>
        {props.children}
    </GardenSelectorContext.Provider>
}

export const useGardenSelectorContext = () => useContext(GardenSelectorContext);

//OK save edited areas in localstorage
//TODO area-id: unique per garden, not in general
//OK isDirty NOT correct when refreshing (load local storage)
//OK save edited area in file
//TODO save saves too much (plant-data)
//OK load edited area from file
//TODO load from file: remember filename??
//TODO te veel planten in PlantSelectionButtons (scroll?)
//TODO catalog is broken - it should be a garden
//TODO save camera position after orbiting
//TODO Area info does not work if area not visible - is that a problem???
//TODO show area/plants -button in nav bar?
//TODO aster area looks white
//TODO error when hovering area (to display plants -- shows too many sometimes)