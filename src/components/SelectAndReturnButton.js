import {useNavigate} from "react-router";
import {Button} from "react-bootstrap";

export function SelectAndReturnButton(props) {
    const {title, onSelect, isSelected} = props;
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
                select
            </Button>
            {title}
        </div>
    );
}