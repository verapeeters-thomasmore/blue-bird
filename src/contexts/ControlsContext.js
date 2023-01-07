import React, {createContext, useCallback, useContext, useEffect, useMemo} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";
import {useShowItemToggle} from "../hooks/useShowItemToggle";
import {useGardenSelectorContext} from "./GardenSelectorContext";

const ControlsContext = createContext();

export const SHOW_WORLD = "showWorld";
export const SHOW_FLOOR = "showFloor";
export const SHOW_AXES = "showAxes";
export const SHOW_CATALOG = "showCatalog";
export const SHOW_GARDEN = "showGarden";

const INITIAL_CONTROLS = {
    [SHOW_WORLD]: true,
    [SHOW_FLOOR]: true,
    [SHOW_AXES]: false,
    [SHOW_CATALOG]: false,
    [SHOW_GARDEN]: true,
};

export function ControlsProvider(props) {
    const [controls, setControls] = useLocalStorage("controls", INITIAL_CONTROLS);
    const {areaIdsForSelectedGarden} = useGardenSelectorContext();
    const showAreasToggleApi = useShowItemToggle("showAreas", areaIdsForSelectedGarden );
    const showPlantsToggleApi = useShowItemToggle("showPlants", areaIdsForSelectedGarden,  areaIdsForSelectedGarden);

    // console.log("ControlsProvider", areaIdsForSelectedGarden);

    useEffect(
        () => {
            // console.log("ControlsProvider useEffect", areaIdsForSelectedGarden);
            showPlantsToggleApi.resetAllItems(areaIdsForSelectedGarden);
            showAreasToggleApi.resetAllItems(areaIdsForSelectedGarden);
        },
        [areaIdsForSelectedGarden]);

    const getControlValue = useCallback(
        key => controls[key],
        [controls]);

    const toggleControlValue = useCallback(
        key => setControls(controls => ({...controls, [key]: !controls[key]})),
        [controls]);

    const api = useMemo(() =>
            ({
                getControlValue,
                toggleControlValue,
                showAreasToggleApi,
                showPlantsToggleApi
            }),
        [getControlValue, toggleControlValue, showAreasToggleApi, showPlantsToggleApi]);

    return <ControlsContext.Provider value={api}>
        {props.children}
    </ControlsContext.Provider>
}

export const useControlsContext = () => useContext(ControlsContext);
