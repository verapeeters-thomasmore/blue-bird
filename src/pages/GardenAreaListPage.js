import {FaEye, FaEyeSlash} from "react-icons/fa";
import {RxTriangleDown, RxTriangleRight} from "react-icons/rx";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useControlsContext} from "../contexts/ControlsContext";
import {ICON_SIZE, ICON_SIZE_SMALL} from "../constants/uiSizes";
import {createContext, useContext, useMemo} from "react";
import {useShowItemToggle} from "../hooks/useShowItemToggle";
import {UI_SKY_BLUE} from "../constants/uiColors";


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
    const {showAreasToggleApi} = useControlsContext();
    const {isAtLeastOneOfTheseItemsShown, toggleShowForSomeItems} = showAreasToggleApi;
    const areaIds = useMemo(() => areas.map(a => a.id), [areas]);
    return (
        <SmallButton
            onClick={() => toggleShowForSomeItems(areaIds)}>
            {isAtLeastOneOfTheseItemsShown(areas.map(a => a.id))
                ? <FaEye size={ICON_SIZE_SMALL}/>
                : <FaEyeSlash size={ICON_SIZE_SMALL}/>
            }
        </SmallButton>
    )
}

function ExpandButton(props) {
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

function PlantPicture(props) {
    const {plant} = props;

    return (
        <>
            <div className="p-1 rounded-circle ms-auto"
                 style={{backgroundColor: UI_SKY_BLUE, width: 50, height: 50}}>
                <img src={`${plant.textureWithFlower}`}
                     alt={plant.plantName}
                     width={50}
                     height={50}
                />
            </div>
        </>
    )
}

function PlantFiche(props) {
    const {plantWithAreas, showPlantInfo} = props;
    const {areas} = plantWithAreas;

    if (!showPlantInfo) return;
    return (
        <>
            <Row className="bg-white p-1 d-flex justify-content-end">
            </Row>
            <Row className="bg-white p-1">
                <Col className="ms-3">
                    {areas.map(a => <AreaInfo key={a.id} area={a}/>)}
                </Col>
            </Row>
        </>
    )
}

function PlantInfoWithAreas(props) {
    const {plantWithAreas} = props;
    const {plant, areas} = plantWithAreas;
    const {isItemShown, toggleShowForOneItem} = useGardenAreaListPageContext();
    const showPlantInfo = useMemo(() => isItemShown(plant.id), [plantWithAreas, isItemShown]);

    return (
        <Container style={{borderWidth: "3px", borderStyle: "solid", borderColor: plant.flowerColor}}>
            <Row className="bg-white p-1">
                <Col xs="auto" className="">
                    <ExpandButton show={showPlantInfo} toggleShow={() => toggleShowForOneItem(plant.id)}/>
                    <EyeButton areas={areas}/>
                </Col>
                <Col xs="auto" className="">
                    {plant.name}
                </Col>
                <Col>
                    <PlantPicture plant={plant}/>
                </Col>
            </Row>
            <PlantFiche plantWithAreas={plantWithAreas} showPlantInfo={showPlantInfo}/>
        </Container>
    );
}

function AreaInfoGroupedByPlant(props) {
    const {areaInfoGroupedByPlant} = props;

    return (
        <Container className="mx-auto">
            <Row className="m-0">
                {areaInfoGroupedByPlant.map(p =>
                    <Col xs={12} md={6} lg={4} xl={3} key={p.plant.id} className="p-1">
                        <PlantInfoWithAreas plantWithAreas={p}/>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export function GardenAreaListPage() {
    const {
        areasSelectedGarden,
        areasSelectedGardenGroupedByPlants,
        plantIdsForSelectedGarden
    } = useGardenSelectorContext();
    const showPlantInfoToggleApi = useShowItemToggle(plantIdsForSelectedGarden, "showPlantInfo");
    const {isAtLeastOneItemShown, toggleAllShownItems} = showPlantInfoToggleApi;

    return (
        <Container className="flex-column">
            <Row><Col className="d-flex">
                <h3 className="container">
                    plants:
                </h3>
            </Col></Row>
            <Row className="mx-1 px-0"><Col className="mx-0 px-0">
                <ExpandButton show={isAtLeastOneItemShown} toggleShow={toggleAllShownItems}/>
                <EyeButton areas={areasSelectedGarden}/>
            </Col></Row>
            <Row>
                <GardenAreaListPageContext.Provider value={showPlantInfoToggleApi}>
                    <AreaInfoGroupedByPlant areaInfoGroupedByPlant={areasSelectedGardenGroupedByPlants}/>
                </GardenAreaListPageContext.Provider>
            </Row>
        </Container>
    )
}
