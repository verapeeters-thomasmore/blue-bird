import React, {createContext, useCallback, useContext, useMemo} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";

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
            }),
        [getControlValue, toggleControlValue,]);

    return <ControlsContext.Provider value={api}>
        {props.children}
    </ControlsContext.Provider>
}

export const useControlsContext = () => useContext(ControlsContext);
