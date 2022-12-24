import {Container, Navbar} from "react-bootstrap";
import {Controls} from "./Controls";
import {BsFlower1} from "react-icons/bs";
import {BRAND_ICON_SIZE} from "../constants/uiSizes";
import {UI_WHITE} from "../constants/uiColors";
import {GardenSelector} from "./GardenSelector";
import {CameraViewpoints} from "./CameraViewpoints";

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
            <CameraViewpoints/>
            <GardenSelector/>
            <Controls/>
        </Navbar>
    );

}