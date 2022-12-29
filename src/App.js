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
            <GardenSelectorProvider>
                <ControlsProvider>
                    <CameraViewpointProvider>
                        <BrowserRouter>
                            <ProvidedApp/>
                        </BrowserRouter>
                    </CameraViewpointProvider>
                </ControlsProvider>
            </GardenSelectorProvider>
        </TimeProvider>
    )

}


/*
TODO
* OK all areas: means traverse all areas -- do not save showAreaPlanes anymore
* OK -- view-button in arealist: toggle
* OK -- show plantlist
* OK -- show areas for 1 plant in plantlist
* OK open arealist for 1 plant
* OK show plant details
* OK sort plantinfo
* edit areas
** select area / EDIT
** OK -- show data of area
** modify data of area
** modify area in-canvas

-- issues
* deploy routes don't work (refresh)
* logo
* proptypes voor area en plant
* alle afmetingen *100?
* gardenarealist - meerdere cards/row is niet ok want cards zijn niet even hoog - zie https://www.npmjs.com/package/react-masonry-css
* gardenarealist - buttons and text not on same line
* gardenselectionpage: which garden is selected? - is it edited?

--- bigger stories
* plant topview
* catalog always show areas? -- catalog is simply special kind of garden (limited - no edits)
* database / storage
* tutorial

-- easy - later
* OK timer: show month as info
* color scheme
* OK camera settings in localstorage
* timer autorun fast/slow
 */
