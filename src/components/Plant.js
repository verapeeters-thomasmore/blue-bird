import {useEffect, useRef} from "react";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

export function Plant(props) {
    const spriteMap = useLoader(TextureLoader, "images/sprites/alium_christophii_flower.png");
    const ref = useRef()
    useEffect(() => {
        ref.current.rotation.x = -Math.PI / 2
        ref.current.receiveShadow = true;
    }, [])
    return (
        <sprite
            {...props}
            ref={ref}
            position={[0, 0.45, 0]}>
            <spriteMaterial map={spriteMap}>
            </spriteMaterial>
        </sprite>
    )
}