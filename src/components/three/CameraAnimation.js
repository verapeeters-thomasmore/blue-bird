import {useTimeContext} from "../../contexts/TimeContext";
import {useEffect, useState} from "react";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";


/*
FAILED: werkt niet goed - te veel schokjes - niet mooi s
 */

const positions = [
    {x: -10, y: 8, z: 20},
    {x: -8, y: 8, z: 20},
    {x: -5, y: 8, z: 20},
    {x: -3, y: 8, z: 20},
    {x: 0, y: 8, z: 20},
    {x: 0, y: 10, z: 20},
    {x: 0, y: 12, z: 20},
    {x: -3, y: 12, z: 20},
    {x: -5, y: 12, z: 20},
    {x: -8, y: 12, z: 20},
    {x: -10, y: 12, z: 20},
];
const nextPosVector = new THREE.Vector3(positions[0].x, positions[0].y, positions[0].z);

export function CameraAnimation() {
    const {isTimerRunning} = useTimeContext()
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const nextPos = positions[index % positions.length];
        nextPosVector.set(nextPos.x, nextPos.y, nextPos.z)
    }, [index]);

    useFrame(state => {
        if (isTimerRunning) {
            state.camera.position.lerp(nextPosVector, .025);
            // console.log("useFrame", state.camera.position, distance);
            const distance = state.camera.position.distanceTo(nextPosVector);
            if (distance < 1) setIndex(index => index + 1);
        }
        return null
    })
    return null;
}