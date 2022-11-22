import {VIOLET, WHITE} from "../constants/threeColors";

let PLANT_ID = 1;
export const PLANT_DATA = [
    {
        id: PLANT_ID++,
        name: "Allium 'christophii'",
        textureWithoutFlower: "images/sprites/alium_christophii.png",
        textureWithFlower: "images/sprites/alium_christophii_flower.png",
        flowerColor: VIOLET,
        maxHeight: 50,
        plantsPerM2: 2,
        timeLine: {
            growStart: 18,
            growFinal: 21,
            flowerStart: 22,
            flowerEnd: 30,
            die: 42,
        },
    },
    {
        id: PLANT_ID++,
        name: "Anthericum liliago",
        textureWithoutFlower: "images/sprites/anthericum_liliago.png",
        textureWithFlower: "images/sprites/anthericum_liliago_flower.png",
        flowerColor: WHITE,
        maxHeight: 50,
        plantsPerM2: 4,
        timeLine: {
            growStart: 12,
            growFinal: 15,
            flowerStart: 19,
            flowerEnd: 23,
            die: 52,
        },
    },
    {
        id: PLANT_ID++,
        name: "Camassia leichtlinii ('Alba')",
        textureWithoutFlower: "images/sprites/camissia.png",
        textureWithFlower: "images/sprites/camissia_flower.png",
        flowerColor: WHITE,
        maxHeight: 70,
        plantsPerM2: 3,
        timeLine: {
            growStart: 12,
            growFinal: 15,
            flowerStart: 18,
            flowerEnd: 20,
            die: 52,
        },
    }
];