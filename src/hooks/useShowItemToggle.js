import {useCallback, useMemo} from "react";
import {useLocalStorage} from "./useLocalStorage";

export function useShowItemToggle(allItems, keyInLocalStorage) {
    const [shownItems, setShownItems] = useLocalStorage(keyInLocalStorage, []);

    console.log("useShowItemToggle hook", keyInLocalStorage, shownItems)
    const isItemShown = useCallback(
        (itemId) => shownItems.find(id => id === itemId),
        [shownItems]);

    const toggleShowForOneItem = useCallback(
        itemId =>
            setShownItems(shownItems.find(id => id === itemId)
                ? shownItems.filter(id => id !== itemId)
                : [...shownItems, itemId]),
        [shownItems]);

    //result is that all itemIds are shown - or all itemIds are not shown
    const toggleShowForSomeItems = useCallback(
        itemIds => {
            const foundOneTrue = itemIds.some(id => shownItems.includes(id));
            const newShownItems = foundOneTrue
                ? shownItems.filter(id => !itemIds.includes(id))
                : [...new Set([...shownItems, ...itemIds])];
            setShownItems(newShownItems);
        },
        [shownItems]);

    //TODO moet useMemo zijn
    const isAtLeastOneItemShown = useCallback(
        () => !!shownItems.length
        , [shownItems]);

    const toggleAllShownItems = useCallback(
        () => {
            setShownItems(!!shownItems.length ? [] : [...allItems])
        }, [shownItems]);

    return useMemo(() => ({
            isItemShown,
            isAtLeastOneItemShown,
            toggleShowForOneItem,
            toggleShowForSomeItems,
            toggleAllShownItems,
        }),
        [isItemShown, isAtLeastOneItemShown, toggleShowForOneItem, toggleShowForSomeItems, toggleAllShownItems]);
}