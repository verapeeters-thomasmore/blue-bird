import {SHOW_AXES, SHOW_CATALOG, SHOW_GARDEN, SHOW_WORLD, useControlsContext} from "../../contexts/ControlsContext";
import {Canvas} from "@react-three/fiber";
import {WORLD_SKY_BLUE} from "../../constants/threeColors";
import {Camera} from "./Camera";
import {World} from "./World";
import {Floor} from "./Floor";
import {PlantCatalogue} from "./PlantCatalogue";
import {PLANT_DATA} from "../../data/plant.data";
import {Areas} from "./Areas";
import {OrbitControls} from "@react-three/drei";
import {useGardenSelectorContext} from "../../contexts/GardenSelectorContext";


export function GardenCanvas(props) {
    const {editMode, flowerToEdit, fixedViewPoint} = props;
    const {areasSelectedGarden} = useGardenSelectorContext();
    const {getControlValue} = useControlsContext();

    // console.log("GardenCanvas", areasSelectedGarden);
    return (
        <>
            <Canvas style={{background: WORLD_SKY_BLUE}}
                    resize={{scroll: false}}>
                <Camera fixedViewPoint={fixedViewPoint}/>
                <ambientLight intensity={2.5}/>
                <spotLight position={[0, 20, 20]} angle={0.15} penumbra={1}/>
                {getControlValue(SHOW_AXES) && <axesHelper/>}
                {getControlValue(SHOW_WORLD) && <World/>}
                <Floor editMode={editMode} flowerToEdit={flowerToEdit}/>
                {getControlValue(SHOW_CATALOG) && <PlantCatalogue plants={PLANT_DATA}/>}
                {getControlValue(SHOW_GARDEN) && <Areas areas={areasSelectedGarden}/>}
                {<OrbitControls enabled={!editMode} maxPolarAngle={Math.PI / 2 - 0.07}/>}
                {/*<CameraAnimation/>*/}
            </Canvas>
        </>
    )
}