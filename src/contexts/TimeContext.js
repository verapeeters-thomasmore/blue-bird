import React, {createContext, useContext, useMemo, useState} from 'react';

const TimeContext = createContext();

export function TimeProvider(props) {
    const [time, setTime] = useState(24);

    const api = useMemo(() => ({
        time, setTime
    }), [time, setTime]);

    return <TimeContext.Provider value={api}>
        {props.children}
    </TimeContext.Provider>
}

export const useTimeContext = () => useContext(TimeContext);
