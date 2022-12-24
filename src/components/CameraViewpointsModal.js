import {Button} from "react-bootstrap";
import {BsCameraVideo} from "react-icons/bs";
import {ICON_SIZE} from "../constants/uiSizes";
import {useCameraViewpointContext} from "../contexts/CameraViewpointContext";
import {GeneralModal, GeneralModalNew} from "./GeneralModal";

function CameraViewpointsModalContent(props) {
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

//een beetje raar dat ik die CameraViewpointModalContent meegeef als functie-naam terwijl die er verder uitziet als een gewone component is
export function CameraViewpointsModal() {
    return (
        <GeneralModalNew icon={<BsCameraVideo size={ICON_SIZE}/>}
                         title="Predefined Camera Viewpoints"
                         content={CameraViewpointsModalContent}>
        </GeneralModalNew>
    )
}
