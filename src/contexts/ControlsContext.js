import React, {createContext, useCallback, useContext, useMemo} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";


const ControlsContext = createContext();

export const SHOW_WORLD = "showWorld";
export const SHOW_FLOOR = "showFloor";
export const SHOW_AXES = "showAxes";
export const SHOW_CATALOG = "showCatalog";
export const SHOW_GARDEN = "showGarden";
export const SHOW_AREA_PLANES = "showAreaPlanes";
export const SHOW_PLANTS = "showPlants";
export const SHOW_AREA_ID = "showAreaId";

const INITIAL_CONTROLS = {
    [SHOW_WORLD]: true,
    [SHOW_FLOOR]: true,
    [SHOW_AXES]: false,
    [SHOW_CATALOG]: false,
    [SHOW_GARDEN]: true,
    [SHOW_AREA_PLANES]: false,
    [SHOW_PLANTS]: true,
    [SHOW_AREA_ID]: {},
};

export function ControlsProvider(props) {
    const [controls, setControls] = useLocalStorage("controls", INITIAL_CONTROLS);

    const controlValue = useCallback(key => controls[key], [controls]);
    const toggleControl = useCallback(key => setControls(controls => ({...controls, [key]: !controls[key]})));

    const controlValueInCollection = useCallback((key, keyInCollection) =>
            controls[key]?.[keyInCollection],
        [controls]);

    const toggleControlInCollection = useCallback((key, keyInCollection) =>
        setControls(controls => ({
            ...controls,
            [key]: {...controls[key] ?? {}, [keyInCollection]: !controlValueInCollection(key, keyInCollection)}
        })));

    const api = useMemo(() =>
            ({controlValue, toggleControl, controlValueInCollection, toggleControlInCollection}),
        [controlValue, toggleControl, controlValueInCollection, toggleControlInCollection]);

    return <ControlsContext.Provider value={api}>
        {props.children}
    </ControlsContext.Provider>
}

export const useControlsContext = () => useContext(ControlsContext);
