import {Button, Modal} from "react-bootstrap";

function ConfirmationModalButton(props) {
    const {onClick, children} = props;
    return (
        <Button
            className="my-2 me-2"
            onClick={onClick}>
            {children}
        </Button>
    )

}

//title: a string
//messages: an array of strings
//onOk: what to do if ok is clicked
//show: do we need to show?
//handleClose:
export function ConfirmationModal(props) {
    const {title, messages, onOk, show, handleClose} = props;
    if (!show) return;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {messages.map(m => <div>{m}</div>)}
                <div>
                    <ConfirmationModalButton onClick={handleClose}>cancel</ConfirmationModalButton>
                    <ConfirmationModalButton onClick={onOk}>ok</ConfirmationModalButton>
                </div>
            </Modal.Body>
        </Modal>
    )
}