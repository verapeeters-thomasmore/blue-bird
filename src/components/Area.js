import {AREA_Y} from "../constants/dimensions";
import {useRef} from "react";
import {Plant} from "./Plant";

export function Area(props) {
    const {time, area} = props;
    const {plant, x, z, width, length} = area;
    const ref = useRef()

    return (
        <>
            <mesh
                {...props}
                ref={ref}
                position={[x, AREA_Y, z]}
                rotation-x={-Math.PI / 2}
                name="floor">
                <planeGeometry args={[width, length, 1, 1]}/>
                <meshLambertMaterial color={plant.flowerColor}/>
            </mesh>
            <Plant data={plant} time={time} x={x} z={z}/>
        </>
    )
}