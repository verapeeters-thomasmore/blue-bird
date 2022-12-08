import {Plant} from "./Plant";
import {FLOOR_WIDTH} from "../constants/dimensions";
import {Area} from "./Area";

const COLS = 5;

export function PlantCatalogusOLD(props) {
    const {plants, time} = props;
    return (
        <>
            {plants.map((p, i) => <Plant key={p.id} data={p} time={time}
                                         x={i / COLS - FLOOR_WIDTH / 4}
                                         z={i % COLS - FLOOR_WIDTH / 4}/>)}
        </>
    )
}

export function PlantCatalogus(props) {
    const {plants, time} = props;

    return (
        <>
            {plants.map((p, i) =>
                <Area key={p.id} time={time}
                      area={{
                          plant: p,
                          width: 1,
                          length: 1,
                          x: i % COLS - FLOOR_WIDTH / COLS,
                          z: Math.floor(i / COLS) - FLOOR_WIDTH / COLS,
                      }}>
                </Area>)
            }
        </>
    )
}