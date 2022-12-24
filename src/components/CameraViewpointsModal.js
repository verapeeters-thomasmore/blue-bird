import {Button} from "react-bootstrap";
import {BsCameraVideo} from "react-icons/bs";
import {ICON_SIZE} from "../constants/uiSizes";
import {useCameraViewpointContext} from "../contexts/CameraViewpointContext";
import {GeneralModal, GeneralModalNew} from "./GeneralModal";

const CameraViewpointsModalContent = (onHideModal) => function (props) {
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
        <GeneralModalNew icon={<BsCameraVideo size={ICON_SIZE}/>}
                         title="Predefined Camera Viewpoints"
                         content={CameraViewpointsModalContent}>
        </GeneralModalNew>
    )
}

export function CameraViewpointsModalOLD() {
    return (
        <GeneralModalNew icon={<BsCameraVideo size={ICON_SIZE}/>}
                         title="Predefined Camera Viewpoints">
            {CameraViewpointsModalContent({onHideModal: () => setShowCameraViewpoints(false)})}
        </GeneralModalNew>
    )
}