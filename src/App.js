import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import {Earth} from "./components/Earth";
import {Floor} from "./components/Floor";
import {useState} from "react";
import {Plant} from "./components/Plant";
import {Form} from "react-bootstrap";
import {PLANT_DATA} from "./data/plant.data";

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
                <Plant data={PLANT_DATA[0]} time={time} position_x={1} position_z={0}/>
                <Plant data={PLANT_DATA[1]} time={time} position_x={1} position_z={1}/>
                <Plant data={PLANT_DATA[2]} time={time} position_x={1} position_z={2}/>
                <OrbitControls/>
            </Canvas>
        </>
    )
}
