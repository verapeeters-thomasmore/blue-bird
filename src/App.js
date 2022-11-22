import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Earth} from "./components/Earth";
import {Floor} from "./components/Floor";
import {useState} from "react";
import {Plant} from "./components/Plant";

const plantData = {
    textureWithoutFlower: "images/sprites/alium_christophii.png",
    textureWithFlower: "images/sprites/alium_christophii_flower.png",
    timeLine: {
        growStart: 18,
        growFinal: 21,
        flowerStart: 22,
        flowerEnd: 30,
        die: 42,
    },
};

export default function App() {
    const [showAxes, setShowAxes] = useState(false);
    const [time, setTime] = useState(19);
    return (
        <>
            <div>
                <label>
                    <input type="checkbox" checked={showAxes} onChange={() => setShowAxes(!showAxes)}/>
                    axes
                </label>
            </div>
            <Canvas>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                <pointLight position={[-10, -10, -10]}/>
                {showAxes && <axesHelper/>}
                <Earth/>
                <Floor/>
                <Plant data={plantData} time={time}/>
                <OrbitControls/>
            </Canvas>
        </>
    )
}
