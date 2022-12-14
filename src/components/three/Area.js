import {AREA_LENGTH, AREA_WIDTH, AREA_Y} from "../../constants/dimensions";
import {useMemo, useRef} from "react";
import {Plant} from "./Plant";
import {calculatePlantPositions} from "../../utils/area_utils";
import {useMessageInfoContext} from "../../contexts/MessageInfoContext";
import {useGardenSelectorContext} from "../../contexts/GardenSelectorContext";

function AreaPlane(props) {
    const {area} = props;
    const {showAreasToggleApi} = useGardenSelectorContext();
    const {addAreaInfoMessage, clearAreaInfoMessage} = useMessageInfoContext();
    const {isItemShown: isAreaItemShown} = showAreasToggleApi;
    const {plant, x, z} = area;
    const ref = useRef()

    if (!isAreaItemShown(area.id)) return;
    if (area.x === undefined || area.z === undefined) return;

    return (
        <mesh
            {...props}
            ref={ref}
            position={[x, AREA_Y, z]}
            rotation-x={-Math.PI / 2}
            name="floor"
            onPointerEnter={() => addAreaInfoMessage(area)}
            onPointerLeave={() => clearAreaInfoMessage(area)}
        >
            <planeGeometry args={[AREA_WIDTH, AREA_LENGTH, 1, 1]}/>
            <meshLambertMaterial color={plant.flowerColor}/>
        </mesh>
    );
}


export function Area(props) {
    const {area} = props;
    const {plant, x, z} = area;
    const nrOfPlants = Math.floor(plant.plantsPerM2); //because area_width==area_length==1
    const plantPositions = useMemo(() => calculatePlantPositions(nrOfPlants), [nrOfPlants]);
    // console.log(plant.shortName, area, areaSize, nrOfPlants, plantPositions)
    const {showPlantsToggleApi} = useGardenSelectorContext();
    const {isItemShown: isPlantsItemShown} = showPlantsToggleApi;

    return (
        <>
            <AreaPlane area={area}/>
            {isPlantsItemShown(area.id) && plantPositions.map(pos =>
                <Plant key={pos.id} data={plant}
                       x={x + pos.x} z={z + pos.z}/>)}
        </>
    )
}