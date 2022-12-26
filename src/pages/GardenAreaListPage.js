import {FaEye} from "react-icons/fa";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Button, Col, Container, Row} from "react-bootstrap";
import {SHOW_AREA_ID, useControlsContext} from "../contexts/ControlsContext";

function AreaInfo(props) {
    const {area} = props;
    const {toggleControlInCollection} = useControlsContext();

    return (
        <Row className=" ps-0 pe-2 m-1 bg-white">
            <Col xs="1" style={{backgroundColor: area.plant.flowerColor}} className="p-0">
                <Button variant="outline-dark" className="border-0 p-2"
                        onClick={() => toggleControlInCollection(SHOW_AREA_ID, area.id)}>
                    <FaEye/>
                </Button>
            </Col>
            <Col xs="7">{area.plantName}</Col>
            <Col xs="1">{area.x.toFixed(2)}</Col>
            <Col xs="1">{area.z.toFixed(2)}</Col>
            <Col xs="1">{area.width.toFixed(2)}</Col>
            <Col xs="1">{area.length.toFixed(2)}</Col>
        </Row>
    );
}

export function GardenAreaListPage() {
    const {areasSelectedGarden} = useGardenSelectorContext();
    return (
        <Container>
            <h3>areas:</h3>
            {areasSelectedGarden.map(a => <AreaInfo key={a.id} area={a}/>)}
        </Container>
    )
}
