import {UI_SKY_BLUE} from "../constants/uiColors";
import {PLANT_PICTURE_SIZE_LARGE, PLANT_PICTURE_SIZE_SMALL} from "../constants/uiSizes";

//TODOL picture large when hovering
export function PlantPicture(props) {
    const {plant, large = false, absolute = false} = props;
    const size = large ? PLANT_PICTURE_SIZE_LARGE : PLANT_PICTURE_SIZE_SMALL;

    return (
        <>
            <div className={`m-1 p-0 rounded-circle ${absolute && "position-absolute end-0 top-0"}`}
                 style={{backgroundColor: UI_SKY_BLUE, width: size, height: size}}>
                <img src={`${plant.textureWithFlower}`}
                     alt={plant.plantName}
                     width={size}
                     height={size}
                />
            </div>
        </>
    )
}