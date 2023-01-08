import {Container, Navbar} from "react-bootstrap";
import {BsCameraVideo, BsCardList, BsFlower1} from "react-icons/bs";
import {FaRegFolderOpen} from "react-icons/fa";
import {MdOutlineEdit} from "react-icons/md";
import {BRAND_ICON_SIZE, ICON_SIZE} from "../constants/uiSizes";
import {UI_WHITE} from "../constants/uiColors";
import {Link} from "react-router-dom";
import {TbSettings} from "react-icons/tb";
import {EyeButton, FlowerButton} from "./SmallButtons";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";

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
    const {areasSelectedGarden} = useGardenSelectorContext();

    return (
        <Navbar
            style={{maxHeight: '35px', backgroundColor: UI_WHITE}}>
            <Container>
                <Navbar.Brand>
                    <Link to="/"><GardenIcon/></Link>
                    <GardenNavbarLink to="/edit"><MdOutlineEdit size={ICON_SIZE}/></GardenNavbarLink>
                </Navbar.Brand>
            </Container>
            <EyeButton areas={areasSelectedGarden}/>
            <FlowerButton areas={areasSelectedGarden}/>
            <GardenNavbarLink to="/gardenarealist"><BsCardList size={ICON_SIZE}/></GardenNavbarLink>
            <GardenNavbarLink to="/cameraviewpoints"><BsCameraVideo size={ICON_SIZE}/></GardenNavbarLink>
            <GardenNavbarLink to="/gardenselection"><FaRegFolderOpen size={ICON_SIZE}/></GardenNavbarLink>
            <GardenNavbarLink to="/controls"><TbSettings size={ICON_SIZE}/></GardenNavbarLink>
        </Navbar>
    );

}