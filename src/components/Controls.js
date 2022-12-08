import {useState} from "react";
import {Form} from "react-bootstrap";
import {SimpleCheckBox} from "./SimpleCheckBox";
import {ControlsCheckBox} from "./ControlsCheckBox";
import {
    SHOW_AREA_PLANES,
    SHOW_AXES,
    SHOW_CATALOG,
    SHOW_FLOOR,
    SHOW_GARDEN,
    SHOW_WORLD
} from "../contexts/ControlsContext";

export function Controls() {
    const [showControls, setShowControls] = useState(false);

    return (
        <>
            <div className="m-1 p-1 bg-primary">
                <Form>
                    <SimpleCheckBox title="controls" value={showControls} setValue={setShowControls}/>
                </Form>
            </div>
            {showControls &&
                <div className="m-1 p-1 bg-primary">
                    <Form>
                        <ControlsCheckBox title="axes" controlKey={SHOW_AXES}/>
                        <ControlsCheckBox title="world" controlKey={SHOW_WORLD}/>
                        <ControlsCheckBox title="floor" controlKey={SHOW_FLOOR}/>
                        <ControlsCheckBox title="catalog" controlKey={SHOW_CATALOG}/>
                        <ControlsCheckBox title="garden" controlKey={SHOW_GARDEN}/>
                        <ControlsCheckBox title="areas" controlKey={SHOW_AREA_PLANES}/>
                    </Form>
                </div>
            }
        </>
    )
}