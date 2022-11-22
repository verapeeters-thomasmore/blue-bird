import {WORLD_GRASS_GREEN} from "../constants/threeColors";
import {useEffect, useRef} from "react";

export function Earth(props) {
    const ref = useRef()
    useEffect(() => {
        ref.current.rotation.x = -Math.PI / 2
        ref.current.receiveShadow = true;
    }, [])
    return (
        <mesh
            {...props}
            ref={ref}
            position={[0, -0.2, 0]}
            name="earth">
            <circleGeometry args={[50, 10, 0, 2 * Math.PI]}/>
            <meshLambertMaterial color={WORLD_GRASS_GREEN}/>
        </mesh>
    )
}