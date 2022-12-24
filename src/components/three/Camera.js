import {PerspectiveCamera} from "@react-three/drei";

export function Camera() {
    // noinspection RequiredAttributes
    return (
        <PerspectiveCamera makeDefault position={[0, 3, 20]} zoom={5}/>
    );
}