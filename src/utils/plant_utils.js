export function findPlantData(plants, plantName) {
    return plants.find(p => p.shortName === plantName);
}