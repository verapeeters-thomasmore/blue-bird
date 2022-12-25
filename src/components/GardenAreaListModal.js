import {BsCardList} from "react-icons/bs";
import {FaEye} from "react-icons/fa";
import {ICON_SIZE} from "../constants/uiSizes";
import {GeneralModal} from "./GeneralModal";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Button, Col, Container, Row} from "react-bootstrap";
import {SHOW_AREA_ID, useControlsContext} from "../contexts/ControlsContext";

function AreaInfo(props) {
    const {area} = props;
    const {toggleControlInCollection} = useControlsContext();

    return (
        <Row className="border px-1 m-0">
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


function GardenAreaListModalContent() {
    const {areasSelectedGarden} = useGardenSelectorContext();
    return (
        <Container>
            {areasSelectedGarden.map(a => <AreaInfo key={a.id} area={a}/>)}
        </Container>
    )
}

export function GardenAreaListModal() {
    return (
        <GeneralModal icon={<BsCardList size={ICON_SIZE}/>}
                      title="Area list"
                      isDefaultOpen={true}>
            <GardenAreaListModalContent/>
        </GeneralModal>
    )
}
