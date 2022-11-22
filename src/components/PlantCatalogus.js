import {Plant} from "./Plant";
import {FLOOR_WIDTH} from "../constants/dimensions";

const COLS = 5;

export function PlantCatalogus(props) {
    const {plants, time} = props;
    return (
        <>
            {plants.map((p, i) => <Plant key={p.id} data={p} time={time}
                                         position_x={i / COLS - FLOOR_WIDTH / 4}
                                         position_z={i % COLS - FLOOR_WIDTH / 4}/>)}
        </>
    )
}