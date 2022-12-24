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
-- easy
* refactor de modals
* color scheme
* camera settings in localstorage
* timer autorun fast/slow
--- bigger stories
* plant topview
* edit areas
* database / storage
* tutorial
 */
