import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Col, Container, Row} from "react-bootstrap";
import {createContext, useContext, useMemo, useState} from "react";
import {useShowItemToggle} from "../hooks/useShowItemToggle";
import {GREEN} from "../constants/threeColors";
import {PlantPicture} from "../components/PlantPicture";
import {ExpandButton, EyeButton, FlowerButton, SmallButton} from "../components/SmallButtons";
import PropTypes from "prop-types";
import {areaPropType, plantDataPropType, plantWithAreasPropType} from "../types";
import {MdAdd} from "react-icons/md";
import {BiMinus} from "react-icons/bi";
import {ICON_SIZE_SMALL} from "../constants/uiSizes";
import {UI_SKY_BLUE_LIGHTER} from "../constants/uiColors";


function NumCol(props) {
    const {children} = props;
    return <Col xs="3" className="text-end my-auto">
        {children.toFixed(0)}
    </Col>;

}

function AreaInfo(props) {
    const {area} = props;
    if (area.x === undefined || area.z === undefined) return;

    return (
        <Row className="ms-1">
            <Col xs="auto" className="p-0">
                <EyeButton areas={[area]}/>
                <FlowerButton areas={[area]}/>
            </Col>
            <NumCol>{area.x}</NumCol>
            <NumCol>{area.z}</NumCol>
            <Col xs="auto">{""}</Col>
        </Row>
    );
}

const GardenAreaListPageContext = createContext();
const useGardenAreaListPageContext = () => useContext(GardenAreaListPageContext);

function PlantAreas(props) {
    const {areas, showPlantInfo} = props;
    if (!showPlantInfo) return;
    return (
        <Row className="bg-light mx-2 mb-1 p-0 border">
            <Col className="">
                {areas.map(a => <AreaInfo key={a.id} area={a}/>)}
            </Col>
        </Row>
    )
}

PlantAreas.propTypes = {
    areas: PropTypes.arrayOf(areaPropType),
    showPlantInfo: PropTypes.bool
};

function twoDigits(n) {
    return ("" + n).padStart(2, "0");
}

function PlantTimeline(props) {
    const {plant} = props;

    const growString = `${twoDigits(plant.timeLine.growStart)}-${twoDigits(plant.timeLine.growFinal)}`;
    const flowerString = `${twoDigits(plant.timeLine.flowerStart)}-${twoDigits(plant.timeLine.flowerEnd)}`;
    return (
        <div className="px-1 d-flex">
            <div className="mx-0">{""}</div>
            <div className="my-auto p-0"
                 style={{backgroundColor: GREEN, width: 16, height: 16}}>{" "}</div>
            <div className="ps-0 pe-2">
                {growString}</div>
            <div className="my-auto p-0"
                 style={{backgroundColor: plant.flowerColor, width: 16, height: 16}}>{" "}</div>
            <div className="ps-0 pe-0">
                {flowerString}</div>
        </div>
    )
}

PlantTimeline.propTypes = {
    plant: plantDataPropType
};

function PlantName(props) {
    const {plant} = props;
    return (
        <h6 className="pt-1 ps-1">
            {plant.name}
        </h6>
    );
}

PlantName.propTypes = {plant: PropTypes.any};

function PlantButtons(props) {
    const {plantWithAreas, showPlantInfo} = props;
    const {plant, areas} = plantWithAreas;
    const {toggleShowForOneItem} = useGardenAreaListPageContext();
    return (
        <>
            <ExpandButton show={showPlantInfo} toggleShow={() => toggleShowForOneItem(plant.id)}/>
            <EyeButton areas={areas}/>
            <FlowerButton areas={areas}/>
        </>
    )
}

function PlantInfoWithAreas(props) {
    const {plantWithAreas} = props;
    const {plant} = plantWithAreas;
    const {isItemShown} = useGardenAreaListPageContext();
    const showPlantInfo = useMemo(() => !!isItemShown(plantWithAreas.plant.id), [plantWithAreas, isItemShown]);

    return (
        <Container className="bg-white"
                   style={{borderWidth: "3px", borderStyle: "solid", borderColor: plantWithAreas.plant.flowerColor}}>
            <Row className="p-0">
                <Col className="p-0">
                    <PlantName plant={plant}/>
                </Col>
                <Col xs="auto" className="me-auto p-0">
                    <PlantPicture plant={plant}/>
                </Col>
            </Row>
            <Row className="p-0">
                <Col className="p-0">
                    <PlantButtons plantWithAreas={plantWithAreas} showPlantInfo={showPlantInfo}/>
                </Col>
                <Col xs="auto" className="p-0 me-auto">
                    <PlantTimeline plant={plantWithAreas.plant}/>
                </Col>
            </Row>

            <PlantAreas areas={plantWithAreas.areas} showPlantInfo={showPlantInfo}/>
        </Container>
    );
}

PlantInfoWithAreas.propTypes = {
    plantWithAreas: plantWithAreasPropType,
};

function AddPlantButton(props) {
    const {addPlantInGarden} = useGardenSelectorContext();
    const {plant} = props;
    return (
        <SmallButton
            onClick={() => addPlantInGarden(plant.shortName)}>
            <MdAdd size={ICON_SIZE_SMALL}/>
        </SmallButton>

    );
}

function PlantInfoWithoutAreas(props) {
    const {plant} = props;

    return (
        <Container className="bg-white"
                   style={{borderWidth: "3px", borderStyle: "solid", borderColor: plant.flowerColor}}>
            <Row className="p-0">
                <Col className="p-0">
                    <PlantName plant={plant}/>
                </Col>
                <Col xs="auto" className="me-auto p-0">
                    <PlantPicture plant={plant}/>
                </Col>
            </Row>
            <Row className="p-0">
                <Col className="p-0">
                    <AddPlantButton plant={plant}/>
                </Col>
                <Col xs="auto" className="p-0 me-auto my-auto">
                    <PlantTimeline plant={plant}/>
                </Col>
            </Row>
        </Container>
    );
}

PlantInfoWithoutAreas.propType = {
    plant: plantDataPropType,
}

function ListOfPlantWithoutAreas(props) {
    const {plants} = props;
    const {plantDataForSelectedGarden} = useGardenSelectorContext();

    return (
        <Container className="mx-auto p-0">
            <Row className="m-0">
                {plants.map(p =>
                    !plantDataForSelectedGarden.includes(p) &&
                    <Col xs={12} lg={6} xl={4} key={p.id} className="p-1">
                        <PlantInfoWithoutAreas plant={p}/>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

ListOfPlantWithoutAreas.propType = {
    plants: PropTypes.arrayOf(plantDataPropType)
}

function ListOfPlantWithAreas(props) {
    const {plantsWithAreas, isOnlyColumn} = props;

    return (
        <Container className="mx-auto p-0">
            <Row className="m-0">
                {plantsWithAreas.map(p =>
                    <Col xs={12}
                         md={isOnlyColumn ? 6 : 12}
                         lg={isOnlyColumn ? 4 : 6}
                         xl={isOnlyColumn ? 3 : 4}
                         key={p.plant.id} className="p-1">
                        <PlantInfoWithAreas plantWithAreas={p}/>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

ListOfPlantWithAreas.propTypes = {
    plantsWithAreas: PropTypes.arrayOf(
        plantWithAreasPropType
    )
};

export function PlantListLeftColumn(props) {
    const {showAllPlants, setShowAllPlants} = props;
    const {
        areasSelectedGarden,
        areasSelectedGardenGroupedByPlants,
    } = useGardenSelectorContext();
    const {isAtLeastOneItemShown, toggleAllShownItems} = useGardenAreaListPageContext();

    return (
        <Col className="p-0">
            <h3 className="container">plants in garden:</h3>
            <div className="ms-2">
                <ExpandButton show={isAtLeastOneItemShown} toggleShow={toggleAllShownItems}/>
                <EyeButton areas={areasSelectedGarden}/>
                <FlowerButton areas={areasSelectedGarden}/>

                {!showAllPlants &&
                    <SmallButton
                        onClick={() => setShowAllPlants(current => !current)}>
                        <MdAdd size={ICON_SIZE_SMALL}/></SmallButton>
                }
            </div>
            <ListOfPlantWithAreas plantsWithAreas={areasSelectedGardenGroupedByPlants}
                                  isOnlyColumn={!showAllPlants}/>
        </Col>
    )
}

export function PlantListRightColumn(props) {
    const {allPlants, showAllPlants, setShowAllPlants} = props;
    if (!showAllPlants) return;
    return (
        <Col className="p-0"
             style={{backgroundColor: UI_SKY_BLUE_LIGHTER}}>
            <h3 className="container">add new plants:</h3>
            <div className="ms-2">
                <SmallButton
                    onClick={() => setShowAllPlants(current => !current)}>
                    <BiMinus size={ICON_SIZE_SMALL}/></SmallButton>
            </div>
            <ListOfPlantWithoutAreas plants={allPlants}/>
        </Col>
    )
}

export function PlantListPage(props) {
    const {allPlants} = props;
    const {
        plantIdsForSelectedGarden
    } = useGardenSelectorContext();
    const showPlantInfoToggleApi = useShowItemToggle("showPlantInfo", plantIdsForSelectedGarden);
    const [showAllPlants, setShowAllPlants] = useState(false);
    return (
        <Container className="flex-column">
            <Row>
                <GardenAreaListPageContext.Provider value={showPlantInfoToggleApi}>
                    <PlantListLeftColumn showAllPlants={showAllPlants} setShowAllPlants={setShowAllPlants}/>
                    <PlantListRightColumn showAllPlants={showAllPlants} setShowAllPlants={setShowAllPlants}
                                          allPlants={allPlants}/>
                </GardenAreaListPageContext.Provider>
            </Row>
        </Container>
    )
}

PlantListPage.propTypes = {
    allPlants: PropTypes.arrayOf(
        plantDataPropType
    )
}

//OK GardenAreaListPage: rename GardenPlantListPage
//TODO split in components
//OK FIX expandButton for all plants!!!!
//OK OFWEL: lijst met plants in en lijst met plants NOT in
//OK in case of allPlants: areaInfo of garden is no longer there
//OK implement + button
//OK eyeButton for all plants (no button if no areas)
//OK flowerButton for all plants (no button if no areas)