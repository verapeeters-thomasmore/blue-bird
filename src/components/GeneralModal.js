import {useState} from "@types/react";
import {ShowModalButton} from "./ShowModalButton";
import {Modal} from "react-bootstrap";

export function GeneralModal(props) {
    const {icon, title, children} = props;
    const [show, setShow] = useState(false);

    return (
        <>
            <ShowModalButton onShowModal={() => setShow(true)}>
                {icon}
            </ShowModalButton>
            <Modal show={show}
                   onHide={() => setShow(show => !show)}>
                <Modal.Header closeButton>
                    <h3 className="ms-2">{title}</h3>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    )
}