import {
    SHOW_AXES,
    SHOW_CATALOG,
    SHOW_FLOOR,
    SHOW_GARDEN,
    SHOW_WORLD,
    useControlsContext
} from "../contexts/ControlsContext";
import {Canvas} from "@react-three/fiber";
import {WORLD_SKY_BLUE} from "../constants/threeColors";
import {Camera} from "./Camera";
import {World} from "./World";
import {Floor} from "./Floor";
import {PlantCatalogus} from "./PlantCatalogus";
import {PLANT_DATA} from "../data/plant.data";
import {Areas} from "./Areas";
import {OrbitControls} from "@react-three/drei";

export function GardenCanvas(props) {
    const {areas} = props;
    const {controlValue} = useControlsContext();

    return (
        <Canvas style={{background: WORLD_SKY_BLUE}}>
            <Camera/>
            <ambientLight intensity={2.5}/>
            <spotLight position={[0, 20, 20]} angle={0.15} penumbra={1}/>
            {controlValue(SHOW_AXES) && <axesHelper/>}
            {controlValue(SHOW_WORLD) && <World/>}
            {controlValue(SHOW_FLOOR) && <Floor/>}
            {controlValue(SHOW_CATALOG) && <PlantCatalogus plants={PLANT_DATA}/>}
            {controlValue(SHOW_GARDEN) && <Areas areas={areas}/>}
            <OrbitControls/>
        </Canvas>
    )
}