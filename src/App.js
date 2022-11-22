import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Box} from "./components/Box";
import {Earth} from "./components/Earth";
import {Floor} from "./components/Floor";
import {useState} from "react";

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
                <Box position={[-1.2, 0, 0]}/>
                <Box position={[1.2, 0, 0]}/>
                <Box position={[3, 0, 0]}/>
                <OrbitControls/>
            </Canvas>
        </>
    )
}
