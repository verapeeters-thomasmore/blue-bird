import React, {createContext, useCallback, useContext, useMemo, useState} from "react";

const MessageInfoContext = createContext();

//each message has a unique id, so that we can clear it
export function MessageInfoProvider(props) {
    const [areaInfoMessages, setAreaInfoMessages] = useState([]);

    console.log(areaInfoMessages);

    const addAreaInfoMessage = useCallback(
        area => setAreaInfoMessages(areaInfoMessages =>
            [...areaInfoMessages, {id: area.id, message: `(${area.x}, ${area.z}) ${area.plant.name}`}]),
        [])

    const clearAreaInfoMessage = useCallback(
        area => setAreaInfoMessages(areaInfoMessages =>
            areaInfoMessages.filter(m => m.id !== area.id)),
        [])

    const api = useMemo(
        () => ({
            areaInfoMessages, addAreaInfoMessage, clearAreaInfoMessage
        }),
        [areaInfoMessages, addAreaInfoMessage, clearAreaInfoMessage]);

    return <MessageInfoContext.Provider value={api}>
        {props.children}
    </MessageInfoContext.Provider>
}

export const useMessageInfoContext = () => useContext(MessageInfoContext);
