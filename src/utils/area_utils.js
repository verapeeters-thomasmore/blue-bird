import {AREA_BUFFER} from "../constants/dimensions";

function randomPoint(size) {
    return Math.random(size-AREA_BUFFER)-size/2;
}

export function calculatePlantPositions(nrOfPlants, width, length) {
    return [...Array(nrOfPlants).keys()].map(i => ({id: i, x: randomPoint(width), z: randomPoint(length)}));
}

