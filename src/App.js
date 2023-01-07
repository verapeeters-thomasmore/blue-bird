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
import {GardenAreaListPageBis} from "./pages/GardenAreaListPageBIS";

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
                <Route path="/gardenarealist" element={<GardenAreaListPage allPlants={PLANT_DATA}/>}/>
                <Route path="/gardenarealist2" element={<GardenAreaListPageBis allPlants={PLANT_DATA}/>}/>
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
-- issues
TODO issue -- select new garden --> controls to show areas/plants are broken
TODO issue -- logo
OK issue -- proptypes voor area en plant
TODO issue -- alle afmetingen *100?
TODO issue -- gardenarealist - meerdere cards/row is niet ok want cards zijn niet even hoog - zie https://www.npmjs.com/package/react-masonry-css
TODO issue -- gardenarealist - buttons and text not on same line
TODO issue -- gardenselectionpage: which garden is selected? - is it edited?

--- bigger stories
TODO bigger stories -- plant topview
TODO bigger stories -- catalog always show areas? -- catalog is simply special kind of garden (limited - no edits)
TODO bigger stories -- database / storage
TODO bigger stories -- tutorial

-- easy - later
TODO easy - later -- waaien
TODO easy - later -- time runner: random zoom
TODO easy - later -- color scheme
TODO easy - later -- timer autorun fast/slow
 */
