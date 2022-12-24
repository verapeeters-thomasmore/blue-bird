import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import {BsCameraVideo} from "react-icons/bs";
import {ICON_SIZE} from "../constants/uiSizes";
import {ShowModalButton} from "./ShowModalButton";
import {useCameraViewpointContext} from "../contexts/CameraViewpointContext";


function CameraViewpointsContent(props) {
    const {onHideModal} = props;
    const {viewpoints, setCameraViewpoint} = useCameraViewpointContext();
    return (
        <>
            {viewpoints.map(vp =>
                <div key={vp.name}>
                    <Button variant="outline-primary"
                            className="border-0"
                            onClick={() => {
                                setCameraViewpoint(vp.name);
                                onHideModal();
                            }}>
                        {vp.name}
                    </Button>
                </div>
            )}
        </>
    )
}

export function CameraViewpoints() {
    const [showCameraViewpoints, setShowCameraViewpoints] = useState(false);

    return (
        <>
            <ShowModalButton onShowModal={() => setShowCameraViewpoints(true)}>
                <BsCameraVideo size={ICON_SIZE}/>
            </ShowModalButton>
            <Modal show={showCameraViewpoints}
                   onHide={() => setShowCameraViewpoints(showCameraViewpoints => !showCameraViewpoints)}>
                <Modal.Header closeButton>
                    <h3 className="ms-2">Predefined Camera Viewpoints</h3>
                </Modal.Header>
                <Modal.Body>
                    {<CameraViewpointsContent onHideModal={() => setShowCameraViewpoints(false)}/>}
                </Modal.Body>
            </Modal>
        </>
    )
}