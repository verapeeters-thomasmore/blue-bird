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
import {ICON_SIZE_SMALL} from "../constants/uiSizes";


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
        <>
            <Row className="bg-white p-1">
                <Col className="ms-3">
                    {areas.map(a => <AreaInfo key={a.id} area={a}/>)}
                </Col>
            </Row>
        </>
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
        <>
            <Row className="px-1 justify-content-end fs-6">
                <Col className="mx-0">{""}</Col>
                <Col xs={1} className="m-auto p-0"
                     style={{backgroundColor: GREEN, width: 16, height: 16}}>{" "}</Col>
                <Col xs="auto" className="ps-0 pe-2">
                    {growString}</Col>
                <Col xs={1} className="m-auto p-0"
                     style={{backgroundColor: plant.flowerColor, width: 16, height: 16}}>{" "}</Col>
                <Col xs="auto" className="ps-0 pe-0">
                    {flowerString}</Col>
            </Row>
        </>
    )
}

PlantTimeline.propTypes = {
    plant: plantDataPropType
};

function PlantName(props) {
    const {plant} = props;
    return <Col xs="auto" className="">
        <h6 className="pt-1">
            {plant.name}
        </h6>
    </Col>;
}

PlantName.propTypes = {plant: PropTypes.any};

function PlantButtons(props) {
    const {plantWithAreas, showPlantInfo} = props;
    const {plant, areas} = plantWithAreas;
    const {toggleShowForOneItem} = useGardenAreaListPageContext();
    return (
        <Col xs="auto" className="">
            <ExpandButton show={showPlantInfo} toggleShow={() => toggleShowForOneItem(plant.id)}/>
            <EyeButton areas={areas}/>
            <FlowerButton areas={areas}/>
        </Col>
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
            <Row className="p-1 position-relative">
                <PlantName plant={plant}/>
                <Col xs="auto">
                    <PlantPicture plant={plant}/>
                </Col>
                <PlantButtons plantWithAreas={plantWithAreas} showPlantInfo={showPlantInfo}/>
                <Col xs="auto" className=""/>
            </Row>

            <PlantTimeline plant={plantWithAreas.plant}/>
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
            <Row className="p-1 position-relative">
                <Col xs="auto" className="">
                    <AddPlantButton plant={plant}/>
                </Col>
                <PlantName plant={plant}/>
                <PlantPicture plant={plant} />
            </Row>
            <PlantTimeline plant={plant}/>
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
        <Container className="mx-auto p-0">
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
                <GardenAreaListPageContext.Provider value={showPlantInfoToggleApi}>
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
                        <ListOfPlantWithAreas plantsWithAreas={areasSelectedGardenGroupedByPlants}/>
                    </Col>
                    {
                        showAllPlants &&
                        <Col className="p-0">
                            <h3 className="container">add new plants:</h3>
                            <div className="ms-2">
                                <SmallButton
                                    onClick={() => setShowAllPlants(current => !current)}>{showAllPlants ? "hide" : "show"}</SmallButton>
                            </div>
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