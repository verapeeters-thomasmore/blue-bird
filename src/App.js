import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import {World} from "./components/World";
import {Floor} from "./components/Floor";
import {useMemo, useState} from "react";
import {Form} from "react-bootstrap";
import {PLANT_DATA} from "./data/plant.data";
import {PlantCatalogus} from "./components/PlantCatalogus";
import {PREDEFINED_GARDENS} from "./data/area.data";
import {Areas} from "./components/Areas";
import {WORLD_SKY_BLUE} from "./constants/threeColors";
import {
    ControlsProvider, SHOW_AREA_PLANES,
    SHOW_AXES,
    SHOW_CATALOG,
    SHOW_FLOOR, SHOW_GARDEN,
    SHOW_WORLD,
    useControlsContext
} from "./contexts/ControlsContext";

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

function ControlsCheckBox(props) {
    const {title, controlKey} = props;
    const {controlValue, toggleControl} = useControlsContext();

    return (
        <Form.Check type="checkbox" label={title} checked={controlValue(controlKey)}
                    onChange={() => toggleControl(controlKey)}/>
    );
}

function ProvidedApp() {
    const [showControls, setShowControls] = useState(false);
    const {controlValue} = useControlsContext();

    const [time, setTime] = useState(24);
    const areas = useMemo(() => gardenEnrichedWithPlants(PREDEFINED_GARDENS[5].areas, PLANT_DATA), []);
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
                        <ControlsCheckBox title="axes" controlKey={SHOW_AXES}/>
                        <ControlsCheckBox title="world" controlKey={SHOW_WORLD}/>
                        <ControlsCheckBox title="floor" controlKey={SHOW_FLOOR}/>
                        <ControlsCheckBox title="catalog" controlKey={SHOW_CATALOG}/>
                        <ControlsCheckBox title="garden" controlKey={SHOW_GARDEN}/>
                        <ControlsCheckBox title="areas" controlKey={SHOW_AREA_PLANES}/>
                    </Form>
                </div>
            }
            <div className="m-1 p-1 bg-primary">
                <Form>
                    <Form.Control type="number" label="month" value={time}
                                  onChange={e => setTime(e.target.value)}/>
                </Form>
            </div>
            <Canvas style={{background: WORLD_SKY_BLUE}}>
                <MyCamera/>
                <ambientLight intensity={2.5}/>
                <spotLight position={[0, 20, 20]} angle={0.15} penumbra={1}/>
                {controlValue(SHOW_AXES) && <axesHelper/>}
                {controlValue(SHOW_WORLD) && <World/>}
                {controlValue(SHOW_FLOOR) && <Floor/>}
                {controlValue(SHOW_CATALOG) && <PlantCatalogus plants={PLANT_DATA} time={time}/>}
                {controlValue(SHOW_GARDEN) && <Areas time={time} areas={areas}/>}
                <OrbitControls/>
            </Canvas>
        </>
    )
}

export default function App() {
    return (
        <ControlsProvider>
            <ProvidedApp/>
        </ControlsProvider>
    )

}


/*
TODO
-- easy
* use controlsContext deeper?
* TimeContext
* modal for controls
* nice timer-slider
* timer cyclic
* timer autorun
* timer autorun fast/slow
* choose predefined garden
* controls in localstorage
* camera settings in localstorage
--- bigger stories
* plant topview
* edit areas
* database / storage
* tutorial
 */
