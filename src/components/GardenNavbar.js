import {Container, Navbar} from "react-bootstrap";
import {ControlsModal} from "./ControlsModal";
import {BsFlower1} from "react-icons/bs";
import {BRAND_ICON_SIZE} from "../constants/uiSizes";
import {UI_WHITE} from "../constants/uiColors";
import {GardenSelectionModal} from "./GardenSelectionModal";
import {CameraViewpointsModal} from "./CameraViewpointsModal";

function GardenIcon() {
    return <BsFlower1 size={BRAND_ICON_SIZE} className="text-info my-2 ms-0"/>;
}

export function GardenNavbar() {
    return (
        <Navbar
            style={{maxHeight: '35px', backgroundColor: UI_WHITE}}>
            <Container>
                <Navbar.Brand href="#home"><GardenIcon/></Navbar.Brand>
            </Container>
            <CameraViewpointsModal/>
            <GardenSelectionModal/>
            <ControlsModal/>
        </Navbar>
    );

}