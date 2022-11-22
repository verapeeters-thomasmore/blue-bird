import {WORLD_FLOOR_BROWN} from "../constants/threeColors";
import {useEffect, useRef} from "react";
import {FLOOR_LENGTH, FLOOR_WIDTH, FLOOR_Y} from "../constants/dimensions";

export function Floor(props) {
    const {width=FLOOR_WIDTH, length=FLOOR_LENGTH} = props;
    const ref = useRef()
    useEffect(() => {
        ref.current.rotation.x = -Math.PI / 2
        ref.current.receiveShadow = true;
    }, [])
    return (
        <mesh
            {...props}
            ref={ref}
            position={[0, FLOOR_Y, 0]}
            name="floor">
            <planeGeometry args={[width, length, 1, 1]}/>
            <meshLambertMaterial color={WORLD_FLOOR_BROWN}/>
        </mesh>
    )
}