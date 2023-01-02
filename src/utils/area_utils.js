import {AREA_BUFFER, AREA_LENGTH, AREA_WIDTH} from "../constants/dimensions";

function randomPoint(size) {
    return Math.random(size-AREA_BUFFER)-size/2;
}

export function calculatePlantPositions(nrOfPlants) {
    return [...Array(nrOfPlants).keys()].map(i => ({id: i, x: randomPoint(AREA_WIDTH), z: randomPoint(AREA_LENGTH)}));
}

