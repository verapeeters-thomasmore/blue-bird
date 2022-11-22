import {useEffect, useRef} from "react";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

function textureToUse(time, data) {
    if (time < data.timeLine.growStart || data.timeLine.die < time) return "";
    if (data.timeLine.flowerStart <= time && time <= data.timeLine.flowerEnd) return data.textureWithFlower;
    return data.textureWithoutFlower;
}

function heightFactorToUse(time, data) {
    const {growStart, growFinal, die} = data.timeLine;
    if (time < growStart || die < time) return 0;
    if (time < growFinal) return (time - growStart) / (growFinal - growStart);
    return 1;

}

//take into account that spritepictures are 65x65
const heightFactor = 1 / 65;

export function Plant(props) {
    const {data, time, position_x, position_z} = props;
    const texture = textureToUse(time, data);
    const scaleHeight = heightFactorToUse(time, data);
    const factoredMaxHeight = data.maxHeight * heightFactor;
    const height = data.maxHeight * scaleHeight * heightFactor;

    if (!texture) return;


    const spriteMap = useLoader(TextureLoader, texture);
    const ref = useRef()
    useEffect(() => {
        //default y: centre of sprite is at 0
        ref.current.position.set(position_x, height / 2 - 0.02, position_z);
        ref.current.scale.set(factoredMaxHeight, height, 1)
    })

    return (
        <sprite
            {...props}
            ref={ref}
            position={[0, 0, 0]}>
            <spriteMaterial map={spriteMap}/>
        </sprite>
    )
}