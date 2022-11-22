import {AREA_Y} from "../constants/dimensions";
import {useRef} from "react";

export function Area(props) {
    const {plant, time, x, z, width, length} = props;
    const ref = useRef()

    return (
        <mesh
            {...props}
            ref={ref}
            position={[x, AREA_Y, z]}
            rotation-x={-Math.PI / 2}
            name="floor">
            <planeGeometry args={[width, length, 1, 1]}/>
            <meshLambertMaterial color={plant.flowerColor}/>
        </mesh>
    )
}