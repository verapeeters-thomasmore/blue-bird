let gardenAreaIdGenerator = 3;

export function getNextAreaId() {
    return ++gardenAreaIdGenerator;
}

export const GARDEN_ONE_AREA_NEW = {
    name: "only 1 area NEW",
    areas: [
        {id: getNextAreaId(), "x": 0, "z": 0, "width": 1, "length": 1, "plantName": "camissia"},
    ]
};

export const GARDEN_JUST_A_FEW_AREAS_NEW = {
    name: "just a few areas NEW",
    areas: [
        {id: getNextAreaId(), "x": 3, "z": 0, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 3, "z": 3, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 0, "z": 0, "width": 1, "length": 1, "plantName": "eremurus"},
        {id: getNextAreaId(), "x": 0, "z": 3, "width": 1, "length": 1, "plantName": "eremurus"},
        {id: getNextAreaId(), "x": -3, "z": 0, "width": 1, "length": 1, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": -3, "z": 3, "width": 1, "length": 1, "plantName": "nepeta"},
    ]
};

export const GARDEN_PLENTY = {
    name: "plenty",
    areas: [
        {id: getNextAreaId(), "x": -3, "z": 2, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": -3, "z": 3, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": -2, "z": -3, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": -2, "z": 2, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": -2, "z": 3, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": -2, "z": 2, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 1, "z": -3, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 0, "z": -3, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 0, "z": 2, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 0, "z": 3, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 1, "z": -3, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 2, "z": -3, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 2, "z": -1, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 3, "z": -2, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 3, "z": -1, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 3, "z": 2, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 3, "z": 3, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 3, "z": 0, "width": 1, "length": 1, "plantName": "narcis"},
        {id: getNextAreaId(), "x": 2, "z": 3, "width": 1, "length": 1, "plantName": "narcis"},
        {id: getNextAreaId(), "x": 2, "z": 2, "width": 1, "length": 1, "plantName": "narcis"},
        {id: getNextAreaId(), "x": -2, "z": -2, "width": 1, "length": 1, "plantName": "narcis"},
        {id: getNextAreaId(), "x": -2, "z": 3, "width": 1, "length": 1, "plantName": "narcis"},
        {id: getNextAreaId(), "x": -2, "z": 2, "width": 1, "length": 1, "plantName": "narcis"},
        {id: getNextAreaId(), "x": -2, "z": 3, "width": 1, "length": 1, "plantName": "narcis"},
        {id: getNextAreaId(), "x": -2, "z": 0, "width": 1, "length": 1, "plantName": "narcis"},
        {id: getNextAreaId(), "x": 3, "z": 2, "width": 1, "length": 1, "plantName": "narcis"},
        {id: getNextAreaId(), "x": 3, "z": -3, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -2, "z": 2, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -3, "z": 3, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": 3, "z": 2, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -3, "z": -2, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": 3, "z": 0, "width": 1, "length": 1, "plantName": "tulip"},
        {id: getNextAreaId(), "x": 3, "z": 3, "width": 1, "length": 1, "plantName": "tulip"},
        {id: getNextAreaId(), "x": -3, "z": 3, "width": 1, "length": 1, "plantName": "tulip"},
        {id: getNextAreaId(), "x": 2, "z": 3, "width": 1, "length": 1, "plantName": "tulip"},
        {id: getNextAreaId(), "x": -2, "z": 3, "width": 1, "length": 1, "plantName": "tulip"},
        {id: getNextAreaId(), "x": -3, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3, "z": 0, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 2, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -0, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -3, "z": -3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 3, "z": 4, "width": 1, "length": 1, "plantName": "stipa"},
        {
            id: getNextAreaId(),
            "x": -3,
            "z": -2,
            "width": 1, "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": 3,
            "z": 3,
            "width": 1, "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -2,
            "z": 3,
            "width": 1, "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": 3,
            "z": -1,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 1,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 2,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 1,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": -1,
            "z": 1,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": -1,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": -2,
            "z": 1,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {id: getNextAreaId(), "x": -3, "z": -2, "width": 1, "length": 1, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": 0, "z": 2, "width": 1, "length": 1, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": 3, "z": 0, "width": 1, "length": 1, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": -3, "z": 3, "width": 1, "length": 1, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": 3, "z": -3, "width": 1, "length": 1, "plantName": "nepeta"},
        {id: getNextAreaId(), "x": 4, "z": -4, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 4, "z": -3, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 3, "z": -3, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 2, "z": -4, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 2, "z": -3, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 1, "z": -2, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 1, "z": -1, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 2, "z": -4, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 2, "z": 2, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 3, "z": 2, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 1, "z": 2, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -2, "z": -3, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -2, "z": -4, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -3, "z": -4, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -2, "z": -4, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -3, "z": -4, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -2, "z": 2, "width": 1, "length": 1, "plantName": "camissia"},
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 2,
            "width": 1,
            "length": 1,
            "plantName": "alium_gladiator"
        },
        {
            id: getNextAreaId(),
            "x": 4,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "alium_gladiator"
        },
        {
            id: getNextAreaId(),
            "x": 0,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "alium_gladiator"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "alium_sphaerocephalon"
        },
        {
            id: getNextAreaId(),
            "x": -2,
            "z": 1,
            "width": 1,
            "length": 1,
            "plantName": "alium_sphaerocephalon"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 0,
            "width": 1,
            "length": 1,
            "plantName": "alium_sphaerocephalon"
        },
        {
            id: getNextAreaId(),
            "x": 0,
            "z": 1,
            "width": 1,
            "length": 1,
            "plantName": "alium_sphaerocephalon"
        },
        {
            id: getNextAreaId(),
            "x": 0,
            "z": 2,
            "width": 1,
            "length": 1,
            "plantName": "alium_sphaerocephalon"
        },
        {id: getNextAreaId(), "x": -2, "z": -0, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 0, "z": -2, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 1, "z": 3, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 3, "z": 2, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 2, "z": -1, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": -2, "z": 3, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 1, "z": 1, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 3, "z": 2, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 3, "z": -2, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": 1, "width": 1, "length": 1, "plantName": "asclepias"},
        {
            id: getNextAreaId(),
            "x": 3,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -2,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -1,
            "z": 2,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -2,
            "z": 0,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": 1,
            "z": 1,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": 1,
            "z": 2,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {id: getNextAreaId(), "x": 3, "z": 0, "width": 1, "length": 1, "plantName": "crocus"},
        {id: getNextAreaId(), "x": 0, "z": -3, "width": 1, "length": 1, "plantName": "camissia"},
        {
            id: getNextAreaId(),
            "x": 0,
            "z": 0,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {id: getNextAreaId(), "x": -2, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 1, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 1, "z": 1, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": 1, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": 1, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": -1, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": -2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": -2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": -1, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 3, "z": -1, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": 2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": 2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 4, "z": 4, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -4, "z": 4, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -4, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -4, "z": 2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -4, "z": 1, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -4, "z": 0, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 2, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": 0, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 0, "z": -1, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": -1, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -2, "z": -1, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -3, "z": -1, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": -2, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": -3, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": -4, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 0, "z": -4, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 1, "z": -4, "width": 1, "length": 1, "plantName": "asclepias"},
        {
            id: getNextAreaId(),
            "x": -1,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": 1, "z": -2, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -4, "z": 0, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -3, "z": 0, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -2, "z": 0, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -1, "z": 0, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -4, "z": -4, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -4, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -4, "z": -2, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3, "z": -4, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -3, "z": -2, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3, "z": 3, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 4, "z": 0, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 2, "z": 1, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 2, "z": 0, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 1, "z": 0, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 2, "z": 1, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 3, "z": 1, "width": 1, "length": 1, "plantName": "aster"},
    ],
}

export const GARDEN_WHITE = {
    name: "white",
    areas: [
        {id: getNextAreaId(), "x": 3, "z": -3, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -2, "z": 2, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -3, "z": 3, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": 1, "z": 2, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": 3, "z": 2, "width": 1, "length": 1, "plantName": "hyacint"},
        {
            id: getNextAreaId(),
            "x": -4,
            "z": -3,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": 2,
            "z": 1,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -1,
            "z": 3,
            "width": 3,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": 0, "z": -3, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 2, "z": 2, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -1, "z": 1, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 1, "z": 3, "width": 1, "length": 1, "plantName": "camissia"},
        {
            id: getNextAreaId(),
            "x": 4,
            "z": -1,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {id: getNextAreaId(), "x": 1, "z": -3, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -2, "z": 0, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 0, "z": 0, "width": 1, "length": 1, "plantName": "anthericum_liliago"},
        {
            id: getNextAreaId(),
            "x": 3,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -4,
            "z": 4,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -2,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {id: getNextAreaId(), "x": 1, "z": 4, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 3, "z": 2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 1, "width": 1, "length": 1, "plantName": "stipa"},
        {
            id: getNextAreaId(),
            "x": 1,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 0,
            "width": 1,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {id: getNextAreaId(), "x": -3, "z": -2, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -1, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 2.76, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 2, "z": 2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 0, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2, "z": 1, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 3, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -2, "z": -1, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {
            id: getNextAreaId(),
            "x": 0,
            "z": 2,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": 3,
            "z": 0,
            "width": 1,
            "length": 1,
            "plantName": "lillium_regale"
        },
        {
            id: getNextAreaId(),
            "x": -1,
            "z": 2,
            "width": 1,
            "length": 1,
            "plantName": "lillium_regale"
        },
        {
            id: getNextAreaId(),
            "x": -2,
            "z": 4,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": 1,
            "z": 4,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": 2,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": 2,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {id: getNextAreaId(), "x": 3, "z": -1, "width": 1, "length": 1, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": 0, "z": -.64, "width": 1, "length": 1, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": -3, "z": 0, "width": 1, "length": 1, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": -3, "z": 2, "width": 1, "length": 1, "plantName": "deschampsia"},
        {
            id: getNextAreaId(),
            "x": 0,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -1,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": 2, "z": 4, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 2, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 3, "z": 0, "width": 1, "length": 1, "plantName": "camissia"},
        {
            id: getNextAreaId(),
            "x": -4,
            "z": 2,
            "width": 3,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 3,
            "width": 3,
            "length": 1,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 3,
            "width": 3,
            "length": 1,
            "plantName": "anthericum_liliago"
        }
    ],
}

const GARDEN_A_LITTLE_BIT_OF_ORANGE = {
    name: "a little bit of orange",
    areas: [
        {id: getNextAreaId(), "x": 4, "z": -4, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 0, "z": 2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2.57, "z": -3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": .79, "z": -0, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3.24, "z": -3.36, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -.22, "z": -.43, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 31, "z": 20, "width": 1, "length": 1, "plantName": "asclepias"},
        {
            id: getNextAreaId(),
            "x": 3.79,
            "z": -0,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": 3,
            "z": 0,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": -40, "z": .45, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -.67, "z": -.45, "width": 1, "length": 1, "plantName": "stipa"},
        {
            id: getNextAreaId(),
            "x": -2.32,
            "z": 31,
            "width": 3.36,
            "length": 3,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": 3,
            "z": .89,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -.59,
            "z": 3,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": -2.04, "z": -.88, "width": 1, "length": 1, "plantName": "asclepias"},
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 2,
            "width": .76,
            "length": 2,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": -.34,
            "width": 3.36,
            "length": 2,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": 2.56, "z": .32, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 31, "z": 3.79, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2.38, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 1, "z": 1, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -2.43, "z": 4, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 3, "z": 3, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -1, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {
            id: getNextAreaId(),
            "x": .55,
            "z": 4,
            "width": 4,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -30,
            "z": 2.26,
            "width": 1,
            "length": 3.05,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": -.93, "z": 3.38, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2, "z": 21, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3.24, "z": -2, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 4.42, "z": .97, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -4.26, "z": -3.89, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 4.05, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"}
    ],
}
export const GARDEN_AUTUMN = {
    name: "autumn",
    areas: [
        {id: getNextAreaId(), "x": 3, "z": 31, "width": 1, "length": 1, "plantName": "eremurus"},
        {id: getNextAreaId(), "x": -.56, "z": 3, "width": 1, "length": 1, "plantName": "eremurus"},
        {
            id: getNextAreaId(),
            "x": 2,
            "z": 31,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_tennesseensis"
        },
        {
            id: getNextAreaId(),
            "x": -3.73,
            "z": 2.28,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_tennesseensis"
        },
        {id: getNextAreaId(), "x": 3.76, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -20, "z": 2.42, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 4, "width": 1, "length": 1, "plantName": "stipa"},
        {
            id: getNextAreaId(),
            "x": 20,
            "z": 3,
            "width": 1,
            "length": .74,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -3.74,
            "z": 3,
            "width": 1,
            "length": .74,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -2.32,
            "z": 2.52,
            "width": 1,
            "length": .74,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": 3, "z": 3, "width": 1, "length": 1, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": -2.43, "z": 1, "width": 1, "length": 1, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": -.63, "z": -.54, "width": 1, "length": 1, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": 2.95, "z": .33, "width": 1, "length": 1, "plantName": "calamagrostis"},
        {
            id: getNextAreaId(),
            "x": -20,
            "z": -0,
            "width": 1,
            "length": 1,
            "plantName": "calamagrostis"
        },
        {id: getNextAreaId(), "x": .32, "z": 3, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": -30, "z": 2.57, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 4, "z": 3, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 3.27, "z": 3.03, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": .29, "z": 2, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": -2.48, "z": -2.59, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 31, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -4, "z": 3, "width": 1, "length": 1, "plantName": "aster"},
        {
            id: getNextAreaId(),
            "x": -2.88,
            "z": 3,
            "width": 1,
            "length": 31,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": 20,
            "z": 3,
            "width": 1,
            "length": 31,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -2.38,
            "z": 3,
            "width": 1,
            "length": 31,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 2,
            "width": 1,
            "length": 3,
            "plantName": "lillium_regale"
        },
        {
            id: getNextAreaId(),
            "x": 31,
            "z": .74,
            "width": 2.29,
            "length": 1,
            "plantName": "lillium_regale"
        },
        {id: getNextAreaId(), "x": 4, "z": -.08, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -20, "z": -30, "width": 1, "length": 1, "plantName": "sporobolus"}
    ]
}

//assumption: name of the predefined gardens is unique for each garden
export const PREDEFINED_GARDENS = [
    GARDEN_ONE_AREA_NEW,
    GARDEN_JUST_A_FEW_AREAS_NEW,
    GARDEN_PLENTY,
    GARDEN_WHITE,
    GARDEN_A_LITTLE_BIT_OF_ORANGE,
    GARDEN_AUTUMN
];