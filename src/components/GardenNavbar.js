import {Container, Navbar} from "react-bootstrap";
import {Controls} from "./Controls";
import {BsFlower1} from "react-icons/bs";
import {BRAND_ICON_SIZE} from "../constants/uiSizes";

function GardenIcon() {
    return <BsFlower1 size={BRAND_ICON_SIZE} className="text-info m-2"/>;
}

export function GardenNavbar() {
    return (
        <Navbar justify style={{maxHeight: '35px'}}>
            <Container>
                <Navbar.Brand href="#home"><GardenIcon/></Navbar.Brand>
            </Container>
            <Controls/>
        </Navbar>
    );

}