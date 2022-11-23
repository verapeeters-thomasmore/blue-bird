import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import {World} from "./components/World";
import {Floor} from "./components/Floor";
import {useState} from "react";
import {Form} from "react-bootstrap";
import {PLANT_DATA} from "./data/plant.data";
import {PlantCatalogus} from "./components/PlantCatalogus";
import {PREDEFINED_GARDENS} from "./data/area.data";
import {Areas} from "./components/Areas";

function MyCamera() {
    // noinspection RequiredAttributes
    return (
        <PerspectiveCamera makeDefault position={[0, 3, 20]} zoom={5}/>
    );
}

function gardenEnrichedWithPlants(garden, plants) {
    return garden.map(area => ({...area, plant: plants.find(p => p.shortName === area.plantName)}))
}

function MyCheckBox(props) {
    const {title, value, setValue} = props;
    return (
        <Form.Check type="checkbox" label={title} checked={value}
                    onChange={() => setValue(!value)}/>
    );
}

export default function App() {
    const [showControls, setShowControls] = useState(false);
    const [showWorld, setShowWorld] = useState(true);
    const [showFloor, setShowFloor] = useState(true);
    const [showAxes, setShowAxes] = useState(false);
    const [showCatalog, setShowCatalog] = useState(false);
    const [showGarden, setShowGarden] = useState(true);
    const [showAreaPlanes, setShowAreaPlanes] = useState(false);
    const [time, setTime] = useState(24);
    const areas = gardenEnrichedWithPlants(PREDEFINED_GARDENS[5].areas, PLANT_DATA);
    //console.log(areas);
    return (
        <>
            <div className="m-1 p-1 bg-primary">
                <Form>
                    <MyCheckBox title="controls" value={showControls} setValue={setShowControls}/>
                </Form>
            </div>
            {showControls &&
                <div className="m-1 p-1 bg-primary">
                    <Form>
                        <MyCheckBox title="axes" value={showAxes} setValue={setShowAxes}/>
                        <MyCheckBox title="world" value={showWorld} setValue={setShowWorld}/>
                        <MyCheckBox title="floor" value={showFloor} setValue={setShowFloor}/>
                        <MyCheckBox title="catalog" value={showCatalog} setValue={setShowCatalog}/>
                        <MyCheckBox title="garden" value={showGarden} setValue={setShowGarden}/>
                        <MyCheckBox title="areas" value={showAreaPlanes} setValue={setShowAreaPlanes}/>
                    </Form>
                </div>
            }
            <div className="m-1 p-1 bg-primary">
                <Form>
                    <Form.Control type="number" label="month" value={time}
                                  onChange={e => setTime(e.target.value)}/>
                </Form>
            </div>
            <Canvas>
                <MyCamera/>
                <ambientLight intensity={2.5}/>
                <spotLight position={[0, 20, 20]} angle={0.15} penumbra={1}/>
                {showAxes && <axesHelper/>}
                {showWorld && <World/>}
                {showFloor && <Floor/>}
                {showCatalog && <PlantCatalogus plants={PLANT_DATA} time={time} showAreaPlanes={showAreaPlanes}/>}
                {showGarden && <Areas time={time} showAreaPlanes={showAreaPlanes}
                                      areas={areas}/>}
                <OrbitControls/>
            </Canvas>
        </>
    )
}
