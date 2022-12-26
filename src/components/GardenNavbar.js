import {Container, Navbar} from "react-bootstrap";
import {BsFlower1} from "react-icons/bs";
import {FaRegFolderOpen} from "react-icons/fa";
import {BRAND_ICON_SIZE, ICON_SIZE} from "../constants/uiSizes";
import {UI_WHITE} from "../constants/uiColors";
import {CameraViewpointsModal} from "./CameraViewpointsModal";
import {GardenAreaListModal} from "./GardenAreaListModal";
import {Link} from "react-router-dom";
import {TbSettings} from "react-icons/tb";

function GardenIcon() {
    return <BsFlower1 size={BRAND_ICON_SIZE} className="text-info my-2 ms-0"/>;
}

function GardenNavbarLink(props) {
    const {to, children} = props;

    return <Link to={to} className="px-2">
        {children}
    </Link>
}

export function GardenNavbar() {
    return (
        <Navbar
            style={{maxHeight: '35px', backgroundColor: UI_WHITE}}>
            <Container>
                <Navbar.Brand><Link to="/"><GardenIcon/></Link></Navbar.Brand>
            </Container>
            <GardenAreaListModal/>
            <CameraViewpointsModal/>
            <GardenNavbarLink to="/gardenselection"><FaRegFolderOpen size={ICON_SIZE}/></GardenNavbarLink>
            <GardenNavbarLink to="/controls"><TbSettings size={ICON_SIZE}/></GardenNavbarLink>
        </Navbar>
    );

}