import {FaEye} from "react-icons/fa";
import {RxTriangleDown, RxTriangleRight} from "react-icons/rx";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useControlsContext} from "../contexts/ControlsContext";
import {ICON_SIZE, ICON_SIZE_SMALL} from "../constants/uiSizes";
import {useEffect, useMemo, useState} from "react";

function SmallButton(props) {
    const {onClick, children} = props;
    return (
        <Button size="sm"
                variant="outline-primary"
                className="border-0 px-0"
                onClick={onClick}>
            {children}
        </Button>
    )
}

function EyeButton(props) {
    const {areas} = props;
    const {toggleSomeAreas} = useControlsContext();
    return (
        <SmallButton
            onClick={() => toggleSomeAreas(areas)}>
            <FaEye size={ICON_SIZE_SMALL}/>
        </SmallButton>
    )
}

function ExpandButton(props) {
    const {show, setShow} = props;
    return (
        <SmallButton
            onClick={() => {
                console.log("onClick", show)
                setShow(show => !show)
            }}>
            {show ? <RxTriangleDown size={ICON_SIZE}/> : <RxTriangleRight size={ICON_SIZE}/>}
        </SmallButton>
    )
}

function AreaInfo(props) {
    const {area} = props;

    return (
        <Row className="ms-1">
            <Col xs="1" className="">
                <EyeButton areas={[area]}/>
            </Col>
            <Col xs="2">{area.x.toFixed(2)}</Col>
            <Col xs="2">{area.z.toFixed(2)}</Col>
            <Col xs="2">{area.width.toFixed(2)}</Col>
            <Col xs="2">{area.length.toFixed(2)}</Col>
        </Row>
    );
}

function PlantWithAreas(props) {
    const {plantWithAreas, showAllAreaInfos} = props;
    const [showThisAreaInfo, setShowThisAreaInfo] = useState(false);

    useEffect(() => {
        console.log("useEffect", plantWithAreas.plantName, showAllAreaInfos, showThisAreaInfo)
        setShowThisAreaInfo(showAllAreaInfos)
    }, [showAllAreaInfos]);

    console.log("PlantWithAreas render", plantWithAreas.plantName, showAllAreaInfos, showThisAreaInfo)

    return (
        <Container className=""
                   style={{borderWidth: "3px", borderStyle: "solid", borderColor: plantWithAreas.plant.flowerColor}}>
            <Row className="bg-white p-1">
                <Col xs={2} className="">
                    <ExpandButton show={showThisAreaInfo} setShow={setShowThisAreaInfo}/>
                    <EyeButton areas={plantWithAreas.areas}/>
                </Col>
                <Col className="">
                    {plantWithAreas.plant.name}
                </Col>
            </Row>
            <Row className="bg-white p-1">
                {(showThisAreaInfo) &&
                    <Col className="">
                        {plantWithAreas.areas.map(a => <AreaInfo key={a.id} area={a}/>)}
                    </Col>
                }
            </Row>
        </Container>
    );
}

function getPlantsWithAreas(areasSelectedGarden) {
    const plantNamesSelectedGarden = [...new Set(areasSelectedGarden.map(a => a.plantName))];
    return plantNamesSelectedGarden.map(p => ({
        plantName: p,
        plant: areasSelectedGarden.find(a => a.plantName === p).plant,
        areas: areasSelectedGarden.filter(a => a.plantName === p)
    }));
}

function AreaInfoGroupedByPlant(props) {
    const {showAllAreaInfos} = props;
    const {areasSelectedGarden} = useGardenSelectorContext();
    const areaInfoGroupedByPlant = useMemo(() => getPlantsWithAreas(areasSelectedGarden), [areasSelectedGarden]);

    return (
        <Container className="mx-auto">
            <Row className="m-0">
                {areaInfoGroupedByPlant.map(p =>
                    <Col xs={12} md={6} lg={4} xl={3} key={p.plant.id} className="p-1">
                        <PlantWithAreas plantWithAreas={p}
                                        showAllAreaInfos={showAllAreaInfos}/>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export function GardenAreaListPage() {
    const [showAllAreaInfos, setShowAllAreaInfos] = useState(false);
    const {areasSelectedGarden} = useGardenSelectorContext();

    return (
        <Container className="flex-column">
            <Row><Col className="d-flex">
                <h3 className="container">
                    plants:
                </h3>
            </Col></Row>
            <Row className="mx-1 px-0">
                <Col className="mx-0 px-0">
                    <ExpandButton show={showAllAreaInfos} setShow={setShowAllAreaInfos}/>
                    <EyeButton areas={areasSelectedGarden}/>
                </Col>
            </Row>
            <Row>
                <AreaInfoGroupedByPlant showAllAreaInfos={showAllAreaInfos}/>
            </Row>
        </Container>
    )
}
