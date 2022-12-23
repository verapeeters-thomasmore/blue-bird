import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const TimeContext = createContext();

export function TimeProvider(props) {
    const [time, setTimeInternal] = useState(24);
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


    const api = useMemo(() => ({
        time, setTime, toggleTimer
    }), [time, setTime, toggleTimer]);

    return <TimeContext.Provider value={api}>
        {props.children}
    </TimeContext.Provider>
}

export const useTimeContext = () => useContext(TimeContext);
