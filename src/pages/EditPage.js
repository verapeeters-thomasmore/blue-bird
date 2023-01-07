import {Timer} from "../components/Timer";
import {GardenCanvas} from "../components/three/GardenCanvas";
import {useState} from "react";
import {PlantSelectionButtons} from "../components/PlantSelectionButtons";
import {VIEWPOINT_TOP} from "../contexts/CameraViewpointContext";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {AreaInfoPopup} from "../components/AreaInfoPopup";

export function EditPage() {
    const {plantDataForSelectedGarden} = useGardenSelectorContext();
    const [flowerToEdit, setFlowerToEdit] = useState(plantDataForSelectedGarden[0]?.shortName); //plant.shortName
    // console.log("EditPage", flowerToEdit)
    return (
        <>
            <Timer/>
            <div className="flex-grow-1">
                <GardenCanvas editMode={true} flowerToEdit={flowerToEdit} fixedViewPoint={VIEWPOINT_TOP}/>
            </div>
            <PlantSelectionButtons flowerToEdit={flowerToEdit} setFlowerToEdit={setFlowerToEdit}/>
            <AreaInfoPopup/>
        </>
    )
}