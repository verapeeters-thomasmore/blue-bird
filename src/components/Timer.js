import {Button, Form} from "react-bootstrap";
import {useTimeContext} from "../contexts/TimeContext";
import {FaPlay, FaPause} from 'react-icons/fa';
import {UI_WHITE} from "../constants/uiColors";
import RangeSlider from 'react-bootstrap-range-slider';
import moment from "moment";

export function Timer() {
    const {time, setTime, toggleTimer, isTimerRunning} = useTimeContext();
    const week = moment(time, "ww");
    const month = week.format("MMM");
    return (
        <>
            <Form className="border m-0 p-0"
                  style={{backgroundColor: UI_WHITE}}>
                <div className="d-flex ms-2">
                    <Button variant="outline-primary"
                            className="my-0 mx-1 p-0 border-0"
                            onClick={toggleTimer}>
                        {isTimerRunning ? <FaPause size={25}/> : <FaPlay size={25}/>}
                    </Button>
                    <div className="my-0 mx-1 p-0 flex-grow-1">
                        <RangeSlider
                            size="sm"
                            tooltipLabel={currentValue => `${currentValue} (${month})`}
                            value={time}
                            min={1} max={52} step={1}
                            onChange={e => setTime(e.target.value)}
                        />
                    </div>
                    <div>
                        <Form.Control type="number"
                                      size="sm"
                                      className="m-0 mt-1 pe-0"
                                      style={{width: "45px"}}
                                      value={time}
                                      onChange={e => setTime(e.target.value)}
                        />
                    </div>
                </div>
            </Form>
        </>
    )
}


