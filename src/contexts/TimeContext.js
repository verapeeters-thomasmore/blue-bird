import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";

const TimeContext = createContext();

export function TimeProvider(props) {
    const [time, setTimeInternal] = useLocalStorage("time", 22);
    const [intervalID, setIntervalID] = useState();

    const setTime = useCallback((newTime) => {
        if (newTime < 1 || newTime > 52) return;
        setTimeInternal(newTime);
    });

    const incrementTime = useCallback(() => setTime(time => time < 52 ? time + 1 : 1), []);

    const toggleTimer = useCallback(() => {
        console.log("toggleTimer ")
        if (intervalID) { //running
            clearInterval(intervalID);
            setIntervalID();
        } else {
            setIntervalID(setInterval(() => incrementTime(), 1500));
        }
    }, [intervalID, incrementTime]);

    const isTimerRunning = useMemo(() => !!intervalID, [intervalID]);

    const api = useMemo(() => ({
        time, setTime, toggleTimer, isTimerRunning
    }), [time, setTime, toggleTimer, isTimerRunning]);

    return <TimeContext.Provider value={api}>
        {props.children}
    </TimeContext.Provider>
}

export const useTimeContext = () => useContext(TimeContext);
