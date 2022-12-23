import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useMemo} from "react";
import {PLANT_DATA} from "./data/plant.data";
import {PREDEFINED_GARDENS} from "./data/area.data";
import {ControlsProvider} from "./contexts/ControlsContext";
import {GardenCanvas} from "./components/GardenCanvas";
import {Timer} from "./components/Timer";
import {TimeProvider} from "./contexts/TimeContext";
import {GardenNavbar} from "./components/GardenNavbar";

function gardenEnrichedWithPlants(garden, plants) {
    return garden.map(area => ({...area, plant: plants.find(p => p.shortName === area.plantName)}))
}

function ProvidedApp() {

    const areas = useMemo(() => gardenEnrichedWithPlants(PREDEFINED_GARDENS[5].areas, PLANT_DATA), []);
    //console.log(areas);

    return (
        <>
            <GardenNavbar/>
            <Timer/>
            <GardenCanvas areas={areas}/>
        </>
    )
}

export default function App() {
    return (
        <TimeProvider>
            <ControlsProvider>
                <ProvidedApp/>
            </ControlsProvider>
        </TimeProvider>
    )

}


/*
TODO
-- easy
* use controlsContext deeper?
* modal for controls
* nice timer-slider
* timer cyclic
* timer autorun
* timer autorun fast/slow
* width/height of world depending on width/height window
* color scheme
* choose predefined garden
* controls in localstorage
* camera settings in localstorage
--- bigger stories
* plant topview
* edit areas
* database / storage
* tutorial
 */
