import {PerspectiveCamera} from "@react-three/drei";
import {useCameraViewpointContext} from "../../contexts/CameraViewpointContext";

//prop fixedViewPoint: string: one of those that can be saved by CameraViewpointContext
//fixedViewPoint always has precedence
//if fixedViewPoint is not set use cameraViewPoint from Context (local storage)
export function Camera(props) {
    const {fixedViewPoint} = props;
    const {cameraViewpoint, getCoordinatesForPredefinedViewpoint} = useCameraViewpointContext();

    const {x, y, z} = getCoordinatesForPredefinedViewpoint(fixedViewPoint) || cameraViewpoint?.position;
    // noinspection RequiredAttributes
    return (
        <PerspectiveCamera makeDefault position={[x, y, z]} zoom={5}/>
    );
}