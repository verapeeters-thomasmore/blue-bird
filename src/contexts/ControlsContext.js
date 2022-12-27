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

    const getControlValue = useCallback(
        key => controls[key],
        [controls]);

    const toggleControlValue = useCallback(
        key => setControls(controls => ({...controls, [key]: !controls[key]})),
        [controls]);

    const getControlValueInCollection = useCallback(
        (key, keyInCollection) => controls[key]?.[keyInCollection],
        [controls]);

    const toggleControlValueInCollection = useCallback(
        (key, keyInCollection) => setControls(controls =>
            ({
                ...controls,
                [key]: {...controls[key] ?? {}, [keyInCollection]: !getControlValueInCollection(key, keyInCollection)}
            })),
        [controls, getControlValueInCollection]);

    const setOneControlValue = useCallback(
        (key, newValue) =>
            setControls(controls => ({
                ...controls, [key]: newValue
            })),
        [controls]);

    const toggleSomeAreas = useCallback(
        areasToToggle => {
            const idsOfAreasToToggle = areasToToggle.map(a => a.id);
            const currentAreaIdControls = getControlValue(SHOW_AREA_ID) ?? {};
            const foundOneTrue = idsOfAreasToToggle.some(id => currentAreaIdControls[id]);
            const toggledAreaIdControls = idsOfAreasToToggle.reduce(
                (tempResult, k) => ({
                    ...tempResult, [k]: !foundOneTrue
                }), {});
            const newAreaIdControls = {...currentAreaIdControls, ...toggledAreaIdControls};
            setOneControlValue(SHOW_AREA_ID, newAreaIdControls);
        },
        [getControlValue, setOneControlValue]);

    const areSomeAreasVisible = useMemo(
        () => {
            const currentAreaIdControls = getControlValue(SHOW_AREA_ID) ?? {};
            return Object.values(currentAreaIdControls).some(v => v);
        },
        [getControlValue]
    );

    const api = useMemo(() =>
            ({
                getControlValue,
                setOneControlValue,
                toggleControlValue,
                getControlValueInCollection,
                toggleControlValueInCollection,
                toggleSomeAreas,
                areSomeAreasVisible
            }),
        [getControlValue, setOneControlValue, toggleControlValue, getControlValueInCollection, toggleControlValueInCollection, toggleSomeAreas, areSomeAreasVisible]);

    return <ControlsContext.Provider value={api}>
        {props.children}
    </ControlsContext.Provider>
}

export const useControlsContext = () => useContext(ControlsContext);
