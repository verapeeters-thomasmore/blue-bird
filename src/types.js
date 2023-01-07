import PropTypes from "prop-types";

export const plantDataPropType = PropTypes.shape({
        id: PropTypes.number,
        shortName: PropTypes.string,
        textureWithoutFlower: PropTypes.string,
        textureWithFlower: PropTypes.string,
        flowerColor: PropTypes.string,
        maxHeight: PropTypes.number,
        plantsPerM2: PropTypes.number,
        timeLine: PropTypes.shape({
            growStart: PropTypes.number,
            growFinal: PropTypes.number,
            FlowerStart: PropTypes.number,
            flowerEnd: PropTypes.number,
            die: PropTypes.number,
        }),
    }
);

const areaPropType = PropTypes.shape({
    id: PropTypes.number,
    x: PropTypes.number,
    z: PropTypes.number,
    plantName: PropTypes.string,
});

export const areaWithPlantDataPropType = PropTypes.shape({
    id: PropTypes.number,
    x: PropTypes.number,
    z: PropTypes.number,
    plantName: PropTypes.string,
    plant: plantDataPropType,
});

export const plantWithAreasPropType = PropTypes.shape({
    plantName: PropTypes.string,
    plant: plantDataPropType,
    areas: PropTypes.arrayOf(areaPropType)
});