import {WORLD_GRASS_GREEN} from "../../constants/threeColors";
import {useRef} from "react";
import {WORLD_DIAMETER, WORLD_Y} from "../../constants/dimensions";

export function World(props) {
    const ref = useRef()
    return (
        <mesh
            {...props}
            ref={ref}
            position={[0, WORLD_Y, 0]}
            rotation-x={-Math.PI / 2}
            name="earth">
            <circleGeometry args={[WORLD_DIAMETER, 40, 0, 2 * Math.PI]}/>
            <meshLambertMaterial color={WORLD_GRASS_GREEN}/>
        </mesh>
    )
}