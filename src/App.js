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
import {EditPage} from "./pages/EditPage";
import {MessageInfoProvider} from "./contexts/MessageInfoContext";
import {AddPlantPage} from "./pages/AddPlantPage";
import {PLANT_DATA} from "./data/plant.data";

function ProvidedApp() {
    return (
        <div className="d-flex flex-column h-100">
            <GardenNavbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/controls" element={<ControlsPage/>}/>
                <Route path="/edit" element={<EditPage/>}/>
                <Route path="/addPlant" element={<AddPlantPage allPlants={PLANT_DATA}/>}/>
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
        <MessageInfoProvider>
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
        </MessageInfoProvider>
    )

}


/*
TODO
-- issues
* select new garden --> controls to show areas/plants are broken
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
* waaien
* time runner: random zoom
* color scheme
* timer autorun fast/slow

 */
