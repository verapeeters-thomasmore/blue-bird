import {PerspectiveCamera} from "@react-three/drei";
import {useCameraViewpointContext} from "../../contexts/CameraViewpointContext";

export function Camera() {
    const {cameraViewpoint} = useCameraViewpointContext();

    const {x, y, z} = cameraViewpoint?.position;
    // noinspection RequiredAttributes
    return (
        <PerspectiveCamera makeDefault position={[x, y, z]} zoom={5}/>
    );
}