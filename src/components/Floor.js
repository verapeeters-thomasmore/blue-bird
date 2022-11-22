import {WORLD_FLOOR_BROWN} from "../constants/threeColors";
import {useEffect, useRef} from "react";

export function Floor(props) {
    const {width=10, length=10} = props;
    const ref = useRef()
    useEffect(() => {
        ref.current.rotation.x = -Math.PI / 2
        ref.current.receiveShadow = true;
    }, [])
    return (
        <mesh
            {...props}
            ref={ref}
            position={[0, -0.1, 0]}
            name="floor">
            <planeGeometry args={[width, length, 1, 1]}/>
            <meshLambertMaterial color={WORLD_FLOOR_BROWN}/>
        </mesh>
    )
}