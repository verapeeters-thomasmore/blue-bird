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
        {id: getNextAreaId(), "x": 33, "z": -3, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -2, "z": 2, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": -3, "z": 3, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": 1, "z": 2, "width": 1, "length": 1, "plantName": "hyacint"},
        {id: getNextAreaId(), "x": 3, "z": 2, "width": 1, "length": 1, "plantName": "hyacint"},
        {
            id: getNextAreaId(),
            "x": -3.57,
            "z": -3.23,
            "width": 1,
            "length": 2.44,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": 2.33,
            "z": .83,
            "width": 2.66,
            "length": 3,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -.86,
            "z": 3,
            "width": 3,
            "length": 3.38,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": 0, "z": -3, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 2, "z": 2, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": -1, "z": 1, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": .54, "z": 3, "width": 1, "length": 1, "plantName": "camissia"},
        {
            id: getNextAreaId(),
            "x": 4,
            "z": -.86,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": -3.45,
            "z": 3.08,
            "width": 3.34,
            "length": .79,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {id: getNextAreaId(), "x": .80, "z": -3, "width": 1, "length": 1, "plantName": "camissia"},
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
            "x": -3.59,
            "z": 3.57,
            "width": 3,
            "length": .72,
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
            "width": 3,
            "length": .80,
            "plantName": "anthericum_liliago"
        },
        {id: getNextAreaId(), "x": .68, "z": 3.87, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 2.99, "z": 2.33, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3.26, "z": 2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3.07, "z": .65, "width": 1, "length": 1, "plantName": "stipa"},
        {
            id: getNextAreaId(),
            "x": .98,
            "z": 3,
            "width": 1,
            "length": .50,
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
        {id: getNextAreaId(), "x": -3, "z": -2.22, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -.39, "z": -30, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 2.76, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 2, "z": 2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -.29, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 3.37, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -20, "z": .72, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 3, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -2, "z": -1, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"},
        {
            id: getNextAreaId(),
            "x": -0,
            "z": 20,
            "width": .93,
            "length": .96,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": 3,
            "z": -.09,
            "width": 1,
            "length": 1,
            "plantName": "lillium_regale"
        },
        {
            id: getNextAreaId(),
            "x": -.83,
            "z": 2.02,
            "width": 1,
            "length": 1,
            "plantName": "lillium_regale"
        },
        {
            id: getNextAreaId(),
            "x": -2.39,
            "z": 3.93,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": .94,
            "z": 3.97,
            "width": 1,
            "length": .95,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": 2.36,
            "z": 3.46,
            "width": .93,
            "length": .96,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {
            id: getNextAreaId(),
            "x": 20,
            "z": 3,
            "width": .93,
            "length": .96,
            "plantName": "echinacea_purpurea_green_jewel"
        },
        {id: getNextAreaId(), "x": 3, "z": -.83, "width": 1, "length": 1, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": -.02, "z": -.64, "width": 1, "length": 1, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": -3.34, "z": -.08, "width": 1, "length": 1, "plantName": "deschampsia"},
        {id: getNextAreaId(), "x": -2.87, "z": 2.03, "width": 1, "length": 1, "plantName": "deschampsia"},
        {
            id: getNextAreaId(),
            "x": .37,
            "z": 2.92,
            "width": 1,
            "length": 1,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -.62,
            "z": 3.72,
            "width": 1,
            "length": .50,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": 2.23, "z": 3.59, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3, "z": 2, "width": 1, "length": 1, "plantName": "camissia"},
        {id: getNextAreaId(), "x": 3.94, "z": -.56, "width": 1, "length": 1, "plantName": "camissia"},
        {
            id: getNextAreaId(),
            "x": -3.64,
            "z": 2.62,
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
        {id: getNextAreaId(), "x": .37, "z": 2, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2.57, "z": -3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": .79, "z": -0, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3.24, "z": -3.36, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -.22, "z": -.43, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 3.39, "z": 20, "width": 1, "length": 1, "plantName": "asclepias"},
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
            "width": .68,
            "length": .86,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": -40, "z": .45, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -.67, "z": -.45, "width": 1, "length": 1, "plantName": "stipa"},
        {
            id: getNextAreaId(),
            "x": -2.32,
            "z": 3.39,
            "width": 3.36,
            "length": 3,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": 3,
            "z": .89,
            "width": .68,
            "length": .65,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -.59,
            "z": 3,
            "width": .68,
            "length": .86,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": -2.04, "z": -.88, "width": 1, "length": 1, "plantName": "asclepias"},
        {
            id: getNextAreaId(),
            "x": -3.26,
            "z": 2,
            "width": .76,
            "length": 2.23,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": -.34,
            "width": 3.36,
            "length": 2.23,
            "plantName": "echinacea_purpurea_polar_breeze"
        },
        {id: getNextAreaId(), "x": 2.56, "z": .32, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": 3.72, "z": 3.79, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -2.38, "z": 3, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": .39, "z": .62, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -2.43, "z": 3.97, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": 3, "z": 3, "width": 1, "length": 1, "plantName": "asclepias"},
        {id: getNextAreaId(), "x": -.83, "z": 3.37, "width": 1, "length": 1, "plantName": "stipa"},
        {
            id: getNextAreaId(),
            "x": .55,
            "z": 3.59,
            "width": 3.97,
            "length": .86,
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
        {id: getNextAreaId(), "x": 2, "z": 2.94, "width": 1, "length": 1, "plantName": "stipa"},
        {id: getNextAreaId(), "x": -3.24, "z": -2, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 4.42, "z": .97, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -4.26, "z": -3.89, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 4.05, "z": -3, "width": 1, "length": 1, "plantName": "sporobolus"}
    ],
}
export const GARDEN_AUTUMN = {
    name: "autumn",
    areas: [
        {id: getNextAreaId(), "x": 3, "z": 3.62, "width": 1, "length": 1, "plantName": "eremurus"},
        {id: getNextAreaId(), "x": -.56, "z": 3, "width": 1, "length": 1, "plantName": "eremurus"},
        {
            id: getNextAreaId(),
            "x": 2,
            "z": 3.68,
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
        {id: getNextAreaId(), "x": -3, "z": 3.57, "width": 1, "length": 1, "plantName": "stipa"},
        {
            id: getNextAreaId(),
            "x": 20,
            "z": 3.08,
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
        {id: getNextAreaId(), "x": -2.43, "z": .83, "width": 1, "length": 1, "plantName": "deschampsia"},
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
        {id: getNextAreaId(), "x": .32, "z": 3.34, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": -30, "z": 2.57, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 4, "z": 3.34, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": 3.27, "z": 3.03, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": .29, "z": 2, "width": 1, "length": 1, "plantName": "aster"},
        {id: getNextAreaId(), "x": -2.48, "z": -2.59, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": 3.39, "z": -3.45, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -3.97, "z": 3, "width": 1, "length": 1, "plantName": "aster"},
        {
            id: getNextAreaId(),
            "x": -2.88,
            "z": 3.08,
            "width": 1,
            "length": 3.65,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": 20,
            "z": 3,
            "width": 1,
            "length": 3.65,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -2.38,
            "z": 3,
            "width": 1,
            "length": 3.65,
            "plantName": "anthericum_liliago"
        },
        {
            id: getNextAreaId(),
            "x": -3,
            "z": 2,
            "width": 1,
            "length": 3.26,
            "plantName": "lillium_regale"
        },
        {
            id: getNextAreaId(),
            "x": 3.62,
            "z": .74,
            "width": 2.29,
            "length": 1,
            "plantName": "lillium_regale"
        },
        {id: getNextAreaId(), "x": 3.59, "z": -.08, "width": 1, "length": 1, "plantName": "sporobolus"},
        {id: getNextAreaId(), "x": -2.37, "z": -30, "width": 1, "length": 1, "plantName": "sporobolus"}
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