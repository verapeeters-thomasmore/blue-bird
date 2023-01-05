import {useNavigate} from "react-router";
import {Button} from "react-bootstrap";
import {ICON_SIZE} from "../constants/uiSizes";
import {TbDownload} from "react-icons/tb";
import {RxReload} from "react-icons/rx";

export function SelectAndReturnButton(props) {
    const {title, isSelected, isDirty, onSelect} = props;
    const navigate = useNavigate();

    return (
        <div className={`my-2 rounded-1 ${isSelected ? "bg-info border border-1" : "bg-white"}`}>
            <Button variant={`primary`}
                    size="sm"
                    className={`m-1 me-2 `}
                    onClick={() => {
                        onSelect();
                        navigate("/");
                    }}>
                {isDirty && isSelected
                    ? <RxReload size={ICON_SIZE}/>
                    : <TbDownload size={ICON_SIZE}/>
                }
            </Button>
            {title}
            {isDirty && isSelected && " (modified)"}
        </div>
    );
}