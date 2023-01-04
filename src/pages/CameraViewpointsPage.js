import {Container} from "react-bootstrap";
import {useCameraViewpointContext} from "../contexts/CameraViewpointContext";
import {SelectAndReturnButton} from "../components/SelectAndReturnButton";


export function CameraViewpointsPage() {
    const {viewpoints, setCameraViewpoint} = useCameraViewpointContext();
    return (
        <Container>
            <h3>Predefined camera viewpoints:</h3>
            <div className="py-2">
                {viewpoints.map(vp =>
                    <SelectAndReturnButton key={vp.name}
                                           title={vp.name}
                                           onSelect={() => setCameraViewpoint(vp.name)}/>
                )}
            </div>
        </Container>
    )
}
