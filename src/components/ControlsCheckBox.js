import {useControlsContext} from "../contexts/ControlsContext";
import {Form} from "react-bootstrap";

export function ControlsCheckBox(props) {
    const {title, controlKey} = props;
    const {getControlValue, toggleControlValue} = useControlsContext();

    return (
        <Form.Check type="checkbox"
                    label={title}
                    checked={getControlValue(controlKey)}
                    onChange={() => toggleControlValue(controlKey)}/>
    );
}

export function ControlsCheckBoxSpecialAction(props) {
    const {title, isChecked, onChange} = props;

    return (
        <Form.Check type="checkbox"
                    label={title}
                    checked={!!isChecked}
                    onChange={onChange}/>
    );
}