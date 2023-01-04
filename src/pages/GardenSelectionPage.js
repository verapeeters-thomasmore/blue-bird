import {Container, Row} from "react-bootstrap";
import {PREDEFINED_GARDENS} from "../data/area.data";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {SelectAndReturnButton} from "../components/SelectAndReturnButton";

export function GardenSelectionPage() {
    const {selectGarden} = useGardenSelectorContext();
    return (
        <Container>
            <h3>Predefined gardens:</h3>
            <Row className="m-1 p-2 ">
                {PREDEFINED_GARDENS.map(g =>
                    <div key={g.name}>
                        <SelectAndReturnButton title={g.name} onSelect={() => selectGarden(g.name)}/>
                    </div>
                )}
            </Row>
        </Container>
    )
}


