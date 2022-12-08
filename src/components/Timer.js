import {Form} from "react-bootstrap";
import {useTimeContext} from "../contexts/TimeContext";

export function Timer() {
    const {time, setTime} = useTimeContext();
    return (
        <>
            <div className="m-1 p-1 bg-primary">
                <Form>
                    <Form.Control type="number" label="month" value={time}
                                  onChange={e => setTime(e.target.value)}/>
                </Form>
            </div>
        </>
    )
}