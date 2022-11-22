import {
    BLUEPURPLE,
    GREENJUWEL,
    ORANGE,
    PINK,
    PURPLE,
    VIOLET,
    VIOLET2,
    WHITE,
    YELLOW,
    YELLOWGREEN
} from "../constants/threeColors";

let PLANT_ID = 1;


export const PLANT_DATA = [
    {
        id: PLANT_ID++,
        shortName: 'allium_christophii',
        name: "Allium 'christophii'",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=ALCHRI12",
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
        shortName: 'alium_gladiator',
        name: "Alium 'Gladiator'",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=ALGLAD",
        textureWithoutFlower: "images/sprites/alium_gladiator.png",
        textureWithFlower: "images/sprites/alium_gladiator_flower.png",
        flowerColor: VIOLET2,
        maxHeight: 120,
        plantsPerM2: 1,
        timeLine: {
            growStart: 18,
            growFinal: 21,
            flowerStart: 25,
            flowerEnd: 30,
            die: 42,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'alium_sphaerocephalon',
        name: "Alium sphaerocephalon",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=ALSPHA",
        textureWithoutFlower: "images/sprites/alium_sphaerocephalon.png",
        textureWithFlower: "images/sprites/alium_sphaerocephalon_flower.png",
        flowerColor: PURPLE,
        maxHeight: 80,
        plantsPerM2: 2,
        timeLine: {
            growStart: 18,
            growFinal: 21,
            flowerStart: 29,
            flowerEnd: 35,
            die: 42,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'anthericum_liliago',
        name: "Anthericum liliago",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=ANLILI",
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
        shortName: 'asclepias',
        name: "Asclepias tuberosa subsp. interior",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=ASINTE",
        textureWithoutFlower: "images/sprites/asclepias.png",
        textureWithFlower: "images/sprites/asclepias_flower.png",
        flowerColor: ORANGE,
        maxHeight: 50,
        plantsPerM2: 3,
        timeLine: {
            growStart: 12,
            growFinal: 20,
            flowerStart: 28,
            flowerEnd: 38,
            die: 52,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'aster',
        name: "Aster JS® 'Eleven Purple' PBR",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=ASEPUR",
        textureWithoutFlower: "images/sprites/aster.png",
        textureWithFlower: "images/sprites/aster_flower.png",
        flowerColor: VIOLET,
        maxHeight: 40,
        plantsPerM2: 7,
        timeLine: {
            growStart: 14,
            growFinal: 20,
            flowerStart: 35,
            flowerEnd: 46,
            die: 52,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'calamagrostis',
        name: "Calamagrostis acutiflora",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=CAWALD",
        textureWithoutFlower: "images/sprites/calamagrostis.png",
        textureWithFlower: "images/sprites/calamagrostis_flower.png",
        flowerColor: YELLOWGREEN,
        maxHeight: 160,
        plantsPerM2: 1,
        timeLine: {
            growStart: 10,
            growFinal: 14,
            flowerStart: 29,
            flowerEnd: 50,
            die: 52,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'camissia',
        name: "Camassia leichtlinii ('Alba')",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=CALEIC12",
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
    },
    {
        id: PLANT_ID++,
        shortName: 'crocus',
        name: "Crocus tommasinianus",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=CRTOMM",
        textureWithoutFlower: "images/sprites/crocus.png",
        textureWithFlower: "images/sprites/crocus_flower.png",
        maxHeight: 20,
        plantsPerM2: 4,
        flowerColor: PURPLE,
        timeLine: {
            growStart: 1,
            growFinal: 2,
            flowerStart: 3,
            flowerEnd: 9,
            die: 16,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'deschampsia',
        name: "Deschampsia cespitosa 'Tardiflora'",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=DETARD",
        textureWithoutFlower: "images/sprites/deschampsia.png",
        textureWithFlower: "images/sprites/deschampsia_flower.png",
        flowerColor: YELLOWGREEN,
        maxHeight: 90,
        plantsPerM2: 3,
        timeLine: {
            growStart: 10,
            growFinal: 14,
            flowerStart: 25,
            flowerEnd: 50,
            die: 52,
        },
    },

    {
        id: PLANT_ID++,
        shortName: 'echinacea_purpurea_green_jewel',
        name: "Echinacea purpurea 'Green Jewel' PBR",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=ECGJEW",
        textureWithoutFlower: "images/sprites/echinacea_green_juwel.png",
        textureWithFlower: "images/sprites/echinacea_green_juwel_flower.png",
        flowerColor: GREENJUWEL,
        maxHeight: 60,
        plantsPerM2: 4,
        timeLine: {
            growStart: 16,
            growFinal: 20,
            flowerStart: 24,
            flowerEnd: 43,
            die: 52,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'echinacea_purpurea_polar_breeze',
        name: "Echinacea purpurea 'Polar Breeze' PBR",
        flowerColor: WHITE,
        textureWithoutFlower: "images/sprites/echinacea_polar_breeze.png",
        textureWithFlower: "images/sprites/echinacea_polar_breeze_flower.png",
        maxHeight: 45,
        plantsPerM2: 5,
        timeLine: {
            growStart: 16,
            growFinal: 26,
            flowerStart: 28,
            flowerEnd: 43,
            die: 52,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'echinacea_tennesseensis',
        name: "Echinacea tennesseensis 'Rocky Top'",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=ECRTOP",
        textureWithoutFlower: "images/sprites/echinacea_tennesseensis.png",
        textureWithFlower: "images/sprites/echinacea_tennesseensis_flower.png",
        flowerColor: PINK,
        maxHeight: 60,
        plantsPerM2: 2,
        timeLine: {
            growStart: 16,
            growFinal: 20,
            flowerStart: 24,
            flowerEnd: 43,
            die: 52,
        },
    },

    {
        id: PLANT_ID++,
        shortName: 'eremurus',
        name: "Eremurus stenophyllus",
        flowerColor: YELLOW,
        textureWithoutFlower: "images/sprites/eremurus.png",
        textureWithFlower: "images/sprites/eremurus_flower.png",
        maxHeight: 100,
        plantsPerM2: 1,
        timeLine: {
            growStart: 16,
            growFinal: 23,
            flowerStart: 24,
            flowerEnd: 30,
            die: 40,
        },
    },

    {
        id: PLANT_ID++,
        shortName: 'hyacint',
        name: "Hyacinthus multiflora 'Alba'",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=HYMALB",
        textureWithoutFlower: "images/sprites/hyacint.png",
        textureWithFlower: "images/sprites/hyacint_flower.png",
        plantsPerM2: 6,
        maxHeight: 25,
        flowerColor: WHITE,
        timeLine: {
            growStart: 6,
            growFinal: 10,
            flowerStart: 11,
            flowerEnd: 16,
            die: 24,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'lillium_gironde',
        name: "Lilium 'Gironde'",
        textureWithoutFlower: "images/sprites/lillium_gironde.png",
        textureWithFlower: "images/sprites/lillium_gironde_flower.png",
        plantsPerM2: 1,
        maxHeight: 80,
        flowerColor: YELLOW,
        timeLine: {
            growStart: 19,
            growFinal: 22,
            flowerStart: 22,
            flowerEnd: 29,
            die: 35,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'lillium_regale',
        name: "Lilium regale",
        textureWithoutFlower: "images/sprites/lillium_regale.png",
        textureWithFlower: "images/sprites/lillium_regale_flower.png",
        plantsPerM2: 1,
        maxHeight: 100,
        flowerColor: WHITE,
        timeLine: {
            growStart: 19,
            growFinal: 22,
            flowerStart: 23,
            flowerEnd: 29,
            die: 35,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'narcis',
        name: "Narcis",
        textureWithoutFlower: "images/sprites/narcis.png",
        textureWithFlower: "images/sprites/narcis_flower.png",
        plantsPerM2: 5,
        maxHeight: 40,
        flowerColor: YELLOW,
        timeLine: {
            growStart: 4,
            growFinal: 8,
            flowerStart: 9,
            flowerEnd: 15,
            die: 17,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'nepeta',
        name: "Nepeta racemosa 'Superba'",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=NESUPE",
        textureWithoutFlower: "images/sprites/nepeta.png",
        textureWithFlower: "images/sprites/nepeta_flower.png",
        flowerColor: BLUEPURPLE,
        maxHeight: 40,
        plantsPerM2: 13,
        timeLine: {
            growStart: 15,
            growFinal: 20,
            flowerStart: 18,
            flowerEnd: 36,
            die: 52,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'ornithogalum',
        name: "Ornithogalum ponticum 'Sochi'",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=ORSOCH",
        textureWithoutFlower: "images/sprites/ornithogalum.png",
        textureWithFlower: "images/sprites/ornithogalum_flower.png",
        flowerColor: WHITE,
        maxHeight: 50,
        plantsPerM2: 3,
        timeLine: {
            growStart: 12,
            growFinal: 15,
            flowerStart: 22,
            flowerEnd: 27,
            die: 52,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'sporobolus',
        name: "Sporobolus airoides",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=SPAIRO",
        textureWithoutFlower: "images/sprites/sporobolus.png",
        textureWithFlower: "images/sprites/sporobolus_flower.png",
        flowerColor: YELLOWGREEN,
        maxHeight: 80,
        plantsPerM2: 5,
        timeLine: {
            growStart: 12,
            growFinal: 14,
            flowerStart: 30,
            flowerEnd: 50,
            die: 52,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'stipa',
        name: "Stipa tenuissima",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=STTENU",
        textureWithoutFlower: "images/sprites/stipa.png",
        textureWithFlower: "images/sprites/stipa_flower.png",
        flowerColor: YELLOWGREEN,
        maxHeight: 40,
        plantsPerM2: 10,
        timeLine: {
            growStart: 12,
            growFinal: 14,
            flowerStart: 23,
            flowerEnd: 50,
            die: 52,
        },
    },
    {
        id: PLANT_ID++,
        shortName: 'tulip',
        name: "Tulipa 'Blue Diamond'",
        linkWithInfo: "https://www.vasteplant.be/catalog/index.cfm?fuseaction=DETAIL&TREFNAAM=TUBDIA",
        textureWithoutFlower: "images/sprites/tulip.png",
        textureWithFlower: "images/sprites/tulip_flower.png",
        flowerColor: PURPLE,
        maxHeight: 50,
        plantsPerM2: 4,
        timeLine: {
            growStart: 10,
            growFinal: 12,
            flowerStart: 15,
            flowerEnd: 17,
            die: 24,
        },
    },

    /*not so nice - need to do something special for a bodembedekker*/
    /*{            name: "Sagina subulata",
                textureWithoutFlower: "images/sprites/sagina_subulata.png",
                textureWithFlower: "images/sprites/sagina_subulata_flower.png",
                flowerColor: WHITE,
                maxHeight: 15,
                plantsPerM2: 10,
            timeLine: {
                    growStart: 1,
                    growFinal: 2,
                    flowerStart: 22,
                    flowerEnd: 32,
                    die: 52,
                },
            },
        */

];
