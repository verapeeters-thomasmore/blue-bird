import {Timer} from "../components/Timer";
import {GardenCanvas} from "../components/three/GardenCanvas";
import {useState} from "react";
import {PlantSelectionButtons} from "../components/PlantSelectionButtons";
import {VIEWPOINT_TOP} from "../contexts/CameraViewpointContext";

export function EditPage() {
    const [flowerToEdit, setFlowerToEdit] = useState(undefined);
    // console.log("EditPage", flowerToEdit)
    return (
        <>
            <Timer/>
            <div className="flex-grow-1">
                <GardenCanvas editMode={true} flowerToEdit={flowerToEdit} fixedViewPoint={VIEWPOINT_TOP}/>
            </div>
            <PlantSelectionButtons flowerToEdit={flowerToEdit} setFlowerToEdit={setFlowerToEdit}/>
        </>
    )
}