import {WORLD_FLOOR_BROWN} from "../../constants/threeColors";
import {useCallback, useEffect, useRef} from "react";
import {FLOOR_LENGTH, FLOOR_WIDTH, FLOOR_Y} from "../../constants/dimensions";
import {SHOW_FLOOR, useControlsContext} from "../../contexts/ControlsContext";
import {useGardenSelectorContext} from "../../contexts/GardenSelectorContext";

export function FloorMesh(props) {
    const {width = FLOOR_WIDTH, length = FLOOR_LENGTH} = props;
    const ref = useRef()
    useEffect(() => {
        ref.current.receiveShadow = true;
    }, [])
    return (
        <mesh
            {...props}
            ref={ref}
            position={[0, FLOOR_Y, 0]}
            rotation-x={-Math.PI / 2}
            name="floor">
            <planeGeometry args={[width, length, 1, 1]}/>
            <meshLambertMaterial color={WORLD_FLOOR_BROWN}/>
        </mesh>
    )
}

export function Floor(props) {
    const {editMode, flowerToEdit} = props;
    const {getControlValue} = useControlsContext();
    const {addArea, clearArea} = useGardenSelectorContext();

    if (!getControlValue(SHOW_FLOOR)) return;
    if (!editMode) return <FloorMesh/>;

        const onClick = useCallback(
        e => {
            const roundedX = Math.round(e.point.x);
            const roundedZ = Math.round(e.point.z);
            // console.log("onClick", flowerToEdit, roundedX, roundedZ);
            if (flowerToEdit)
                addArea(roundedX, roundedZ, flowerToEdit);
            else
                clearArea(roundedX, roundedZ);
        },
        [addArea, clearArea, flowerToEdit]);

    return (
        <FloorMesh onClick={onClick}/>
    )
}