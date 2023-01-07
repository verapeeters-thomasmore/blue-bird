import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {Col, Container, Row} from "react-bootstrap";
import {createContext, useContext, useMemo, useState} from "react";
import {useShowItemToggle} from "../hooks/useShowItemToggle";
import {GREEN} from "../constants/threeColors";
import {PlantPicture} from "../components/PlantPicture";
import {ExpandButton, EyeButton, FlowerButton, SmallButton} from "../components/SmallButtons";
import PropTypes from "prop-types";
import {plantDataPropType, plantWithAreasPropType} from "../types";
import {MdAdd} from "react-icons/md";
import {ICON_SIZE} from "../constants/uiSizes";


function NumCol(props) {
    const {children} = props;
    return <Col xs="2" className="text-end">
        {children.toFixed(2)}
    </Col>;

}

function AreaInfo(props) {
    const {area} = props;
    if (area.x === undefined || area.z === undefined) return;

    return (
        <Row className="ms-1">
            <Col xs="auto" className="">
                <EyeButton areas={[area]}/>
                <FlowerButton areas={[area]}/>
            </Col>
            <NumCol>{area.x}</NumCol>
            <NumCol>{area.z}</NumCol>
        </Row>
    );
}

const GardenAreaListPageContext = createContext();
const useGardenAreaListPageContext = () => useContext(GardenAreaListPageContext);

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

PlantFiche.propTypes = {
    plantWithAreas: plantWithAreasPropType,
    showPlantInfo: PropTypes.bool
};

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
                <PlantPicture plant={plant} large={showPlantInfo} absolute={true}/>
            </Row>
        </>
    );
}

PlantInfoHeader.propType = {
    plantWithAreas: plantWithAreasPropType,
    showPlantInfo: PropTypes.bool,
};

function PlantInfoWithAreas(props) {
    const {plantWithAreas} = props;
    const {isItemShown} = useGardenAreaListPageContext();
    const showPlantInfo = useMemo(() => !!isItemShown(plantWithAreas.plant.id), [plantWithAreas, isItemShown]);

    return (
        <Container style={{borderWidth: "3px", borderStyle: "solid", borderColor: plantWithAreas.plant.flowerColor}}>
            <PlantInfoHeader plantWithAreas={plantWithAreas} showPlantInfo={showPlantInfo}/>
            <PlantFiche plantWithAreas={plantWithAreas} showPlantInfo={showPlantInfo}/>
        </Container>
    );
}

PlantInfoWithAreas.propTypes = {
    plantWithAreas: plantWithAreasPropType,
};

//TODO: currently can only be used for plants not in garden - make more generic for clarity reasons?
function PlantInfoWithoutAreas(props) {
    const {plant} = props;
    const {plantDataForSelectedGarden, addPlantInGarden} = useGardenSelectorContext();
    if (plantDataForSelectedGarden.includes(plant)) return;

    return (
        <Container style={{borderWidth: "3px", borderStyle: "solid", borderColor: plant.flowerColor}}>
            <Row className="bg-white p-1 position-relative">
                <Col xs="auto" className="">
                    <SmallButton
                        onClick={() => addPlantInGarden(plant.shortName)}>
                        <MdAdd size={ICON_SIZE}/>
                    </SmallButton>
                </Col>
                <Col xs="auto" className="">
                    <h6 className="pt-1">
                        {plant.name}
                    </h6>
                </Col>
                <PlantPicture plant={plant} absolute={true}/>
            </Row>
        </Container>
    );
}

PlantInfoWithoutAreas.propType = {
    plant: plantDataPropType,
}

function ListOfPlantWithoutAreas(props) {
    const {plants} = props;
    // console.log("AreaInfoGroupedByPlant", areaInfoGroupedByPlant);

    return (
        <Container className="mx-auto">
            <Row className="m-0">
                {plants.map(p =>
                    <Col xs={12} md={6} lg={4} xl={3} key={p.id} className="p-1">
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


//TODO rename: areaInfoGroupedByPlant into plantWithAreaINfo (and areaInfo is possibly empty)
/*
areaInfoGroupedByPlant:
 */
function ListOfPlantWithAreas(props) {
    const {plantsWithAreas} = props;
    // console.log("AreaInfoGroupedByPlant", areaInfoGroupedByPlant);

    return (
        <Container className="mx-auto">
            <Row className="m-0">
                {plantsWithAreas.map(p =>
                    <Col xs={12} md={6} lg={4} xl={3} key={p.plant.id} className="p-1">
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

//TODO: filterOnlyPlantsInGarden button: a checkbox?

export function GardenAreaListPageBis(props) {
    const {allPlants} = props;
    const {
        areasSelectedGarden,
        areasSelectedGardenGroupedByPlants,
        plantIdsForSelectedGarden
    } = useGardenSelectorContext();
    const showPlantInfoToggleApi = useShowItemToggle(plantIdsForSelectedGarden, "showPlantInfo");
    const {isAtLeastOneItemShown, toggleAllShownItems} = showPlantInfoToggleApi;
    const [showAllPlants, setShowAllPlants] = useState(false);

    return (
        <Container className="flex-column">
            <Row>
                <Col className="d-flex">
                    <h3 className="container">plants in garden:</h3>
                </Col>
            </Row>
            <Row className="mx-1 px-0">
                <Col className="mx-0 px-0">
                    <ExpandButton show={isAtLeastOneItemShown} toggleShow={toggleAllShownItems}/>
                    <EyeButton areas={areasSelectedGarden}/>
                    <FlowerButton areas={areasSelectedGarden}/>
                    <SmallButton
                        onClick={() => setShowAllPlants(current => !current)}>{showAllPlants ? "hide" : "show"}</SmallButton>
                </Col>
            </Row>
            <Row>
                <GardenAreaListPageContext.Provider value={showPlantInfoToggleApi}>
                    <Col>
                        <ListOfPlantWithAreas plantsWithAreas={areasSelectedGardenGroupedByPlants}/>
                    </Col>
                    {
                        showAllPlants &&
                        <Col>
                            <ListOfPlantWithoutAreas plants={allPlants}/>
                        </Col>
                    }
                </GardenAreaListPageContext.Provider>
            </Row>
        </Container>
    )
}

GardenAreaListPageBis.propTypes = {
    allPlants: PropTypes.arrayOf(
        plantDataPropType
    )
}

//TODO OFWEL: lijst met plants in en lijst met plants NOT in
//TODO in case of allPlants: areaInfo of garden is no longer there
//TODO expandButton for all plants
//TODO implement + button
//TODO eyeButton for all plants (no button if no areas)
//TODO flowerButton for all plants (no button if no areas)