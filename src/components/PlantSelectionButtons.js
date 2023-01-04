import {MdOutlineDelete} from "react-icons/md";
import {ICON_SIZE, PLANT_PICTURE_SIZE_SMALL} from "../constants/uiSizes";
import {Button} from "react-bootstrap";
import {GrAdd} from "react-icons/gr";
import {PlantPicture} from "./PlantPicture";
import {findPlantData} from "../utils/plant_utils";
import {PLANT_DATA} from "../data/plant.data";

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

//TODO: can't change text-color???
function AddButton() {
    return (
        <Button size="sm"
                variant=""
                className="m-1 p-0 bg-light"
                onClick={() => undefined}>
            <GrAdd size={PLANT_PICTURE_SIZE_SMALL} />
        </Button>
    );
}

//TODO move to context
const plantsInGarden = [
    findPlantData(PLANT_DATA, "camissia"),
    findPlantData(PLANT_DATA, "eremurus"),
    findPlantData(PLANT_DATA, "nepeta"),
];


export function PlantSelectionButtons(props) {
    const {flowerToEdit, setFlowerToEdit} = props;
    return (
        <div className="position-absolute ms-2 mt-2 d-flex flex-column"
             style={{top: "70px"}}>
            {plantsInGarden.map(p =>
                <SelectPlantButton key={p.id} plant={p} flowerToEdit={flowerToEdit}
                                   setFlowerToEdit={setFlowerToEdit}/>)
            }
            <SelectButton onClick={() => setFlowerToEdit()}
                          isSelected={!flowerToEdit}>
                <MdOutlineDelete size={PLANT_PICTURE_SIZE_SMALL}/>
            </SelectButton>
            <AddButton/>
        </div>
    )
}