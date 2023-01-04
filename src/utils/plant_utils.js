export function findPlantDataByShortName(plants, plantName) {
    return plants.find(p => p.shortName === plantName);
}