import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Earth} from "./components/Earth";
import {Floor} from "./components/Floor";
import {useState} from "react";
import {Plant} from "./components/Plant";

export default function App() {
    const [showAxes, setShowAxes] = useState(false);
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
                <Plant/>
                <OrbitControls/>
            </Canvas>
        </>
    )
}
