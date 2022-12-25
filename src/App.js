import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import {ControlsProvider} from "./contexts/ControlsContext";
import {GardenCanvas} from "./components/three/GardenCanvas";
import {Timer} from "./components/Timer";
import {TimeProvider} from "./contexts/TimeContext";
import {GardenNavbar} from "./components/GardenNavbar";
import {GardenSelectorProvider} from "./contexts/GardenSelectorContext";
import {CameraViewpointProvider} from "./contexts/CameraViewpointContext";

function ProvidedApp() {
    return (
        <div className="d-flex flex-column h-100">
            <GardenNavbar/>
            <Timer/>
            <div className="flex-grow-1">
                <GardenCanvas/>
            </div>
        </div>
    )
}

export default function App() {
    return (
        <TimeProvider>
            <ControlsProvider>
                <GardenSelectorProvider>
                    <CameraViewpointProvider>
                        <ProvidedApp/>
                    </CameraViewpointProvider>
                </GardenSelectorProvider>
            </ControlsProvider>
        </TimeProvider>
    )

}


/*
TODO
* logo

* show plantlist
* useLocalStorage: listen for changes
* show/hide flowers
* show areas for 1 plant in plantlist
* show plant details
* edit areas
** select area
** show data of area
** modify data of area
** modify area in-canvas

--- bigger stories
* plant topview
* database / storage
* tutorial

-- easy - later
* timer: show month as info
* color scheme
* camera settings in localstorage
* timer autorun fast/slow
 */
