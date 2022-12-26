import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import {ControlsProvider} from "./contexts/ControlsContext";
import {TimeProvider} from "./contexts/TimeContext";
import {GardenNavbar} from "./components/GardenNavbar";
import {GardenSelectorProvider} from "./contexts/GardenSelectorContext";
import {CameraViewpointProvider} from "./contexts/CameraViewpointContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NoMatchPage} from "./pages/NoMatchPage";
import {HomePage} from "./pages/HomePage";
import {ControlsPage} from "./pages/ControlsPage";
import {GardenSelectionPage} from "./pages/GardenSelectionPage";
import {GardenAreaListPage} from "./pages/GardenAreaListPage";
import {CameraViewpointsPage} from "./pages/CameraViewpointsPage";

function ProvidedApp() {
    return (
        <div className="d-flex flex-column h-100">
            <GardenNavbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/controls" element={<ControlsPage/>}/>
                <Route path="/cameraviewpoints" element={<CameraViewpointsPage/>}/>
                <Route path="/gardenselection" element={<GardenSelectionPage/>}/>
                <Route path="/gardenarealist" element={<GardenAreaListPage/>}/>
                <Route path="*" element={<NoMatchPage/>}/>
            </Routes>

        </div>
    )
}

export default function App() {
    return (
        <TimeProvider>
            <ControlsProvider>
                <GardenSelectorProvider>
                    <CameraViewpointProvider>
                        <BrowserRouter>
                            <ProvidedApp/>
                        </BrowserRouter>
                    </CameraViewpointProvider>
                </GardenSelectorProvider>
            </ControlsProvider>
        </TimeProvider>
    )

}


/*
TODO
* view-button in arealist: toggle
* useLocalStorage: listen for changes
* show plantlist
* show areas for 1 plant in plantlist
* show plant details
* edit areas
** select area
** show data of area
** modify data of area
** modify area in-canvas

-- ideeën nog af te checken
* plantlist/arealist in react-router page

-- issues
* logo
* proptypes voor area en plant
* alle afmetingen *100?

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
