import {Button} from "react-bootstrap";

export function ShowModalButton(props) {
    const {onShowModal, children} = props;
    return (
        <Button variant="outline-primary"
                className="m-2 border-0"
                onClick={onShowModal}>
            {children}
        </Button>
    )
}