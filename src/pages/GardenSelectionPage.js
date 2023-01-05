import {Button, Container, FormControl} from "react-bootstrap";
import {PREDEFINED_GARDENS} from "../data/area.data";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {SelectAndReturnButton} from "../components/SelectAndReturnButton";
import {ICON_SIZE} from "../constants/uiSizes";
import {BsFillFileEarmarkArrowDownFill, BsFillFileEarmarkArrowUpFill} from "react-icons/bs";
import {useState} from "react";

function SaveGardenInFile() {
    const {areasSelectedGarden} = useGardenSelectorContext();
    const [fileName, setFileName] = useState("");

    function save() {
        console.log("SAVE in ", fileName);
        if (!fileName) return;

        const areasAsJSON = JSON.stringify(areasSelectedGarden);
        const blob = new Blob([areasAsJSON], {type: 'application/json'});
        const blobURL = window.URL.createObjectURL(blob);
        const tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = blobURL;
        tempLink.setAttribute('download', fileName + ".json");
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank');
        }
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
    }

    return (
        <>
            <h3>Save garden in file</h3>
            <div className="d-flex my-1 ">
                <FormControl type="text"
                             placeholder="filename to save this garden (in downloads folder)"
                             value={fileName}
                             onChange={e => setFileName(e.target.value)}/>

                <Button className="my-2 ms-2"
                        title="save in file"
                        onClick={() => save()}>
                    <BsFillFileEarmarkArrowUpFill size={ICON_SIZE}/>
                </Button>
            </div>
        </>
    );
}

function LoadGardenFromFile() {
    const {selectGarden, indexSelectedGarden, isDirty} = useGardenSelectorContext();
    const [fileName, setFileName] = useState("");

    return (
        <>
            <h3>Load garden from file</h3>
            <div className="d-flex my-1 ">
                <FormControl type="file"
                             value={fileName}
                             onChange={e => setFileName(e.target.value)}/>

                <Button className="my-2 ms-2"
                        title="load from file"
                        onClick={() => console.log("LOAD")}>
                    <BsFillFileEarmarkArrowDownFill size={ICON_SIZE}/>
                </Button>
            </div>
        </>
    );
}

function GardenSelectPredefined() {
    const {selectGarden, indexSelectedGarden, isDirty} = useGardenSelectorContext();
    return (
        <>
            <h3>Predefined gardens:</h3>
            <div className="py-2">
                {PREDEFINED_GARDENS.map((g, index) =>
                    <SelectAndReturnButton
                        key={g.name}
                        title={g.name}
                        isSelected={index === indexSelectedGarden}
                        isDirty={isDirty}
                        onSelect={() => selectGarden(g.name)}/>
                )}
            </div>
        </>
    )
}

export function GardenSelectionPage() {
    const {selectGarden, indexSelectedGarden, isDirty} = useGardenSelectorContext();
    return (
        <Container>
            <GardenSelectPredefined/>
            <SaveGardenInFile/>
            <LoadGardenFromFile/>
        </Container>
    )
}


