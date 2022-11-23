function randomPoint(size) {
    return Math.random(size)-size/2;
}

export function calculatePlantPositions(nrOfPlants, width, length) {
    return [...Array(nrOfPlants).keys()].map(() => ({x: randomPoint(width), z: randomPoint(length)}));
}