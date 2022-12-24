import {Plant} from "./Plant";
import {FLOOR_WIDTH} from "../../constants/dimensions";
import {Area} from "./Area";

const COLS = 5;

export function PlantCatalogusOLD(props) {
    const {plants} = props;
    return (
        <>
            {plants.map((p, i) => <Plant key={p.id} data={p}
                                         x={i / COLS - FLOOR_WIDTH / 4}
                                         z={i % COLS - FLOOR_WIDTH / 4}/>)}
        </>
    )
}

export function PlantCatalogue(props) {
    const {plants} = props;

    return (
        <>
            {plants.map((p, i) =>
                <Area key={p.id}
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