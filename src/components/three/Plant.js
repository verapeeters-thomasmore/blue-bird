import {useEffect, useRef} from "react";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {PLANT_ANTI_FLOAT_CORRECTION_Y} from "../../constants/dimensions";
import {useTimeContext} from "../../contexts/TimeContext";

function textureToUse(time, data) {
    if (time < data.timeLine.growStart || data.timeLine.die < time) return "";
    if (data.timeLine.flowerStart <= time && time <= data.timeLine.flowerEnd) return data.textureWithFlower;
    return data.textureWithoutFlower;
}

function getScaleFromTime(time, data) {
    const {growStart, growFinal, die} = data.timeLine;
    if (time < growStart || die < time) return 0;
    if (time < growFinal) return (time - growStart) / (growFinal - growStart);
    return 1;

}

/*
the sprites are squares (65x65)
 */
export function Plant(props) {
    const {data, x, z} = props;
    const {time} = useTimeContext();

    const texture = textureToUse(time, data);
    const scaleFromTime = getScaleFromTime(time, data);
    const heightToDisplayInMeter = data.maxHeight / 100;
    const heightToDisplayScaledForTime = heightToDisplayInMeter * scaleFromTime;
    if (!texture) return;

    const spriteMap = useLoader(TextureLoader, texture);
    const ref = useRef()
    useEffect(() => {
        ref.current.scale.set(heightToDisplayScaledForTime, heightToDisplayScaledForTime, 1)
    })

    return (
        <sprite
            {...props}
            ref={ref}
            /*default y is at centre of sprite --> so move 1/2 height up*/
            position={[x, heightToDisplayScaledForTime / 2 - PLANT_ANTI_FLOAT_CORRECTION_Y, z]}>
            <spriteMaterial map={spriteMap}/>
        </sprite>
    )
}