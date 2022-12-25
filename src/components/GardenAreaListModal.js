import {BsCardList} from "react-icons/bs";
import {ICON_SIZE} from "../constants/uiSizes";
import {GeneralModal} from "./GeneralModal";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Col, Container, Row} from "react-bootstrap";

function AreaInfo(props) {
    const {area} = props;
    return (
        <Row className="border">
            <Col xs="1" style={{backgroundColor: area.plant.flowerColor}}>{" "}</Col>
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
            {areasSelectedGarden.map(a => <AreaInfo key={a.key} area={a}/>)}
        </Container>
    )
}

export function GardenAreaListModal() {
    return (
        <GeneralModal icon={<BsCardList size={ICON_SIZE}/>}
                      title="Area list">
            <GardenAreaListModalContent/>
        </GeneralModal>
    )
}
