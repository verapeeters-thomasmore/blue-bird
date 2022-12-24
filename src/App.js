import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import {ControlsProvider} from "./contexts/ControlsContext";
import {GardenCanvas} from "./components/three/GardenCanvas";
import {Timer} from "./components/Timer";
import {TimeProvider} from "./contexts/TimeContext";
import {GardenNavbar} from "./components/GardenNavbar";
import {GardenSelectorProvider, useGardenSelectorContext} from "./contexts/GardenSelectorContext";

function ProvidedApp() {
    const {areasSelectedGarden} = useGardenSelectorContext();

    return (
        <div className="d-flex flex-column h-100">
            <GardenNavbar/>
            <Timer/>
            <div className="flex-grow-1">
                <GardenCanvas areas={areasSelectedGarden}/>
            </div>
        </div>
    )
}

export default function App() {
    return (
        <TimeProvider>
            <ControlsProvider>
                <GardenSelectorProvider>
                    <ProvidedApp/>
                </GardenSelectorProvider>
            </ControlsProvider>
        </TimeProvider>
    )

}


/*
TODO
-- easy
* color scheme
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
