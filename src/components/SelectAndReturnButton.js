import {useNavigate} from "react-router";
import {Button} from "react-bootstrap";
import {ICON_SIZE} from "../constants/uiSizes";
import {TbDownload} from "react-icons/tb";
import {RxReload} from "react-icons/rx";
import {useState} from "react";
import {ConfirmationModal} from "./ConfirmationModal";
import {NAV_HOME} from "../constants/navigation";

export function SelectAndReturnButton(props) {
    const {title, isSelected, isDirty, onSelect, needConfirmationModal = isDirty} = props;
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const navigate = useNavigate();

    function handleConfirmation() {
        onSelect();
        navigate(NAV_HOME);
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