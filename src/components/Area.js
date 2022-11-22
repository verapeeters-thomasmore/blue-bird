import {AREA_Y} from "../constants/dimensions";
import {useRef} from "react";
import {Plant} from "./Plant";

function AreaPlane(props) {
    const {area, showAreaPlanes} = props;
    const {plant, x, z, width, length} = area;
    if (!showAreaPlanes) return;
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
    );
}


export function Area(props) {
    const {time, area, showAreaPlanes} = props;
    const {plant, x, z, width, length} = area;

    return (
        <>
            <AreaPlane area={area} showAreaPlanes={showAreaPlanes}/>
            <Plant data={plant} time={time} x={x} z={z}/>
        </>
    )
}