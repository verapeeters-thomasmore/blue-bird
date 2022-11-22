import {WORLD_GRASS_GREEN} from "../constants/threeColors";
import {useRef} from "react";
import {EARTH_Y} from "../constants/dimensions";

export function Earth(props) {
    const ref = useRef()
    return (
        <mesh
            {...props}
            ref={ref}
            position={[0, EARTH_Y, 0]}
            rotation-x={-Math.PI / 2}
            name="earth">
            <circleGeometry args={[50, 10, 0, 2 * Math.PI]}/>
            <meshLambertMaterial color={WORLD_GRASS_GREEN}/>
        </mesh>
    )
}