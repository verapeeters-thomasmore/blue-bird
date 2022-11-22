import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import {Earth} from "./components/Earth";
import {Floor} from "./components/Floor";
import {useState} from "react";
import {Plant} from "./components/Plant";
import {Form} from "react-bootstrap";

const plantDataCamissia = {
    name: "Camassia leichtlinii ('Alba')",
    textureWithoutFlower: "images/sprites/camissia.png",
    textureWithFlower: "images/sprites/camissia_flower.png",
    maxHeight: 70,
    timeLine: {
        growStart: 12,
        growFinal: 15,
        flowerStart: 18,
        flowerEnd: 20,
        die: 52,
    },
};
const plantDataAliumC = {
    textureWithoutFlower: "images/sprites/alium_christophii.png",
    textureWithFlower: "images/sprites/alium_christophii_flower.png",
    maxHeight: 50,
    timeLine: {
        growStart: 18,
        growFinal: 21,
        flowerStart: 22,
        flowerEnd: 30,
        die: 42,
    },
};

function MyCamera() {
    // noinspection RequiredAttributes
    return (
        <PerspectiveCamera makeDefault position={[0, 2, 10]}/>
    );
}

export default function App() {
    const [showAxes, setShowAxes] = useState(false);
    const [time, setTime] = useState(19);
    return (
        <>
            <div className="m-1 p-1 bg-primary">
                <Form>
                    <Form.Check type="checkbox" label="axes" checked={showAxes}
                                onChange={() => setShowAxes(!showAxes)}/>
                    <Form.Control type="number" label="month" value={time}
                                  onChange={e => setTime(e.target.value)}/>
                </Form>
            </div>
            <Canvas>
                <MyCamera/>
                <ambientLight intensity={2.5}/>
                <spotLight position={[0, 20, 20]} angle={0.15} penumbra={1}/>
                {showAxes && <axesHelper/>}
                <Earth/>
                <Floor/>
                <Plant data={plantDataCamissia} time={time} position_x={2} position_z={2}/>
                <Plant data={plantDataAliumC} time={time} position_x={1} position_z={1}/>
                <OrbitControls/>
            </Canvas>
        </>
    )
}
