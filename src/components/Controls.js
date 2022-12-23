import {useState} from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {ControlsCheckBox} from "./ControlsCheckBox";
import {
    SHOW_AREA_PLANES,
    SHOW_AXES,
    SHOW_CATALOG,
    SHOW_FLOOR,
    SHOW_GARDEN,
    SHOW_WORLD
} from "../contexts/ControlsContext";
import {TbSettings} from "react-icons/tb";
import {ICON_SIZE} from "../constants/uiSizes";

function ControlsCheckBoxCol(props) {
    return <Col xs="6" sm="4" className="p-1">
        <ControlsCheckBox {...props}/>
    </Col>
}

function ControlsContent() {
    return (
        <div className="m-1 p-1">
            <Form>
                <Row>
                    <ControlsCheckBoxCol title="axes" controlKey={SHOW_AXES}/>
                    <ControlsCheckBoxCol title="world" controlKey={SHOW_WORLD}/>
                    <ControlsCheckBoxCol title="floor" controlKey={SHOW_FLOOR}/>
                    <ControlsCheckBoxCol title="catalog" controlKey={SHOW_CATALOG}/>
                    <ControlsCheckBoxCol title="garden" controlKey={SHOW_GARDEN}/>
                    <ControlsCheckBoxCol title="areas" controlKey={SHOW_AREA_PLANES}/>
                </Row>
            </Form>
        </div>
    )
}

export function Controls() {
    const [showControls, setShowControls] = useState(false);

    return (
        <>
            <div>
                <Button variant="outline-primary"
                        className="m-2 border-0"
                        onClick={() => setShowControls(true)}>
                    <TbSettings size={ICON_SIZE}/>
                </Button>
            </div>
            <Modal show={showControls}
                   onHide={() => setShowControls(showControls => !showControls)}>
                <Modal.Header closeButton>
                    <h3 className="ms-2">Controls</h3>
                </Modal.Header>
                <Modal.Body>
                    {<ControlsContent/>}
                </Modal.Body>
            </Modal>
        </>
    )
}