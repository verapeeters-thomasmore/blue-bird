import {Button} from "react-bootstrap";
import {BsCameraVideo} from "react-icons/bs";
import {ICON_SIZE} from "../constants/uiSizes";
import {useCameraViewpointContext} from "../contexts/CameraViewpointContext";
import {GeneralModalNew, useGeneralModalContext} from "./GeneralModal";

function CameraViewpointsModalContent() {
    const onHideModal = useGeneralModalContext();
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
                         title="Predefined Camera Viewpoints">
            <CameraViewpointsModalContent/>
        </GeneralModalNew>
    )
}
