import {Form} from "react-bootstrap";

export function SimpleCheckBox(props) {
    const {title, value, setValue} = props;
    return (
        <Form.Check type="checkbox" label={title} checked={value}
                    onChange={() => setValue(!value)}/>
    );
}