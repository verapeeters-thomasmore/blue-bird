let gardenAreaIdGenerator = 3;

export function getNextAreaId() {
    return ++gardenAreaIdGenerator;
}

const GARDEN_ONE_AREA = {
    name: "only 1 area",
    areas: [
        {id: getNextAreaId(), "x": 0, "z": 0, "plantName": "camissia"},
    ]
};

const GARDEN_JUST_A_FEW_AREAS = {
    name: "just a few areas",
    areas: [
        {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 3, "z": 3, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 0, "z": 0, "plantName": "eremurus"},
        {id: getNextAreaId(), "x": 0, "z": 3, "plantName": "eremurus"},
        {id: getNextAreaId(), "x": -3, "z": 0, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "nepeta"},
    ]
};

const GARDEN_PLENTY = {
    name: "plenty",
    areas: [
        {id: getNextAreaId(), "x": -3, "z": 2, "plantName": "crocus"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "crocus"},
        {id: getNextAreaId(), "x": -2, "z": -3, "plantName": "crocus"},
        {id: getNextAreaId(), "x": -2, "z": 3, "plantName": "crocus"},
        {id: getNextAreaId(), "x": -2, "z": 2, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 0, "z": -3, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 0, "z": 2, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 0, "z": 3, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 1, "z": -3, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 2, "z": -3, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 2, "z": -1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 3, "z": -2, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 3, "z": -1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 3, "z": 2, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 3, "z": 3, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "narcis"},
        {id: getNextAreaId(), "x": 2, "z": 3, "plantName": "narcis"},
        {id: getNextAreaId(), "x": 2, "z": 2, "plantName": "narcis"},
        {id: getNextAreaId(), "x": -2, "z": -2, "plantName": "narcis"},
        {id: getNextAreaId(), "x": -2, "z": 2, "plantName": "narcis"},
        {id: getNextAreaId(), "x": -2, "z": 3, "plantName": "narcis"},
        {id: getNextAreaId(), "x": -2, "z": 0, "plantName": "narcis"},
        {id: getNextAreaId(), "x": 3, "z": 2, "plantName": "narcis"},
        {id: getNextAreaId(), "x": 3, "z": -3, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -2, "z": 2, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": 3, "z": 2, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -3, "z": -2, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "tulip"},
        {id: getNextAreaId(), "x": 3, "z": 3, "plantName": "tulip"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "tulip"},
        {id: getNextAreaId(), "x": 2, "z": 3, "plantName": "tulip"},
        {id: getNextAreaId(), "x": -2, "z": 3, "plantName": "tulip"},
        {id: getNextAreaId(), "x": -3, "z": -3, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 2, "z": -3, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -0, "z": -3, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -3, "z": -3, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2, "z": 3, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 3, "z": 4, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": -2, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 3, "z": 3, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": -2, "z": 3, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 3, "z": -1, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": -3, "z": 1, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": -3, "z": 2, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": -1, "z": 1, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": -1, "z": 3, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": -2, "z": 1, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": 0, "z": 0, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": -3, "z": -2, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": 0, "z": 2, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": 3, "z": -3, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": 4, "z": -4, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 4, "z": -3, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 3, "z": -3, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 2, "z": -3, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 1, "z": -2, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 1, "z": -1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 2, "z": -4, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 2, "z": 2, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 3, "z": 2, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 1, "z": 2, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -2, "z": -3, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -3, "z": -4, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -2, "z": 2, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -3, "z": 2, "plantName": "alium_gladiator"},
        {id: getNextAreaId(), "x": 4, "z": 3, "plantName": "alium_gladiator"},
        {id: getNextAreaId(), "x": 0, "z": 3, "plantName": "alium_gladiator"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "alium_sphaerocephalon"},
        {id: getNextAreaId(), "x": -2, "z": 1, "plantName": "alium_sphaerocephalon"},
        {id: getNextAreaId(), "x": -3, "z": 0, "plantName": "alium_sphaerocephalon"},
        {id: getNextAreaId(), "x": 0, "z": 1, "plantName": "alium_sphaerocephalon"},
        {id: getNextAreaId(), "x": 0, "z": 2, "plantName": "alium_sphaerocephalon"},
        {id: getNextAreaId(), "x": -2, "z": -0, "plantName": "aster"},
        {id: getNextAreaId(), "x": 0, "z": -2, "plantName": "aster"},
        {id: getNextAreaId(), "x": 1, "z": 3, "plantName": "aster"},
        {id: getNextAreaId(), "x": 3, "z": 2, "plantName": "aster"},
        {id: getNextAreaId(), "x": 2, "z": -1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 3, "z": 3, "plantName": "aster"},
        {id: getNextAreaId(), "x": 4, "z": 0, "plantName": "aster"},
        {id: getNextAreaId(), "x": 2, "z": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 2, "z": 0, "plantName": "aster"},
        {id: getNextAreaId(), "x": 1, "z": 0, "plantName": "aster"},
        {id: getNextAreaId(), "x": 3, "z": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": -2, "z": 3, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 1, "z": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 3, "z": 2, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 3, "z": -2, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 3, "z": 3, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": -2, "z": 3, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": -1, "z": 2, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": -2, "z": 0, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": 1, "z": 1, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": 1, "z": 2, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": 0, "z": -3, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 1, "z": 3, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 1, "z": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": 3, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": 3, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": -1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": -2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": -2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": -1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 3, "z": -1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": 2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": 2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": 4, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -4, "z": 4, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -4, "z": 3, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -4, "z": 2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -4, "z": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -4, "z": 0, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 2, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": 0, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 0, "z": -1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": -1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -2, "z": -1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -3, "z": -1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": -2, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": -3, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": -4, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 0, "z": -4, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 1, "z": -4, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": 3, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 1, "z": -2, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -4, "z": 0, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -3, "z": 0, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -2, "z": 0, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -1, "z": 0, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -4, "z": -4, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -4, "z": -3, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -4, "z": -2, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3, "z": -4, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -3, "z": -2, "plantName": "sporobolus"},
    ],
}

const GARDEN_WHITE = {
    name: "white",
    areas: [
        {id: getNextAreaId(), "x": 3, "z": -3, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -2, "z": 2, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": 1, "z": 2, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": 3, "z": 2, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": 0, "z": 3, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": -4, "z": -3, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 2, "z": 1, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": -1, "z": 3, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 1, "z": 3, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": -2, "z": 4, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 1, "z": 4, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 0, "z": -3, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 2, "z": 2, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -1, "z": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 1, "z": 3, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 1, "z": -3, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -2, "z": 0, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -3, "z": 2, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 2, "z": 3, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": 0, "z": 2, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": 4, "z": -1, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": 0, "z": 0, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": 2, "z": 0, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": 1, "z": 0, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": 1, "z": -1, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": 2, "z": -1, "plantName": "echinacea_purpurea_green_jewel"},
        {id: getNextAreaId(), "x": -1, "z": 0, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": -1, "z": -1, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": 0, "z": -1, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": 0, "z": 1, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": 1, "z": 1, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": -4, "z": 4, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": -2, "z": 3, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": -3, "z": 0, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": -4, "z": 2, "plantName": "anthericum_liliago"},
        {id: getNextAreaId(), "x": 1, "z": 4, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 3, "z": 2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": 2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 0, "z": 3, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 3, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2, "z": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": 4, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": -2, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -1, "z": -3, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -2, "z": -3, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 2, "z": -3, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -1, "z": -2, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -2, "z": -1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3, "z": -3, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "lillium_regale"},
        {id: getNextAreaId(), "x": -1, "z": 2, "plantName": "lillium_regale"},
        {id: getNextAreaId(), "x": -1, "z": 0, "plantName": "lillium_regale"},
        {id: getNextAreaId(), "x": 4, "z": 1, "plantName": "lillium_regale"},
        {id: getNextAreaId(), "x": 4, "z": 3,   "plantName": "lillium_regale"},
        {id: getNextAreaId(), "x": -4, "z": 3, "plantName": "lillium_regale"},
        {id: getNextAreaId(), "x": -3, "z": 1, "plantName": "lillium_regale"},
        {id: getNextAreaId(), "x": 3, "z": -1, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": 0, "z": -1, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": -3, "z": 0, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": -3, "z": 2, "plantName": "deschampsia"},
    ],
}

const GARDEN_A_LITTLE_BIT_OF_ORANGE = {
    name: "a little bit of orange",
    areas: [
        {id: getNextAreaId(), "x": 2, "z": -1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -3, "z": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3, "z": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3, "z": -1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 0, "z": 2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2, "z": -1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 0, "z": -1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 0, "z": 0, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -1, "z": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -1, "z": 0, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2, "z": 0, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 3, "z": 2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2, "z": 2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": 2, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2, "z": -1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -2, "z": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -3, "z": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 0, "z": 3, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -3, "z": -1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 1, "z": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -2, "z": 4, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": 4, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 3, "z": 3, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 0, "z": 0, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 3, "z": 2, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 2, "z": 0, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 1, "z": 3, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 1, "z": 0, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 1, "z": 1, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 1, "z": 2, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": -1, "z": 2, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 1, "z": -1, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 2, "z": -1, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 2, "z": 3, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": -2, "z": 3, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": 3, "z": 1, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": -1, "z": 3, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": -3, "z": 2, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": -3, "z": -1, "plantName": "echinacea_purpurea_polar_breeze"},
        {id: getNextAreaId(), "x": -3, "z": 1, "plantName": "echinacea_purpurea_polar_breeze"},
    ],
}

const GARDEN_AUTUMN = {
    name: "autumn",
    areas:
        [
            {id: getNextAreaId(), "x": 3, "z": 3, "plantName": "eremurus",},
            {id: getNextAreaId(), "x": 3, "z": 2, "plantName": "eremurus",},
            {id: getNextAreaId(), "x": 2, "z": 3, "plantName": "echinacea_tennesseensis",},
            {id: getNextAreaId(), "x": -4, "z": 2, "plantName": "echinacea_tennesseensis",},
            {id: getNextAreaId(), "x": 2, "z": 2, "plantName": "echinacea_tennesseensis",},
            {id: getNextAreaId(), "x": 3, "z": 1, "plantName": "echinacea_tennesseensis",},
            {id: getNextAreaId(), "x": 4, "z": 3, "plantName": "stipa",},
            {id: getNextAreaId(), "x": -2, "z": 2, "plantName": "stipa",},
            {id: getNextAreaId(), "x": -3, "z": 4, "plantName": "stipa",},
            {id: getNextAreaId(), "x": 2, "z": 3, "plantName": "echinacea_purpurea_polar_breeze",},
            {id: getNextAreaId(), "x": -4, "z": 3, "plantName": "echinacea_purpurea_polar_breeze",},
            {id: getNextAreaId(), "x": -2, "z": 2, "plantName": "echinacea_purpurea_polar_breeze",},
            {id: getNextAreaId(), "x": 3, "z": 3, "plantName": "deschampsia",},
            {id: getNextAreaId(), "x": -2, "z": 1, "plantName": "deschampsia",},
            {id: getNextAreaId(), "x": -3, "z": -1, "plantName": "deschampsia",},
            {id: getNextAreaId(), "x": -2, "z": -2, "plantName": "deschampsia",},
            {id: getNextAreaId(), "x": 2, "z": -1, "plantName": "deschampsia",},
            {id: getNextAreaId(), "x": 2, "z": 0, "plantName": "deschampsia",},
            {id: getNextAreaId(), "x": 1, "z": -1, "plantName": "deschampsia",},
            {id: getNextAreaId(), "x": 3, "z": 0, "plantName": "calamagrostis",},
            {id: getNextAreaId(), "x": 3, "z": 1, "plantName": "calamagrostis",},
            {id: getNextAreaId(), "x": 2, "z": 1, "plantName": "calamagrostis",},
            {id: getNextAreaId(), "x": -2, "z": 0, "plantName": "calamagrostis",},
            {id: getNextAreaId(), "x": -3, "z": 2, "plantName": "aster",},
            {id: getNextAreaId(), "x": 4, "z": 3, "plantName": "aster",},
            {id: getNextAreaId(), "x": 3, "z": 3, "plantName": "aster",},
            {id: getNextAreaId(), "x": -4, "z": 3, "plantName": "aster",},
            {id: getNextAreaId(), "x": -4, "z": 1, "plantName": "aster",},
            {id: getNextAreaId(), "x": -3, "z": 1, "plantName": "aster",},
            {id: getNextAreaId(), "x": 1, "z": 3, "plantName": "aster",},
            {id: getNextAreaId(), "x": 1, "z": 0, "plantName": "aster",},
            {id: getNextAreaId(), "x": 1, "z": 1, "plantName": "aster",},
            {id: getNextAreaId(), "x": 2, "z": 3, "plantName": "aster",},
            {id: getNextAreaId(), "x": 0, "z": 3, "plantName": "aster",},
            {id: getNextAreaId(), "x": 2, "z": 1, "plantName": "aster",},
            {
                id: getNextAreaId(),
                "x": 1,
                "z": 2,
                "plantName": "aster",
            }, {
            id: getNextAreaId(),
            "x": 3,
            "z": -2,
            "plantName": "sporobolus",
        }, {
            id: getNextAreaId(),
            "x": 4,
            "z": -1,
            "plantName": "sporobolus",
        }, {
            id: getNextAreaId(),
            "x": -3,
            "z": 3,
            "plantName": "anthericum_liliago",
        }, {
            id: getNextAreaId(),
            "x": 2,
            "z": 3,
            "plantName": "anthericum_liliago",
        }, {
            id: getNextAreaId(),
            "x": -2,
            "z": 3,
            "plantName": "anthericum_liliago",
        }, {
            id: getNextAreaId(),
            "x": -3,
            "z": 2,
            "plantName": "lillium_regale",
        }, {
            id: getNextAreaId(),
            "x": 3,
            "z": 0,
            "plantName": "lillium_regale",
        }, {
            id: getNextAreaId(),
            "x": 2,
            "z": -2,
            "plantName": "eremurus",
        }, {
            id: getNextAreaId(),
            "x": 1,
            "z": -2,
            "plantName": "eremurus",
        }, {
            id: getNextAreaId(),
            "x": 3,
            "z": -1,
            "plantName": "echinacea_tennesseensis",
        }, {
            id: getNextAreaId(),
            "x": 4,
            "z": 0,
            "plantName": "echinacea_tennesseensis",
        }, {
            id: getNextAreaId(),
            "x": -4,
            "z": 0,
            "plantName": "echinacea_tennesseensis",
        }, {
            id: getNextAreaId(),
            "x": -3,
            "z": 0,
            "plantName": "stipa",
        }, {
            id: getNextAreaId(),
            "x": 0,
            "z": 2,
            "plantName": "stipa",
        }, {
            id: getNextAreaId(),
            "x": -1,
            "z": 0,
            "plantName": "aster",
        }, {
            id: getNextAreaId(),
            "x": -2,
            "z": -1,
            "plantName": "aster",
        }, {
            id: getNextAreaId(),
            "x": -1,
            "z": -1,
            "plantName": "aster",
        }, {
            id: getNextAreaId(),
            "x": 0,
            "z": -3,
            "plantName": "aster",
        }, {
            id: getNextAreaId(),
            "x": 1,
            "z": -3,
            "plantName": "aster",
        }, {
            id: getNextAreaId(),
            "x": 1,
            "z": -2,
            "plantName": "aster",
        }, {
            id: getNextAreaId(),
            "x": 1,
            "z": -1,
            "plantName": "aster",
        }, {
            id: getNextAreaId(),
            "x": 0,
            "z": -3,
            "plantName": "eremurus",
        }, {
            id: getNextAreaId(),
            "x": -2,
            "z": -3,
            "plantName": "aster",
        }, {
            id: getNextAreaId(),
            "x": -2,
            "z": 1,
            "plantName": "aster",
        }, {
            id: getNextAreaId(),
            "x": 0,
            "z": 4,
            "plantName": "aster",
        },
            {id: getNextAreaId(), "x": 0, "z": 3, "plantName": "echinacea_purpurea_polar_breeze",},
            {
                id: getNextAreaId(),
                "x": 1,
                "z": 3,
                "plantName": "echinacea_purpurea_polar_breeze",
            }, {
            id: getNextAreaId(),
            "x": 1,
            "z": 2,
            "plantName": "echinacea_purpurea_polar_breeze",
        }, {
            id: getNextAreaId(),
            "x": -3,
            "z": -2,
            "plantName": "stipa",
        }, {
            id: getNextAreaId(),
            "x": -3,
            "z": -3,
            "plantName": "stipa",
        }, {
            id: getNextAreaId(),
            "x": 2,
            "z": -3,
            "plantName": "stipa",
        }, {
            id: getNextAreaId(),
            "x": 3,
            "z": -3,
            "plantName": "stipa",
        }]
};

//assumption: name of the predefined gardens is unique for each garden
export const PREDEFINED_GARDENS = [
    GARDEN_ONE_AREA,
    GARDEN_JUST_A_FEW_AREAS,
    GARDEN_PLENTY,
    GARDEN_WHITE,
    GARDEN_A_LITTLE_BIT_OF_ORANGE,
    GARDEN_AUTUMN,
];