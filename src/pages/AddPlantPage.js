import {Col, Container, Row} from "react-bootstrap";
import {PlantPicture} from "../components/PlantPicture";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {MdAdd} from "react-icons/md";
import {ICON_SIZE} from "../constants/uiSizes";
import {SmallButton} from "../components/SmallButtons";

//TODO: merge with PlantInfoHeader in GardenAreaListPage?
//TODO: add expandButton as in GardenAreaListPage

function PlantInfoHeader(props) {
    const {plant} = props;

    return (
        <Container style={{borderWidth: "3px", borderStyle: "solid", borderColor: plant.flowerColor}}>
            <Row className="bg-white p-1 position-relative">
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

export function AddPlantPage(props) {
    const {allPlants} = props;
    const {plantDataForSelectedGarden, addPlantInGarden} = useGardenSelectorContext();

    return (
        <Container className="flex-column">
            <h3 className="container">all plants:</h3>
            {allPlants.map(p =>
                <Row key={p.id}>
                    <Col xs={1} md={6} lg={4} xl={3} className="p-1">
                        {plantDataForSelectedGarden.includes(p) ||
                            <SmallButton
                                onClick={() => addPlantInGarden(p.shortName)}>
                                <MdAdd size={ICON_SIZE}/>
                            </SmallButton>
                        }
                    </Col>
                    <Col xs={11} md={6} lg={4} xl={3} className="p-1">
                        <PlantInfoHeader plant={p}/>
                    </Col>
                </Row>
            )}

        </Container>
    )
}