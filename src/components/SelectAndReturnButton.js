import {useNavigate} from "react-router";
import {Button} from "react-bootstrap";

export function SelectAndReturnButton(props) {
    const {title, onSelect} = props;
    const navigate = useNavigate();

    return (
        <div className="m-1 bg-white">
            <Button variant="primary"
                    size="sm"
                    className="m-1 me-2"
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