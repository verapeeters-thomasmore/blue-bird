import {Button} from "react-bootstrap";
import {BsCameraVideo} from "react-icons/bs";
import {ICON_SIZE} from "../constants/uiSizes";
import {useCameraViewpointContext} from "../contexts/CameraViewpointContext";
import {GeneralModal} from "./GeneralModal";


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

export function CameraViewpointsModal() {
    return (
        <GeneralModal icon={<BsCameraVideo size={ICON_SIZE}/>}
                      title="Predefined Camera Viewpoints">
            <CameraViewpointsContent onHideModal={() => setShowCameraViewpoints(false)}/>        </GeneralModal>
    )
}