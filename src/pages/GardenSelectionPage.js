import {Button, Container, Row} from "react-bootstrap";
import {PREDEFINED_GARDENS} from "../data/area.data";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";

export function GardenSelectionPage() {
    const {selectGarden} = useGardenSelectorContext();
    return (
        <Container>
            <h3>select:</h3>
            <Row className="m-1 p-2 border">
                {PREDEFINED_GARDENS.map(g =>
                    <div key={g.name}>
                        <Button variant="outline-primary"
                                className="border-0"
                                onClick={() => selectGarden(g.name)}>
                            {g.name}
                        </Button>
                    </div>
                )}
            </Row>
        </Container>
    )
}

