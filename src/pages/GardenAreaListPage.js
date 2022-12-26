import {FaEye} from "react-icons/fa";
import {IoMdAdd, IoMdRemove} from "react-icons/io";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Button, Col, Container, Row} from "react-bootstrap";
import {SHOW_AREA_ID, useControlsContext} from "../contexts/ControlsContext";
import {ICON_SIZE_SMALL} from "../constants/uiSizes";
import {useState} from "react";

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
        <Row className=" ps-0 pe-2 m-1 bg-white">
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

function PlantWithAreas(props) {
    const {plantWithAreas, showAllAreaInfos} = props;
    const {controlValue, setOneControl,} = useControlsContext();

    function toggleAreas() {
        const idsOfAreasToToggle = plantWithAreas.areas.map(a => a.id);
        const currentAreaIdControls = controlValue(SHOW_AREA_ID) ?? {};
        const foundOneTrue = idsOfAreasToToggle.some(id => currentAreaIdControls[id]);
        const toggledAreaIdControls = idsOfAreasToToggle.reduce((tempResult, k) => ({
            ...tempResult, [k]: !foundOneTrue
        }), {});
        const newAreaIdControls = {...currentAreaIdControls, ...toggledAreaIdControls};
        setOneControl(SHOW_AREA_ID, newAreaIdControls);
    }

    return (
        <>
            <Row className="m-2"
                 style={{backgroundColor: plantWithAreas.plant.flowerColor}}>
                <Col xs={1} className="m-1 me-0 bg-white">
                    <SmallButton
                        onClick={() => toggleAreas()}>
                        <FaEye size={ICON_SIZE_SMALL}/>
                    </SmallButton>
                </Col>
                <Col xs={showAllAreaInfos ? 4 : ""} className="m-1 ms-0 bg-white">
                    {plantWithAreas.plant.name}
                </Col>
                {showAllAreaInfos && <Col className="m-0">
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
            {plantsSelectedGardenWithAreas.map(p => <PlantWithAreas key={p.plant.id} plantWithAreas={p}
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
                {showAllAreaInfos ? <IoMdRemove size={ICON_SIZE_SMALL}/> : <IoMdAdd size={ICON_SIZE_SMALL}/>}
            </SmallButton>
            <AreaInfoGroupedByPlant showAllAreaInfos={showAllAreaInfos}/>
        </Container>
    )
}
