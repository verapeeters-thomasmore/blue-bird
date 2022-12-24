import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import {FaRegFolderOpen} from "react-icons/fa";
import {ICON_SIZE} from "../constants/uiSizes";
import {ShowModalButton} from "./ShowModalButton";
import {PREDEFINED_GARDENS} from "../data/area.data";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";

function GardenSelectorContent(props) {
    const {onHideModal} = props;
    const {selectGarden} = useGardenSelectorContext();
    return (
        <>
            {PREDEFINED_GARDENS.map(g =>
                <div key={g.name}>
                    <Button variant="outline-primary"
                            className="border-0"
                            onClick={() => {
                                selectGarden(g.name);
                                onHideModal();
                            }}>
                        {g.name}
                    </Button>
                </div>
            )}
        </>
    )
}

export function GardenSelector() {
    const [showGardenSelector, setShowGardenSelector] = useState(false);

    return (
        <>
            <ShowModalButton onShowModal={() => setShowGardenSelector(true)}>
                <FaRegFolderOpen size={ICON_SIZE}/>
            </ShowModalButton>
            <Modal show={showGardenSelector}
                   onHide={() => setShowGardenSelector(showGardenSelector => !showGardenSelector)}>
                <Modal.Header closeButton>
                    <h3 className="ms-2">Predefined Gardens</h3>
                </Modal.Header>
                <Modal.Body>
                    {<GardenSelectorContent onHideModal={() => setShowGardenSelector(false)}/>}
                </Modal.Body>
            </Modal>
        </>
    )
}