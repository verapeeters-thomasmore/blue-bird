import {FaEye} from "react-icons/fa";
import {RxTriangleDown, RxTriangleRight} from "react-icons/rx";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useControlsContext} from "../contexts/ControlsContext";
import {ICON_SIZE, ICON_SIZE_SMALL} from "../constants/uiSizes";
import {createContext, useCallback, useContext, useMemo, useState} from "react";

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

function ExpandButtonNew(props) {
    //show is an array of area-ids - if it contains
    const {show, toggleShow} = props;
    return (
        <SmallButton onClick={() => toggleShow()}>
            {show
                ? <RxTriangleDown size={ICON_SIZE}/>
                : <RxTriangleRight size={ICON_SIZE}/>
            }
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

const GardenAreaListPageContext = createContext();
const useGardenAreaListPageContext = () => useContext(GardenAreaListPageContext);

function PlantWithAreas(props) {
    const {plantWithAreas} = props;
    const {plant, areas} = plantWithAreas;
    const {getShowPlantInfoForOnePlant, toggleShowPlantInfoForOnePlant} = useGardenAreaListPageContext();
    const showPlantInfo = useMemo(() => getShowPlantInfoForOnePlant(plant.id), [plantWithAreas, getShowPlantInfoForOnePlant]);

    return (
        <Container className=""
                   style={{borderWidth: "3px", borderStyle: "solid", borderColor: plant.flowerColor}}>
            <Row className="bg-white p-1">
                <Col xs={2} className="">
                    <ExpandButtonNew show={showPlantInfo}
                                     toggleShow={() => toggleShowPlantInfoForOnePlant(plant.id)}/>

                    <EyeButton areas={areas}/>
                </Col>
                <Col className="">
                    {plant.name}
                </Col>
            </Row>
            <Row className="bg-white p-1">
                {(showPlantInfo) &&
                    <Col className="">
                        {areas.map(a => <AreaInfo key={a.id} area={a}/>)}
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
    const {areaInfoGroupedByPlant} = props;

    return (
        <Container className="mx-auto">
            <Row className="m-0">
                {areaInfoGroupedByPlant.map(p =>
                    <Col xs={12} md={6} lg={4} xl={3} key={p.plant.id} className="p-1">
                        <PlantWithAreas plantWithAreas={p}/>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export function GardenAreaListPage() {
    const [showPlantInfos, setShowPlantInfos] = useState([])
    const {areasSelectedGarden} = useGardenSelectorContext();
    const areaInfoGroupedByPlant = useMemo(() => getPlantsWithAreas(areasSelectedGarden), [areasSelectedGarden]);

    console.log("GardenAreaListPage", showPlantInfos);

    const toggleShowPlantInfoForOnePlant = useCallback(
        plantId =>
            setShowPlantInfos(showPlantInfos.find(id => id === plantId)
                ? showPlantInfos.filter(id => id !== plantId)
                : [...showPlantInfos, plantId]),
        [showPlantInfos]);

    const isAtLeastOnePlantInfoShown = useCallback(
        () => !!showPlantInfos.length
        , [showPlantInfos]);

    const toggleAllShownPlantInfos = useCallback(
        () => {
            setShowPlantInfos(!!showPlantInfos.length
                ? []
                : areaInfoGroupedByPlant.map(p => p.plant.id))
        }, [showPlantInfos, areaInfoGroupedByPlant]);

    const getShowPlantInfoForOnePlant = useCallback(
        (plantId) => showPlantInfos.find(id => id === plantId),
        [showPlantInfos]);

    const api = useMemo(() => ({
        getShowPlantInfoForOnePlant, toggleShowPlantInfoForOnePlant
    }), [getShowPlantInfoForOnePlant, toggleShowPlantInfoForOnePlant]);

    return (
        <Container className="flex-column">
            <Row><Col className="d-flex">
                <h3 className="container">
                    plants:
                </h3>
            </Col></Row>
            <Row className="mx-1 px-0">
                <Col className="mx-0 px-0">
                    <ExpandButtonNew show={isAtLeastOnePlantInfoShown()} toggleShow={toggleAllShownPlantInfos}/>
                    <EyeButton areas={areasSelectedGarden}/>
                </Col>
            </Row>
            <Row>
                <GardenAreaListPageContext.Provider value={api}>
                    <AreaInfoGroupedByPlant areaInfoGroupedByPlant={areaInfoGroupedByPlant}/>
                </GardenAreaListPageContext.Provider>
            </Row>
        </Container>
    )
}

//TODO: areasSelectedGarden if selectedGarden changes?
//TODO Controls SHOW_AREA_I and here showAreaInfo: both array or both object?