import {Col, Container, Row} from "react-bootstrap";
import {ControlsCheckBox} from "../components/ControlsCheckBox";
import {
    SHOW_AREA_PLANES,
    SHOW_AXES,
    SHOW_CATALOG,
    SHOW_FLOOR,
    SHOW_GARDEN,
    SHOW_PLANTS,
    SHOW_WORLD
} from "../contexts/ControlsContext";

function ControlsCheckBoxCol(props) {
    return <Col xs="6" sm="4" className="p-1">
        <ControlsCheckBox {...props}/>
    </Col>
}

export function ControlsPage() {
    return (
        <Container>
            <h3>show:</h3>
            <Row className="m-1 p-2 border">
                <ControlsCheckBoxCol title="axes" controlKey={SHOW_AXES}/>
                <ControlsCheckBoxCol title="world" controlKey={SHOW_WORLD}/>
                <ControlsCheckBoxCol title="floor" controlKey={SHOW_FLOOR}/>
                <ControlsCheckBoxCol title="catalog" controlKey={SHOW_CATALOG}/>
                <ControlsCheckBoxCol title="garden" controlKey={SHOW_GARDEN}/>
                <ControlsCheckBoxCol title="areas" controlKey={SHOW_AREA_PLANES}/>
                <ControlsCheckBoxCol title="plants" controlKey={SHOW_PLANTS}/>
            </Row>
        </Container>
    )
}