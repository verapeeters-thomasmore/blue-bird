import {Col, Form, Row} from "react-bootstrap";
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
import {GeneralModal} from "./GeneralModal";

function ControlsCheckBoxCol(props) {
    return <Col xs="6" sm="4" className="p-1">
        <ControlsCheckBox {...props}/>
    </Col>
}

function ControlsModalContent() {
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

export function ControlsModal() {
    return (
        <GeneralModal icon={<TbSettings size={ICON_SIZE}/>}
                      title="Controls">
            <ControlsModalContent/>
        </GeneralModal>
    )
}