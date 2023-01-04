import React, {createContext, useCallback, useContext, useMemo} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";

const CameraViewpointContext = createContext();

export const VIEWPOINT_DEFAULT = "default";
export const VIEWPOINT_FRONT = "front";
export const VIEWPOINT_TOP = "top";
const PREDEFINED_VIEWPOINTS = [
    {name: VIEWPOINT_DEFAULT, position: {x: -10, y: 8, z: 20}},
    {name: VIEWPOINT_FRONT, position: {x: 0, y: 3, z: 20}},
    {name: VIEWPOINT_TOP, position: {x: 0, y: 50, z: 0}},
];

export function CameraViewpointProvider(props) {
    const [cameraViewpointIndex, setCameraViewpointIndex] = useLocalStorage("cameraViewPoint", 0);

    const setCameraViewpoint = useCallback(
        nameNewCameraViewpoint => {
            setCameraViewpointIndex(cameraViewpoint =>
                PREDEFINED_VIEWPOINTS.findIndex(vp => vp.name === nameNewCameraViewpoint) ?? cameraViewpoint);
        },
        []);

    const cameraViewpoint = useMemo(
        () => PREDEFINED_VIEWPOINTS[cameraViewpointIndex],
        [cameraViewpointIndex]);

    //returns undefined if viewpointName does not exist
    const getCoordinatesForPredefinedViewpoint = useCallback(
        viewpointName => PREDEFINED_VIEWPOINTS.find(vp => vp.name === viewpointName)?.position,
        []);

    const api = useMemo(
        () => ({
            cameraViewpoint, setCameraViewpoint, viewpoints: PREDEFINED_VIEWPOINTS, getCoordinatesForPredefinedViewpoint
        }),
        [cameraViewpoint, setCameraViewpoint, getCoordinatesForPredefinedViewpoint]);

    return <CameraViewpointContext.Provider value={api}>
        {props.children}
    </CameraViewpointContext.Provider>
}

export const useCameraViewpointContext = () => useContext(CameraViewpointContext);
