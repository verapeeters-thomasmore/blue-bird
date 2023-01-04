import {Container} from "react-bootstrap";
import {PREDEFINED_GARDENS} from "../data/area.data";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";
import {SelectAndReturnButton} from "../components/SelectAndReturnButton";

export function GardenSelectionPage() {
    const {selectGarden} = useGardenSelectorContext();
    return (
        <Container>
            <h3>Predefined gardens:</h3>
            <div className="py-2">
                {PREDEFINED_GARDENS.map(g =>
                    <SelectAndReturnButton key={g.name}
                                           title={g.name}
                                           onSelect={() => selectGarden(g.name)}/>
                )}
            </div>
        </Container>
    )
}


