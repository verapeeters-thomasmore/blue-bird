import {Timer} from "../components/Timer";
import {GardenCanvas} from "../components/three/GardenCanvas";
import {Button} from "react-bootstrap";
import {useState} from "react";

export function EditPage() {
    const [flowerToEdit, setFlowerToEdit] = useState(undefined);
    // console.log(flowerToEdit)

    return (
        <>
            <Timer/>
            <div className="flex-grow-1">
                <GardenCanvas editMode={true} flowerToEdit={flowerToEdit}/>
            </div>
            <div className="position-absolute ms-2 mt-2 d-flex flex-column"
                 style={{top: "70px"}}>
                <Button size="sm" className="m-1" onClick={() => setFlowerToEdit("camissia")}>camissia</Button>
                <Button size="sm" className="m-1" onClick={() => setFlowerToEdit("eremurus")}>eremurus</Button>
                <Button size="sm" className="m-1" onClick={() => setFlowerToEdit("nepeta")}>nepeta</Button>
                <Button size="sm" className="m-1" onClick={() => setFlowerToEdit(undefined)}>clear</Button>
            </div>
        </>
    )
}