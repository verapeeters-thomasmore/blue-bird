import {FaEye} from "react-icons/fa";
import {IoMdAdd, IoMdRemove} from "react-icons/io";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Button, Col, Container, Row} from "react-bootstrap";
import {SHOW_AREA_ID, useControlsContext} from "../contexts/ControlsContext";
import {ICON_SIZE} from "../constants/uiSizes";
import {useState} from "react";

function SmallButton(props) {
    const {onClick, children} = props;
    return (
        <Button size="sm" variant="outline-primary" className="border-0" onClick={onClick}>
            {children}
        </Button>
    )
}

function AreaInfo(props) {
    const {area} = props;
    const {toggleControlInCollection} = useControlsContext();

    return (
        <Row className=" ps-0 pe-2 m-1 bg-white">
            <Col xs="3" className="">
                <SmallButton onClick={() => toggleControlInCollection(SHOW_AREA_ID, area.id)}>
                    <FaEye size={ICON_SIZE}/>
                </SmallButton>
            </Col>
            <Col xs="2">{area.x.toFixed(2)}</Col>
            <Col xs="2">{area.z.toFixed(2)}</Col>
            <Col xs="2">{area.width.toFixed(2)}</Col>
            <Col xs="2">{area.length.toFixed(2)}</Col>
        </Row>
    );
}

function PlantHeaderLine(props) {
    const {plantWithAreas, showAllAreaInfos} = props;

    return (
        <>
            <Row className="m-2"
                 style={{backgroundColor: plantWithAreas.plant.flowerColor}}>
                <Col xs={showAllAreaInfos ? 4 : ""} className="m-2 bg-white">
                    {plantWithAreas.plant.name}
                </Col>
                {showAllAreaInfos && <Col>
                    {plantWithAreas.areas.map(a => <AreaInfo key={a.id} area={a}/>)}
                </Col>
                }
            </Row>
        </>
    );
}

function AreaInfoGroupedByPlant(props) {
    const {showAllAreaInfos} = props;

    const {areasSelectedGarden} = useGardenSelectorContext();
    const plantNamesSelectedGarden = [...new Set(areasSelectedGarden.map(a => a.plantName))];
    const plantsSelectedGardenWithAreas = plantNamesSelectedGarden.map(p => ({
        plantName: p,
        plant: areasSelectedGarden.find(a => a.plantName === p).plant,
        areas: areasSelectedGarden.filter(a => a.plantName === p)
    }));
    return (
        <>
            {plantsSelectedGardenWithAreas.map(p => <PlantHeaderLine key={p.plant.id} plantWithAreas={p}
                                                                     showAllAreaInfos={showAllAreaInfos}/>)}
        </>
    );
}

export function GardenAreaListPage() {
    const [showAllAreaInfos, setShowAllAreaInfos] = useState(false);

    return (
        <Container>
            <h3>plants:</h3>
            <SmallButton onClick={() => setShowAllAreaInfos(showAllAreaInfos => !showAllAreaInfos)}>
                {showAllAreaInfos ? <IoMdRemove size={ICON_SIZE}/> : <IoMdAdd size={ICON_SIZE}/>}
            </SmallButton>
            <AreaInfoGroupedByPlant showAllAreaInfos={showAllAreaInfos}/>
        </Container>
    )
}
