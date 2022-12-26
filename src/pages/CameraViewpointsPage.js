import {Button, Col, Container, Row} from "react-bootstrap";
import {useCameraViewpointContext} from "../contexts/CameraViewpointContext";


export function CameraViewpointsPage() {
    const {viewpoints, setCameraViewpoint} = useCameraViewpointContext();
    return (
        <Container>
            <h3>select:</h3>
            <Row className="m-1 p-2 border">
                {viewpoints.map(vp =>
                    <Col xs="6" sm="4" className="p-1" key={vp.name}>
                        <Button variant="outline-primary"
                                className="border-0"
                                onClick={() => {
                                    setCameraViewpoint(vp.name);
                                }}>
                            {vp.name}
                        </Button>
                    </Col>
                )}
            </Row>
        </Container>
    )
}
