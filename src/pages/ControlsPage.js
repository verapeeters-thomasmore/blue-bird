import {Col, Container, Row} from "react-bootstrap";
import {ControlsCheckBox, ControlsCheckBoxSpecialAction} from "../components/ControlsCheckBox";
import {SHOW_AXES, SHOW_CATALOG, SHOW_FLOOR, SHOW_GARDEN, SHOW_WORLD} from "../contexts/ControlsContext";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";

function ControlsCheckBoxCol(props) {
    return <Col xs="6" sm="4" className="p-1">
        <ControlsCheckBox {...props}/>


    </Col>
}

function ControlsCheckBoxSpecialActionCol(props) {
    return <Col xs="6" sm="4" className="p-1">
        <ControlsCheckBoxSpecialAction {...props}/>
    </Col>
}

export function ControlsPage() {
    const {areasSelectedGarden} = useGardenSelectorContext();
    const {showAreasToggleApi, showPlantsToggleApi} = useGardenSelectorContext();
    const {isAtLeastOneItemShown: isAtLeastOneAreaItemShown, toggleShowForSomeItems: toggleShowForSomeAreaItems} = showAreasToggleApi;
    const {isAtLeastOneItemShown: isAtLeastOnePlantsItemShown, toggleShowForSomeItems: toggleShowForSomePlantItems} = showPlantsToggleApi;

    return (
        <Container>
            <h3>show:</h3>
            <Row className="m-1 p-2 border">
                <ControlsCheckBoxCol title="axes" controlKey={SHOW_AXES}/>
                <ControlsCheckBoxCol title="world" controlKey={SHOW_WORLD}/>
                <ControlsCheckBoxCol title="floor" controlKey={SHOW_FLOOR}/>
                <ControlsCheckBoxCol title="catalog" controlKey={SHOW_CATALOG}/>
                <ControlsCheckBoxCol title="garden" controlKey={SHOW_GARDEN}/>
                <ControlsCheckBoxSpecialActionCol title="areas"
                                                  isChecked={isAtLeastOneAreaItemShown}
                                                  onChange={() => toggleShowForSomeAreaItems(areasSelectedGarden.map(a => a.id))}/>
                <ControlsCheckBoxSpecialActionCol title="plants"
                                                  isChecked={isAtLeastOnePlantsItemShown}
                                                  onChange={() => toggleShowForSomePlantItems(areasSelectedGarden.map(a => a.id))}/>
            </Row>
        </Container>
    )
}
