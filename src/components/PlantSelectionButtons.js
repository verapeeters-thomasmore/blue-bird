import {MdAdd, MdOutlineDelete} from "react-icons/md";
import {MENU_HEIGHT, PLANT_PICTURE_SIZE_SMALL} from "../constants/uiSizes";
import {Button} from "react-bootstrap";
import {PlantPicture} from "./PlantPicture";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";

function SelectButton(props) {
    const {children, onClick, isSelected, title} = props;
    return (
        <Button size="sm"
                variant={`${isSelected ? "info" : "light"}`}
                className={`m-1 p-0 ${isSelected ? "text-light" : "text-info"}`}
                title={title}
                onClick={onClick}>
            {children}
        </Button>
    );
}

function SelectPlantButton(props) {
    const {plant, flowerToEdit, setFlowerToEdit} = props;
    // console.log("SelectedPlantButton", flowerToEdit, plant.shortName)
    return (
        <SelectButton onClick={() => setFlowerToEdit(plant.shortName)}
                      title={plant.name}
                      isSelected={flowerToEdit === plant.shortName}>
            <PlantPicture plant={plant}/>
        </SelectButton>
    );
}

function AddButton() {
    return (
        <Button size="sm"
                variant=""
                className="m-1 p-0 bg-light text-info"
                onClick={() => undefined}>
            <MdAdd size={PLANT_PICTURE_SIZE_SMALL}/>
        </Button>
    );
}

function ClearButton(props) {
    const {setFlowerToEdit, flowerToEdit} = props;
    return <SelectButton onClick={() => setFlowerToEdit(undefined)}
                         isSelected={!flowerToEdit}>
        <MdOutlineDelete size={PLANT_PICTURE_SIZE_SMALL}/>
    </SelectButton>;
}


export function PlantSelectionButtons(props) {
    const {flowerToEdit, setFlowerToEdit} = props;
    const {plantDataForSelectedGarden} = useGardenSelectorContext();

    return (
        <div className="position-absolute ms-1 mt-2 d-flex flex-column"
             style={{top: MENU_HEIGHT}}>
            {plantDataForSelectedGarden.map(p =>
                <SelectPlantButton key={p.id} plant={p} flowerToEdit={flowerToEdit}
                                   setFlowerToEdit={setFlowerToEdit}/>)
            }
            <ClearButton flowerToEdit={flowerToEdit} setFlowerToEdit={setFlowerToEdit}/>
            <AddButton/>
        </div>
    )
}