import {AREA_Y} from "../constants/dimensions";
import {useRef, useState} from "react";
import {Plant} from "./Plant";
import {calculatePlantPositions} from "../utils/area_utils";

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
    const areaSize = width * length;
    const [nrOfPlants, setNrOfPlants] = useState(Math.floor(areaSize * area.plant.plantsPerM2));
    const [plantPositions, setPlantPositions] = useState(() => calculatePlantPositions(nrOfPlants, width, length));
    console.log(area, areaSize, nrOfPlants, plantPositions)

    return (
        <>
            <AreaPlane area={area} showAreaPlanes={showAreaPlanes}/>
            <Plant data={plant} time={time} x={x} z={z}/>
        </>
    )
}