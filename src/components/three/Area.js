import {AREA_LENGTH, AREA_WIDTH, AREA_Y} from "../../constants/dimensions";
import {useMemo, useRef} from "react";
import {Plant} from "./Plant";
import {calculatePlantPositions} from "../../utils/area_utils";
import {useControlsContext} from "../../contexts/ControlsContext";
import {useMessageInfoContext} from "../../contexts/MessageInfoContext";

//TODO onMoveIn is not correct (no internet on train)
function AreaPlane(props) {
    const {area} = props;
    const {showAreasToggleApi} = useControlsContext();
    const {addAreaInfoMessage, clearAreaInfoMessage} = useMessageInfoContext();
    const {isItemShown: isAreaItemShown} = showAreasToggleApi;
    const {plant, x, z} = area;
    const ref = useRef()

    if (!isAreaItemShown(area.id)) return;

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
    const {showPlantsToggleApi} = useControlsContext();
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