import {useNavigate} from "react-router";
import {Button, Modal} from "react-bootstrap";
import {ICON_SIZE} from "../constants/uiSizes";
import {TbDownload} from "react-icons/tb";
import {RxReload} from "react-icons/rx";
import {useState} from "react";

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

export function SelectAndReturnButton(props) {
    const {title, isSelected, isDirty, onSelect, needConfirmationModal = isDirty} = props;
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const navigate = useNavigate();

    function handleConfirmation() {
        onSelect();
        navigate("/");
    }

    return (
        <div className={`my-2 rounded-1 ${isSelected ? "bg-info border border-1" : "bg-white"}`}>
            <Button variant={`primary`}
                    size="sm"
                    className={`m-1 me-2 `}
                    onClick={() => {
                        if (needConfirmationModal) setShowConfirmationModal(true)
                        else handleConfirmation();

                    }}>
                {isDirty && isSelected
                    ? <RxReload size={ICON_SIZE}/>
                    : <TbDownload size={ICON_SIZE}/>
                }
            </Button>
            {title}
            {isDirty && isSelected && " (modified)"}
            <ConfirmationModal show={showConfirmationModal}
                               title={`load predefined garden`}
                               messages={[`Load garden "${title}"?`, `You will loose your changes!`]}
                               handleClose={() => setShowConfirmationModal(false)}
                               onOk={handleConfirmation}
            />
        </div>
    );
}