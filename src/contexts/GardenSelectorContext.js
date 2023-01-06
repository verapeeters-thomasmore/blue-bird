import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {getNextAreaId, PREDEFINED_GARDENS} from "../data/area.data";
import {PLANT_DATA} from "../data/plant.data";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {findPlantDataByShortName} from "../utils/plant_utils";
import {saveAs} from 'file-saver';

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
    //indexSelectedGarden -1 means no predefined garden is active
    const [indexSelectedGarden, setIndexSelectedGardenInternal] = useLocalStorage("indexSelectedGarden", 2);
    const [areas, setAreas] = useLocalStorage("gardenAreas", PREDEFINED_GARDENS[indexSelectedGarden]?.areas);
    const [isDirty, setIsDirty] = useLocalStorage("gardenAreasIsDirty", false);
    const [actions, setActions] = useState([]);

    // console.log(indexSelectedGarden, areas, isDirty);
    useEffect(
        () => {
            if (indexSelectedGarden !== -1)
                addAction(`start with predefined garden "${propertiesSelectedGarden.name}"`);
            else
                addAction(`loaded garden from local storage`);
            if (isDirty)
                addAction(`start with modified garden`);
        },
        []
    );

    //array of areas
    //contains plantinfo for each area
    const areasSelectedGarden = useMemo(
        () => {
            // console.log("useMemo areasSelectedGarden", indexSelectedGarden, areas)
            return getGardenEnrichedWithPlants(areas, PLANT_DATA)
        },
        [areas]
    );

    const areaIdsForSelectedGarden = useMemo(
        () => areas.map(a => a.id),
        [areas]
    );

    const propertiesSelectedGarden = useMemo(
        () => PREDEFINED_GARDENS[indexSelectedGarden] ?? {},
        [indexSelectedGarden]
    );

    //array of objects for each plant in this garden
    //each object contains plantName, plant (plantinfo), array of areas
    const areasSelectedGardenGroupedByPlants = useMemo(
        () => getGardenGroupedByPlants(areasSelectedGarden),
        [areasSelectedGarden]
    );

    //array of ids of each plant in this garde
    const plantIdsForSelectedGarden = useMemo(
        () => areasSelectedGardenGroupedByPlants.map(p => p.plant.id),
        [areasSelectedGardenGroupedByPlants]
    );

    //array of data of each plant in this garde
    const plantDataForSelectedGarden = useMemo(
        () => areasSelectedGardenGroupedByPlants.map(p => p.plant),
        [areasSelectedGardenGroupedByPlants]
    );

    const selectGarden = useCallback(
        gardenNameToSelect => {
            const index = PREDEFINED_GARDENS.findIndex(g => g.name === gardenNameToSelect);
            setIndexSelectedGardenInternal(index);
            setAreas(PREDEFINED_GARDENS[index].areas);
            setIsDirty(false);
            addAction(`selected predefined garden "${gardenNameToSelect}"`)
        },
        []
    );

    const saveAreasInFile = useCallback(
        (fileName) => {
            const areasAsJSON = JSON.stringify(areas);
            const blob = new Blob([areasAsJSON], {type: 'application/json'});
            const fileNameWithExtension = fileName.endsWith(".json") ? fileName : fileName + ".json";
            saveAs(blob, fileNameWithExtension);
            setIndexSelectedGardenInternal(-1);
            setIsDirty(false);
            addAction(`saved as "${fileNameWithExtension}"`)
        },
        [areas]
    );

    const loadAreasFromFile = useCallback(
        (chosenFile) => {
            const reader = new FileReader();
            reader.onload = e => {
                setAreas(JSON.parse(e.target.result));
                setIndexSelectedGardenInternal(-1);
                setIsDirty(false);
                addAction(`loaded from "${chosenFile.name}"`)
            };
            // reader.onerror = (e) => dispatch(importGardenAsJsonOnErrorAction(e));
            reader.readAsText(chosenFile);
        },
        []
    );

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
            addAction(`add area (${x}, ${z}) with ${plantName}`)
        },
        [areas]
    );

    const clearArea = useCallback(
        (x, z) => {
            setIsDirty(true);
            setAreas(areas.filter(a => !(a.x === x && a.z === z)));
            addAction(`clear area (${x}, ${z})`)
        },
        [areas]
    );

    const addAction = useCallback(
        a => setActions(actions => [...actions, a]),
        []
    );

    const api = useMemo(
        () => ({
            areasSelectedGarden,
            indexSelectedGarden,
            areaIdsForSelectedGarden,
            propertiesSelectedGarden,
            areasSelectedGardenGroupedByPlants,
            plantIdsForSelectedGarden,
            plantDataForSelectedGarden,
            selectGarden,
            saveAreasInFile,
            loadAreasFromFile,
            addArea,
            clearArea,
            isDirty,
            actions,
            addAction
        }),
        [areasSelectedGarden, indexSelectedGarden, areaIdsForSelectedGarden, propertiesSelectedGarden,
            areasSelectedGardenGroupedByPlants, plantIdsForSelectedGarden, plantDataForSelectedGarden,
            selectGarden, saveAreasInFile, loadAreasFromFile,
            addArea, clearArea, isDirty,
            actions, addAction]);

    return <GardenSelectorContext.Provider value={api}>
        {props.children}
    </GardenSelectorContext.Provider>
}

export const useGardenSelectorContext = () => useContext(GardenSelectorContext);

//OK  go to / after loading file
//OK after loading gardenIndex is not modified in localstorage?
//OK load file: check isDirty
//OK show area/plants -button in nav bar?
//OK default for showPlants when localStorage is empty
//TODO add plant in garden
//TODO te veel planten in PlantSelectionButtons (scroll?)
//TODO error when hovering area (to display plants -- shows too many sometimes)
//TODO catalog is broken - it should be a garden
//TODO mobile: edit-view entire garden is not visible
//TODO save camera position after orbiting
//TODO Area info does not work if area not visible - is that a problem???
//TODO load from file: remember filename?? (for history)
//TODO area-id: unique per garden, not in general ??? necessary??
