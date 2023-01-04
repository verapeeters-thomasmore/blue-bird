import {MdOutlineDelete} from "react-icons/md";
import {ICON_SIZE} from "../constants/uiSizes";
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
                className={`m-1 p-0`}
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
                <MdOutlineDelete size={ICON_SIZE}/>
            </SelectButton>
            <Button size="sm" className="m-1" onClick={() => undefined}><GrAdd size={ICON_SIZE}/></Button>
        </div>
    )
}