//code originally from https://usehooks.com/useLocalStorage/
// but it contained a bug when using setValue with a function - so not much remains of original code

import {useCallback, useEffect, useState} from "react";


export function useLocalStorage(key, initialValue) {

    const readFromLocalStorage = useCallback(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    }, [initialValue, key]);

    const [value, setValue] = useState(readFromLocalStorage);

    useEffect(() => {
        // Save to local storage
        console.log(`save value ${key}: `, value)
        if (typeof window !== "undefined" && typeof value !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }, [value]);

    useEffect(() => {
        //console.log("useEffect");
        const listener = e => (e.key === key) && setValue(readFromLocalStorage());
        window.addEventListener('storage', listener);
        return () => window.removeEventListener('storage', listener);
    }, [key, readFromLocalStorage]);

    return [value, setValue];
}

