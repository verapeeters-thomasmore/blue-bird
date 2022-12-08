import {AREA_Y} from "../constants/dimensions";
import {useMemo, useRef} from "react";
import {Plant} from "./Plant";
import {calculatePlantPositions} from "../utils/area_utils";
import {SHOW_AREA_PLANES, useControlsContext} from "../contexts/ControlsContext";

function AreaPlane(props) {
    const {area} = props;
    const {controlValue} = useControlsContext();

    const {plant, x, z, width, length} = area;
    if (!controlValue(SHOW_AREA_PLANES)) return;
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
    const {time, area = true} = props;
    const {plant, width, length, x, z} = area;
    const areaSize = width * length;
    const nrOfPlants = Math.floor(areaSize * plant.plantsPerM2);
    const plantPositions = useMemo(() => calculatePlantPositions(nrOfPlants, width, length), [nrOfPlants, width, length]);
    // console.log(plant.shortName, area, areaSize, nrOfPlants, plantPositions)

    return (
        <>
            <AreaPlane area={area}/>
            {plantPositions.map(pos => <Plant key={pos.id} data={plant} time={time} x={x + pos.x} z={z + pos.z}/>)}
        </>
    )
}