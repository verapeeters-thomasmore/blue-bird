//code originally from https://usehooks.com/useLocalStorage/
// but it contained a bug when using setValue with a function - so not much remains of original code

import {useEffect, useState} from "react";

export function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });

    useEffect(() => {
        // Save to local storage
        if (typeof window !== "undefined" && typeof storedValue !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        }
    }, [storedValue]);

    return [storedValue, setStoredValue];
}