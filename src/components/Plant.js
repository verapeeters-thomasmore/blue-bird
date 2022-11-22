import {useRef} from "react";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {PLANT_Y} from "../constants/dimensions";

function textureToUse(time, data) {
    if (time < data.timeLine.growStart || data.timeLine.die < time) return "";
    if (data.timeLine.flowerStart <= time && time <= data.timeLine.flowerEnd ) return data.textureWithFlower;
    return data.textureWithoutFlower;
}

export function Plant(props) {
    const {data, time} = props;
    const texture = textureToUse(time, data);
    if (!texture) return;

    const spriteMap = useLoader(TextureLoader, texture);
    const ref = useRef()
    return (
        <sprite
            {...props}
            ref={ref}
            position={[0, PLANT_Y, 0]}>
            <spriteMaterial map={spriteMap}>
            </spriteMaterial>
        </sprite>
    )
}