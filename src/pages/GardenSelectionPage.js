import {Button, Container, Row} from "react-bootstrap";
import {PREDEFINED_GARDENS} from "../data/area.data";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {useNavigate} from "react-router";

function SelectGardenControl(props) {
    const {garden, onSelect} = props;
    const navigate = useNavigate();

    return (
        <div className="border m-1">
            <Button variant="primary"
                    size="sm"
                    className="m-1 me-2"
                    onClick={() => {
                        onSelect();
                        navigate("/");
                    }}>
                select
            </Button>
            {garden.name}
        </div>
    );
}

export function GardenSelectionPage() {
    const {selectGarden} = useGardenSelectorContext();
    return (
        <Container>
            <h3>Predefined gardens:</h3>
            <Row className="m-1 p-2 ">
                {PREDEFINED_GARDENS.map(g =>
                    <div key={g.name}>
                        <SelectGardenControl garden={g} onSelect={() => selectGarden(g.name)}/>
                    </div>
                )}
            </Row>
        </Container>
    )
}


