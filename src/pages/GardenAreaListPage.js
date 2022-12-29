import {FaEye, FaEyeSlash} from "react-icons/fa";
import {TbFlower, TbFlowerOff} from 'react-icons/tb';
import {VscTriangleDown, VscTriangleRight} from "react-icons/vsc";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useControlsContext} from "../contexts/ControlsContext";
import {ICON_SIZE_SMALL} from "../constants/uiSizes";
import {createContext, useContext, useMemo} from "react";
import {useShowItemToggle} from "../hooks/useShowItemToggle";
import {UI_SKY_BLUE} from "../constants/uiColors";
import {GREEN} from "../constants/threeColors";


function SmallButton(props) {
    const {onClick, children} = props;
    return (
        <Button size="sm"
                variant="outline-primary"
                className="border-0 px-1"
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

function FlowerButton(props) {
    const {areas} = props;
    const {showPlantsToggleApi} = useControlsContext();
    const {isAtLeastOneOfTheseItemsShown, toggleShowForSomeItems} = showPlantsToggleApi;
    const areaIds = useMemo(() => areas.map(a => a.id), [areas]);
    return (
        <SmallButton
            onClick={() => toggleShowForSomeItems(areaIds)}>
            {isAtLeastOneOfTheseItemsShown(areas.map(a => a.id))
                ? <TbFlower size={ICON_SIZE_SMALL}/>
                : <TbFlowerOff size={ICON_SIZE_SMALL}/>
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
                ? <VscTriangleDown size={ICON_SIZE_SMALL}/>
                : <VscTriangleRight size={ICON_SIZE_SMALL}/>
            }
        </SmallButton>
    )
}

function NumCol(props) {
    const {children} = props;
    return <Col xs="2" className="text-end">
        {children.toFixed(2)}
    </Col>;

}

function AreaInfo(props) {
    const {area} = props;

    return (
        <Row className="ms-1">
            <Col xs="auto" className="">
                <EyeButton areas={[area]}/>
                <FlowerButton areas={[area]}/>
            </Col>
            <NumCol>{area.x}</NumCol>
            <NumCol>{area.z}</NumCol>
            <NumCol>{area.width}</NumCol>
            <NumCol>{area.length}</NumCol>
        </Row>
    );
}

const GardenAreaListPageContext = createContext();
const useGardenAreaListPageContext = () => useContext(GardenAreaListPageContext);

function PlantPicture(props) {
    const {plant, large} = props;
    const size = large ? 50 : 31;

    return (
        <>
            <div className="m-1 p-0 rounded-circle position-absolute end-0 top-0"
                 style={{backgroundColor: UI_SKY_BLUE, width: size, height: size}}>
                <img src={`${plant.textureWithFlower}`}
                     alt={plant.plantName}
                     width={size}
                     height={size}
                />
            </div>
        </>
    )
}

function PlantFiche(props) {
    const {plantWithAreas, showPlantInfo} = props;
    const {plant, areas} = plantWithAreas;

    if (!showPlantInfo) return;
    return (
        <>
            <Row className="bg-light px-1">
                <Col xs={2} className="mx-0">{""}</Col>
                <Col xs={1} className="m-auto p-0" style={{backgroundColor: GREEN, width: 16, height: 16}}>{" "}</Col>
                <Col xs="auto">{plant.timeLine.growStart}-{plant.timeLine.growFinal}</Col>
                <Col xs={1} className="m-auto p-0"
                     style={{backgroundColor: plant.flowerColor, width: 16, height: 16}}>{" "}</Col>
                <Col xs="auto">{plant.timeLine.flowerStart}-{plant.timeLine.flowerEnd}</Col>
                <Col>{""}</Col>
            </Row>
            <Row className="bg-white p-1">
                <Col className="ms-3">
                    {areas.map(a => <AreaInfo key={a.id} area={a}/>)}
                </Col>
            </Row>
        </>
    )
}

function PlantInfoHeader(props) {
    const {plantWithAreas, showPlantInfo} = props;
    const {plant, areas} = plantWithAreas;
    const {toggleShowForOneItem} = useGardenAreaListPageContext();

    return (
        <>
            <Row className="bg-white p-1 position-relative">
                <Col xs="auto" className="">
                    <ExpandButton show={showPlantInfo} toggleShow={() => toggleShowForOneItem(plant.id)}/>
                    <EyeButton areas={areas}/>
                    <FlowerButton areas={areas}/>
                </Col>
                <Col xs="auto" className="">
                    <h6 className="pt-1">
                        {plant.name}
                    </h6>
                </Col>
                <Col xs="auto" className="">
                </Col>
                <PlantPicture plant={plant} large={showPlantInfo}/>
            </Row>
        </>
    );
}

function PlantInfoWithAreas(props) {
    const {plantWithAreas} = props;
    const {isItemShown} = useGardenAreaListPageContext();
    const showPlantInfo = useMemo(() => isItemShown(plantWithAreas.plant.id), [plantWithAreas, isItemShown]);

    return (
        <Container style={{borderWidth: "3px", borderStyle: "solid", borderColor: plantWithAreas.plant.flowerColor}}>
            <PlantInfoHeader plantWithAreas={plantWithAreas} showPlantInfo={showPlantInfo}/>
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
            <Row>
                <Col className="d-flex">
                    <h3 className="container">
                        plants:
                    </h3>
                </Col>
            </Row>
            <Row className="mx-1 px-0">
                <Col className="mx-0 px-0">
                    <ExpandButton show={isAtLeastOneItemShown} toggleShow={toggleAllShownItems}/>
                    <EyeButton areas={areasSelectedGarden}/>
                    <FlowerButton areas={areasSelectedGarden}/>
                </Col>
            </Row>
            <Row>
                <GardenAreaListPageContext.Provider value={showPlantInfoToggleApi}>
                    <AreaInfoGroupedByPlant areaInfoGroupedByPlant={areasSelectedGardenGroupedByPlants}/>
                </GardenAreaListPageContext.Provider>
            </Row>
        </Container>
    )
}
