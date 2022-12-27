import {useCallback, useMemo, useState} from "react";

export function useShowItemToggle(allItems) {
    const [shownItems, setShownItems] = useState([])

    const isItemShown = useCallback(
        (itemId) => shownItems.find(id => id === itemId),
        [shownItems]);

    const toggleShowForOneItem = useCallback(
        itemId =>
            setShownItems(shownItems.find(id => id === itemId)
                ? shownItems.filter(id => id !== itemId)
                : [...shownItems, itemId]),
        [shownItems]);

    const isAtLeastOneItemShown = useCallback(
        () => !!shownItems.length
        , [shownItems]);

    const toggleAllShownItems = useCallback(
        () => {
            setShownItems(!!shownItems.length ? [] : [...allItems])
        }, [shownItems]);

    return useMemo(() => ({
            isItemShown,
            toggleShowForOneItem,
            isAtLeastOneItemShown,
            toggleAllShownItems,
        }),
        [isItemShown, toggleShowForOneItem, isAtLeastOneItemShown, toggleAllShownItems]);
}