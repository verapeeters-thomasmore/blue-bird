import {Accordion, Button, Container, FormControl} from "react-bootstrap";
import {PREDEFINED_GARDENS} from "../data/area.data";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {SelectAndReturnButton} from "../components/SelectAndReturnButton";
import {ICON_SIZE} from "../constants/uiSizes";
import {BsFillFileEarmarkArrowDownFill, BsFillFileEarmarkArrowUpFill} from "react-icons/bs";
import {useState} from "react";
import {useNavigate} from "react-router";
import {ConfirmationModal} from "../components/ConfirmationModal";
import {NAV_HOME} from "../constants/navigation";

function SaveGardenInFile() {
    const {saveAreasInFile} = useGardenSelectorContext();
    const [fileName, setFileName] = useState("");

    function save() {
        if (!fileName) return;
        saveAreasInFile(fileName);
    }

    return (
        <>
            <h6>Save garden in file</h6>
            <div className="d-flex my-1 ">
                <FormControl
                    style={{height: "fit-content", margin: "auto"}}
                    type="text"
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
    const {loadAreasFromFile, isDirty} = useGardenSelectorContext();
    const [chosenFiles, setChosenFiles] = useState("");
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const navigate = useNavigate();

    function handleConfirmation() {
        if (!chosenFiles) return;
        loadAreasFromFile(chosenFiles[0]);
        navigate(NAV_HOME);
    }

    return (
        <>
            <h6>Load garden from file</h6>
            <div className="d-flex my-1 ">
                <FormControl
                    style={{height: "fit-content", margin: "auto"}}
                    type="file"
                    accept=".json"
                    onChange={e => setChosenFiles(e.target.files)}/>

                <Button className="my-2 ms-2"
                        title="load from file"
                        onClick={()=> {
                            if (isDirty) setShowConfirmationModal(true)
                            else handleConfirmation();
                        }}>
                    <BsFillFileEarmarkArrowDownFill size={ICON_SIZE}/>
                </Button>
                <ConfirmationModal show={showConfirmationModal}
                                   title={`load from file`}
                                   messages={[`Load garden from file "${chosenFiles[0]?.name}"?`, `You will loose your changes!`]}
                                   handleClose={() => setShowConfirmationModal(false)}
                                   onOk={handleConfirmation}
                />
            </div>
        </>
    );
}

function GardenSelectPredefined() {
    const {selectGarden, indexSelectedGarden, isDirty} = useGardenSelectorContext();
    return (
        <>
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

function ActionHistory() {
    const {actions} = useGardenSelectorContext();

    return (
        <>
            {actions.map((a, index) => <div key={index}>{a}</div>)}
        </>
    );
}

function GardenSelectionAccordianItem(props) {
    const {eventKey, title, children} = props;
    return (
        <Accordion.Item eventKey={eventKey} className="my-2">
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>{children}</Accordion.Body>
        </Accordion.Item>

    )
}

export function GardenSelectionPage() {
    return (
        <Container className="my-1">
            <Accordion alwaysOpen>
                <GardenSelectionAccordianItem eventKey={0} title="Predefined gardens">
                    <GardenSelectPredefined/>
                </GardenSelectionAccordianItem>
                <GardenSelectionAccordianItem eventKey={1} title="Gardens in files">
                    <SaveGardenInFile/>
                    <LoadGardenFromFile/>
                </GardenSelectionAccordianItem>
                <GardenSelectionAccordianItem eventKey={2} title="History">
                    <ActionHistory/>
                </GardenSelectionAccordianItem>
            </Accordion>
        </Container>
    )
}


