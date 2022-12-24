import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const CameraViewpointContext = createContext();

const PREDEFINED_VIEWPOINTS = [
    {name: "default", position: {x: -10, y: 8, z: 20}},
    {name: "front", position: {x: 0, y: 3, z: 20}},
    {name: "top", position: {x: 0, y: 50, z: 0}},
];

export function CameraViewpointProvider(props) {
    const [cameraViewpointIndex, setCameraViewpointIndex] = useState(0);

    const setCameraViewpoint = useCallback(nameNewCameraViewpoint => {
        setCameraViewpointIndex(cameraViewpoint =>
            PREDEFINED_VIEWPOINTS.findIndex(vp => vp.name === nameNewCameraViewpoint) ?? cameraViewpoint);
    }, []);

    const cameraViewpoint = useMemo(() => PREDEFINED_VIEWPOINTS[cameraViewpointIndex], [cameraViewpointIndex]);
    console.log(`CameraViewpointProvider `, cameraViewpoint)

    const api = useMemo(() => ({
        cameraViewpoint, setCameraViewpoint, viewpoints: PREDEFINED_VIEWPOINTS
    }), [cameraViewpoint, setCameraViewpoint]);

    return <CameraViewpointContext.Provider value={api}>
        {props.children}
    </CameraViewpointContext.Provider>
}

export const useCameraViewpointContext = () => useContext(CameraViewpointContext);
