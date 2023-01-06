import {Button, Container, FormControl} from "react-bootstrap";
import {PREDEFINED_GARDENS} from "../data/area.data";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {SelectAndReturnButton} from "../components/SelectAndReturnButton";
import {ICON_SIZE} from "../constants/uiSizes";
import {BsFillFileEarmarkArrowDownFill, BsFillFileEarmarkArrowUpFill} from "react-icons/bs";
import {useState} from "react";
import {useNavigate} from "react-router";

function SaveGardenInFile() {
    const {saveAreasInFile} = useGardenSelectorContext();
    const [fileName, setFileName] = useState("");

    function save() {
        console.log("SAVE in ", fileName);
        if (!fileName) return;
        saveAreasInFile(fileName);
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
                        onClick={save}>
                    <BsFillFileEarmarkArrowUpFill size={ICON_SIZE}/>
                </Button>
            </div>
        </>
    );
}

function LoadGardenFromFile() {
    const {loadAreasFromFile} = useGardenSelectorContext();
    const [chosenFiles, setChosenFiles] = useState("");
    const navigate = useNavigate();

    function load() {
        if (!chosenFiles) return;
        console.log("LOAD", chosenFiles[0].name);
        loadAreasFromFile(chosenFiles[0]);
        navigate("/");
    }

    return (
        <>
            <h3>Load garden from file</h3>
            <div className="d-flex my-1 ">
                <FormControl type="file"
                             accept=".json"
                             onChange={e => setChosenFiles(e.target.files)}/>

                <Button className="my-2 ms-2"
                        title="load from file"
                        onClick={load}>
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

function Actions() {
    const {actions} = useGardenSelectorContext();

    return (
        <>
            <h3>Recent actions:</h3>
            {actions.map(a => <div>{a}</div>)}
        </>
    );
}

export function GardenSelectionPage() {
    return (
        <Container>
            <GardenSelectPredefined/>
            <SaveGardenInFile/>
            <LoadGardenFromFile/>
            <Actions/>
        </Container>
    )
}


