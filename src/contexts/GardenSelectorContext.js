import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {getNextAreaId, PREDEFINED_GARDENS} from "../data/area.data";
import {PLANT_DATA} from "../data/plant.data";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {findPlantDataByShortName} from "../utils/plant_utils";
import {saveAs} from 'file-saver';
import PropTypes from "prop-types";
import {areaWithPlantDataPropType, plantDataPropType, plantWithAreasPropType} from "../types";
import {useShowItemToggle} from "../hooks/useShowItemToggle";

const GardenSelectorContext = createContext();

function getGardenEnrichedWithPlants(selectedGarden, plants) {
    return selectedGarden.map(area => ({...area, plant: findPlantDataByShortName(plants, area.plantName)}))
}

//generates warnings on console
function checkGardenAreas(plantsWithAreas) {
    plantsWithAreas.forEach(p => {
            const areaCoordinateStrings = p.areas.map(a => "(" + a.x + "," + a.z + ")").sort();
            const found = areaCoordinateStrings.find((s, index) => index > 0 && s === areaCoordinateStrings[index - 1]);
            if (found)
                console.warn(`${p.plantName} has areas with duplicate coordinates: ${found}`);
        }
    )
}

// const sortedAreas = [...p.areas].sort((al, ar) => ar.x - al.x || ar.z - al.z);

function getGardenGroupedByPlants(areasSelectedGarden) {
    const uniquePlantNames = [...new Set(areasSelectedGarden.map(a => a.plantName))];
    const plantsWithAreas = uniquePlantNames.map(p => ({
        plantName: p,
        plant: areasSelectedGarden.find(a => a.plantName === p).plant,
        areas: areasSelectedGarden.filter(a => a.plantName === p)
    }));
    checkGardenAreas(plantsWithAreas);
    return plantsWithAreas;
}

function formatAreasAsString(areas) {
    return JSON.stringify(areas);
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

    const showPlantsToggleApi = useShowItemToggle("showPlants", areaIdsForSelectedGarden, areaIdsForSelectedGarden);
    const showAreasToggleApi = useShowItemToggle("showAreas", areaIdsForSelectedGarden);

    const propertiesSelectedGarden = useMemo(
        () => PREDEFINED_GARDENS[indexSelectedGarden] ?? {},
        [indexSelectedGarden]
    );

    //array of objects for each plant in this garden
    //each object contains plantName (shortName), plant (plantinfo), array of areas
    const areasSelectedGardenGroupedByPlants = useMemo(
        () => getGardenGroupedByPlants(areasSelectedGarden),
        [areasSelectedGarden]
    );

    const isPlantInGarden = useCallback(
        plantShortName => areasSelectedGarden.some(p => p.plantName === plantShortName),
        [areasSelectedGarden]
    );

    //array of ids of each plant in this garde
    const plantIdsForSelectedGarden = useMemo(
        () => areasSelectedGardenGroupedByPlants.map(p => p.plant?.id),
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
            const areasAsJSON = formatAreasAsString(areas);
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

    const addPlantInGarden = useCallback(
        (plantName) => {
            console.log("addPlantInGarden", plantName)
            if (!plantName) return;
            if (isPlantInGarden(plantName)) return;
            const newArea = {
                id: getNextAreaId(),
                x: undefined,
                z: undefined,
                plantName: plantName
            };
            setAreas([...areas, newArea]);
            addAction(`add plant ${plantName}`);
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

    useEffect(
        () => {
            console.log("GardenSelectorContext useEffect", areaIdsForSelectedGarden, isDirty);
            if (isDirty) {
                showPlantsToggleApi.resetAllItems(areaIdsForSelectedGarden);
                showAreasToggleApi.resetAllItems(areaIdsForSelectedGarden);
            } else {
                showPlantsToggleApi.replaceAllItems(areaIdsForSelectedGarden, areaIdsForSelectedGarden);
                showAreasToggleApi.replaceAllItems(areaIdsForSelectedGarden, []);
            }
        },
        [isDirty, areaIdsForSelectedGarden]);

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
            addPlantInGarden,
            clearArea,
            isDirty,
            actions,
            addAction,
            showPlantsToggleApi,
            showAreasToggleApi,
        }),
        [areasSelectedGarden, indexSelectedGarden, areaIdsForSelectedGarden, propertiesSelectedGarden,
            areasSelectedGardenGroupedByPlants, plantIdsForSelectedGarden, plantDataForSelectedGarden,
            selectGarden, saveAreasInFile, loadAreasFromFile,
            addArea, addPlantInGarden, clearArea, isDirty,
            actions, addAction,
            showPlantsToggleApi, showAreasToggleApi,
        ]);

    return <GardenSelectorContext.Provider value={api}>
        {props.children}
    </GardenSelectorContext.Provider>
}

GardenSelectorContext.Provider.propTypes = {
    value: PropTypes.shape({
            areasSelectedGarden: PropTypes.arrayOf(areaWithPlantDataPropType),
            indexSelectedGarden: PropTypes.number,
            areaIdsForSelectedGarden: PropTypes.arrayOf(PropTypes.number),
            propertiesSelectedGarden: PropTypes.shape(),
            areasSelectedGardenGroupedByPlants: PropTypes.arrayOf(plantWithAreasPropType),
            plantIdsForSelectedGarden: PropTypes.arrayOf(PropTypes.number),
            plantDataForSelectedGarden: PropTypes.arrayOf(plantDataPropType),
            selectGarden: PropTypes.func,
            saveAreasInFile: PropTypes.func,
            loadAreasFromFile: PropTypes.func,
            addArea: PropTypes.func,
            addPlantInGarden: PropTypes.func,
            clearArea: PropTypes.func,
            isDirty: PropTypes.bool,
            actions: PropTypes.arrayOf(PropTypes.string),
            addAction: PropTypes.func,
            showPlantsToggleApi: PropTypes.shape(),
            showAreasToggleApi: PropTypes.shape(),

        }
    )
}

export const useGardenSelectorContext = () => useContext(GardenSelectorContext);

//TODO te veel planten in PlantSelectionButtons (scroll?)
//TODO catalog is broken - it should be a garden - or remove?
//TODO mobile: edit-view entire garden is not visible - zie opties OrbitControls
//TODO PlantListPage: sort/filter plants
//TODO save camera position after orbiting (necessary??)
//TODO area-id: unique per garden, not in general ??? necessary?? test!
//TODO split up GardenSelectorContext (hoe???) GardenSelectorContext en CurrentGardenContext?
//TODO bij openen nieuwe Garden (GardenSelectorContext) moet de area-useShowItemToggle op leeg staan en de plant- op alles. Bij editeren bestaande garden (CurrentGardenCobtext) moeten nieuwe areas toegevoegd worden aan allebei??
//TODO formatting of file when saving garden