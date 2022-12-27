import {FaEye} from "react-icons/fa";
import {RxTriangleDown, RxTriangleRight} from "react-icons/rx";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Button, Col, Container, Row} from "react-bootstrap";
import {SHOW_AREA_ID, useControlsContext} from "../contexts/ControlsContext";
import {ICON_SIZE, ICON_SIZE_SMALL} from "../constants/uiSizes";
import {useMemo, useState} from "react";

function SmallButton(props) {
    const {onClick, children} = props;
    return (
        <Button size="sm" variant="outline-primary" className="border-0 px-0" onClick={onClick}>
            {children}
        </Button>
    )
}

function AreaInfo(props) {
    const {area} = props;
    const {toggleControlInCollection} = useControlsContext();

    return (
        <Row className="ms-1">
            <Col xs="1" className="">
                <SmallButton onClick={() => toggleControlInCollection(SHOW_AREA_ID, area.id)}>
                    <FaEye size={ICON_SIZE_SMALL}/>
                </SmallButton>
            </Col>
            <Col xs="2">{area.x.toFixed(2)}</Col>
            <Col xs="2">{area.z.toFixed(2)}</Col>
            <Col xs="2">{area.width.toFixed(2)}</Col>
            <Col xs="2">{area.length.toFixed(2)}</Col>
        </Row>
    );
}

function toggleAreas(plantWithAreas, getControlValue, setOneControl) {
    const idsOfAreasToToggle = plantWithAreas.areas.map(a => a.id);
    const currentAreaIdControls = getControlValue(SHOW_AREA_ID) ?? {};
    const foundOneTrue = idsOfAreasToToggle.some(id => currentAreaIdControls[id]);
    const toggledAreaIdControls = idsOfAreasToToggle.reduce((tempResult, k) => ({
        ...tempResult, [k]: !foundOneTrue
    }), {});
    const newAreaIdControls = {...currentAreaIdControls, ...toggledAreaIdControls};
    setOneControl(SHOW_AREA_ID, newAreaIdControls);
}

function PlantWithAreas(props) {
    const {plantWithAreas, showAllAreaInfos} = props;
    const {getControlValue, setOneControl,} = useControlsContext();

    return (
        <Container className=""
                   style={{borderWidth: "3px", borderStyle: "solid", borderColor: plantWithAreas.plant.flowerColor}}>
            <Row className="bg-white p-1">
                <Col xs={1} className="">
                    <SmallButton
                        onClick={() => toggleAreas(plantWithAreas, getControlValue, setOneControl)}>
                        <FaEye size={ICON_SIZE_SMALL}/>
                    </SmallButton>
                </Col>
                <Col className="">
                    {plantWithAreas.plant.name}
                </Col>
            </Row>
            <Row className="bg-white p-1">
                {showAllAreaInfos &&
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
    const plantsWithAreas = useMemo(() => getPlantsWithAreas(areasSelectedGarden), [areasSelectedGarden]);

    return (
        <Container className="mx-auto">
            <Row className="m-0">
                {plantsWithAreas.map(p =>
                    <Col xs={12} md={6} lg={4} xl={3} className="p-1">
                        <PlantWithAreas key={p.plant.id} plantWithAreas={p}
                                        showAllAreaInfos={showAllAreaInfos}/>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export function GardenAreaListPage() {
    const [showAllAreaInfos, setShowAllAreaInfos] = useState(false);

    return (
        <Container>
            <h3 className="">plants:
                <SmallButton onClick={() => setShowAllAreaInfos(showAllAreaInfos => !showAllAreaInfos)}>
                    {showAllAreaInfos ? <RxTriangleDown size={ICON_SIZE}/> : <RxTriangleRight size={ICON_SIZE}/>}
                </SmallButton>
            </h3>
            <AreaInfoGroupedByPlant showAllAreaInfos={showAllAreaInfos}/>
        </Container>
    )
}
