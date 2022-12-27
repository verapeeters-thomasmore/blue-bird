import {FaEye} from "react-icons/fa";
import {RxTriangleDown, RxTriangleRight} from "react-icons/rx";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useControlsContext} from "../contexts/ControlsContext";
import {ICON_SIZE, ICON_SIZE_SMALL} from "../constants/uiSizes";
import {createContext, useContext, useMemo} from "react";
import {useShowItemToggle} from "../hooks/useShowItemToggle";


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
    const {isItemShown, toggleShowForOneItem} = useGardenAreaListPageContext();
    const showPlantInfo = useMemo(() => isItemShown(plant.id), [plantWithAreas, isItemShown]);

    return (
        <Container className=""
                   style={{borderWidth: "3px", borderStyle: "solid", borderColor: plant.flowerColor}}>
            <Row className="bg-white p-1">
                <Col xs={2} className="">
                    <ExpandButtonNew show={showPlantInfo}
                                     toggleShow={() => toggleShowForOneItem(plant.id)}/>

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
    const {areasSelectedGarden} = useGardenSelectorContext();
    const areaInfoGroupedByPlant = useMemo(() => getPlantsWithAreas(areasSelectedGarden), [areasSelectedGarden]);
    const plantIds = useMemo(() => areaInfoGroupedByPlant.map(plantInfo => plantInfo.plant.id), [areaInfoGroupedByPlant]);
    const showItemToggleApi = useShowItemToggle(plantIds);
    const {isAtLeastOneItemShown, toggleAllShownItems} = showItemToggleApi;

    return (
        <Container className="flex-column">
            <Row><Col className="d-flex">
                <h3 className="container">
                    plants:
                </h3>
            </Col></Row>
            <Row className="mx-1 px-0">
                <Col className="mx-0 px-0">
                    <ExpandButtonNew show={isAtLeastOneItemShown()} toggleShow={toggleAllShownItems}/>
                    <EyeButton areas={areasSelectedGarden}/>
                </Col>
            </Row>
            <Row>
                <GardenAreaListPageContext.Provider value={showItemToggleApi}>
                    <AreaInfoGroupedByPlant areaInfoGroupedByPlant={areaInfoGroupedByPlant}/>
                </GardenAreaListPageContext.Provider>
            </Row>
        </Container>
    )
}

//TODO: areasSelectedGarden if selectedGarden changes?
//TODO Controls SHOW_AREA_I and here showAreaInfo: both array or both object?