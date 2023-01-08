import {Button} from "react-bootstrap";
import {useMemo} from "react";
import {TbFlower, TbFlowerOff} from "react-icons/tb";
import {ICON_SIZE_SMALL} from "../constants/uiSizes";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {VscTriangleDown, VscTriangleRight} from "react-icons/vsc";
import {useGardenSelectorContext} from "../contexts/GardenSelectorContext";

export function SmallButton(props) {
    const {onClick, children} = props;
    return (
        <Button size="sm"
                variant="outline-primary"
                className="border-0 px-1"
                onClick={onClick}>
            {children}
        </Button>
    )
}

export function EyeButton(props) {
    const {areas} = props;
    const {showAreasToggleApi} = useGardenSelectorContext();
    const {isAtLeastOneOfTheseItemsShown, toggleShowForSomeItems} = showAreasToggleApi;
    const areaIds = useMemo(() => areas.map(a => a.id), [areas]);
    return (
        <SmallButton
            onClick={() => toggleShowForSomeItems(areaIds)}>
            {isAtLeastOneOfTheseItemsShown(areas.map(a => a.id))
                ? <FaEye size={ICON_SIZE_SMALL}/>
                : <FaEyeSlash size={ICON_SIZE_SMALL}/>
            }
        </SmallButton>
    )
}

export function FlowerButton(props) {
    const {areas} = props;
    const {showPlantsToggleApi} = useGardenSelectorContext();
    const {isAtLeastOneOfTheseItemsShown, toggleShowForSomeItems} = showPlantsToggleApi;
    const areaIds = useMemo(() => areas.map(a => a.id), [areas]);
    return (
        <SmallButton
            onClick={() => toggleShowForSomeItems(areaIds)}>
            {isAtLeastOneOfTheseItemsShown(areas.map(a => a.id))
                ? <TbFlower size={ICON_SIZE_SMALL}/>
                : <TbFlowerOff size={ICON_SIZE_SMALL}/>
            }
        </SmallButton>
    )
}

export function ExpandButton(props) {
    //show is an array of area-ids - if it contains
    const {show, toggleShow} = props;
    return (
        <SmallButton onClick={() => toggleShow()}>
            {show
                ? <VscTriangleDown size={ICON_SIZE_SMALL}/>
                : <VscTriangleRight size={ICON_SIZE_SMALL}/>
            }
        </SmallButton>
    )
}