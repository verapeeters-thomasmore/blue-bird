import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
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
        <div className="d-flex flex-column h-100">
            <GardenNavbar/>
            <Timer/>
            <div className="flex-grow-1">
                <GardenCanvas areas={areas}/>
            </div>
        </div>
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
* color scheme
* choose predefined garden
* controls in localstorage
* time in localstorage
* camera settings in localstorage
* boundaries for orbit controls
* timer autorun fast/slow
--- bigger stories
* plant topview
* edit areas
* database / storage
* tutorial
 */
