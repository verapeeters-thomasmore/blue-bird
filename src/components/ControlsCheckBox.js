import {useControlsContext} from "../contexts/ControlsContext";
import {Form} from "react-bootstrap";

export function ControlsCheckBox(props) {
    const {title, controlKey} = props;
    const {controlValue, toggleControl} = useControlsContext();

    return (
        <Form.Check type="checkbox"
                    label={title}
                    checked={controlValue(controlKey)}
                    onChange={() => toggleControl(controlKey)}/>
    );
}