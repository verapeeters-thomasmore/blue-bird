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

const INITIAL_CONTROLS = {
    [SHOW_WORLD]: true,
    [SHOW_FLOOR]: true,
    [SHOW_AXES]: false,
    [SHOW_CATALOG]: false,
    [SHOW_GARDEN]: true,
    [SHOW_AREA_PLANES]: false,
    [SHOW_PLANTS]: true,
};

export function ControlsProvider(props) {
    const [controls, setControls] = useLocalStorage("controls", INITIAL_CONTROLS);

    const controlValue = useCallback(key => controls[key], [controls]);
    const toggleControl = useCallback(key => setControls(controls => ({...controls, [key]: !controls[key]})));

    const api = useMemo(() =>
            ({controlValue, toggleControl}),
        [controlValue, toggleControl]);

    return <ControlsContext.Provider value={api}>
        {props.children}
    </ControlsContext.Provider>
}

export const useControlsContext = () => useContext(ControlsContext);
