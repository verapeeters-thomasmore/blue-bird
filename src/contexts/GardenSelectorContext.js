import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {PREDEFINED_GARDENS} from "../data/area.data";
import {PLANT_DATA} from "../data/plant.data";

const GardenSelectorContext = createContext();

function gardenEnrichedWithPlants(garden, plants) {
    return garden.map(area => ({...area, plant: plants.find(p => p.shortName === area.plantName)}))
}

export function GardenSelectorProvider(props) {
    const [indexSelectedGarden, setIndexSelectedGardenInternal] = useState(1);

    const areasSelectedGarden = useMemo(() =>
            gardenEnrichedWithPlants(PREDEFINED_GARDENS[indexSelectedGarden].areas, PLANT_DATA),
        [indexSelectedGarden]);

    const selectGarden = useCallback(gardenNameToSelect => {
            const index = PREDEFINED_GARDENS.findIndex(g => g.name === gardenNameToSelect);
            setIndexSelectedGardenInternal(index);
        },
        []);

    const api = useMemo(() => ({
        areasSelectedGarden, indexSelectedGarden, selectGarden,
    }), [areasSelectedGarden, indexSelectedGarden, selectGarden,]);

    return <GardenSelectorContext.Provider value={api}>
        {props.children}
    </GardenSelectorContext.Provider>
}

export const useGardenSelectorContext = () => useContext(GardenSelectorContext);
