import {useCallback, useMemo, useState} from "react";
import {useLocalStorage} from "./useLocalStorage";

export function useShowItemToggle(allItemsInitialValue, keyInLocalStorage) {
    const [allItems, setAllItems] = useState(allItemsInitialValue);
    const [shownItems, setShownItems] = useLocalStorage(keyInLocalStorage, []);

    // console.log("useShowItemToggle hook", keyInLocalStorage, shownItems)
    const isItemShown = useCallback(
        (itemId) => shownItems.find(id => id === itemId),
        [shownItems]);

    const toggleShowForOneItem = useCallback(
        itemId =>
            setShownItems(shownItems.find(id => id === itemId)
                ? shownItems.filter(id => id !== itemId)
                : [...shownItems, itemId]),
        [shownItems]);

    //itemIds is an array of ids
    //assumption: these itemIds are included in allItems
    //result is that all itemIds are shown - or all itemIds are not shown
    const toggleShowForSomeItems = useCallback(
        itemIds => {
            const foundOneTrue = itemIds.some(id => shownItems.includes(id));
            const newShownItems = foundOneTrue
                ? shownItems.filter(id => !itemIds.includes(id))
                : [...new Set([...shownItems, ...itemIds])];
            // console.log("toggleShowForSomeItems", itemIds, shownItems, newShownItems);
            setShownItems(newShownItems);
        },
        [shownItems]);

    const isAtLeastOneItemShown = useMemo(
        () => shownItems.some(id => allItems.includes(id))
        , [shownItems, allItems]);

    const isAtLeastOneOfTheseItemsShown = useCallback(
        (itemIds) => {
            // console.log("isAtLeastOneOfTheseItemsShown", itemIds, shownItems)
            return shownItems.some(id => itemIds.includes(id))
        }
        , [shownItems]);

    const toggleAllShownItems = useCallback(
        () => {
            setShownItems(!!shownItems.length ? [] : [...allItems])
        }, [shownItems]);

    //new items are toggled on (added to shownItems)
    //removed items are removed from shownItems
    const resetAllItems = useCallback(
        (newAllItems) => {
            const newItems = newAllItems.filter(id => !allItems.includes(id));
            const shownItemsWithNewItems = [...shownItems, ...newItems];
            const shownItemsWithoutRemovedItems = shownItemsWithNewItems.filter(id => newAllItems.includes(id));
            setAllItems([...newAllItems]);
            setShownItems(shownItemsWithoutRemovedItems);
        }, [shownItems]);


    return useMemo(() => ({
            isItemShown,
            isAtLeastOneItemShown,
            isAtLeastOneOfTheseItemsShown,
            toggleShowForOneItem,
            toggleShowForSomeItems,
            toggleAllShownItems,
            resetAllItems
        }),
        [isItemShown, isAtLeastOneItemShown, isAtLeastOneItemShown, isAtLeastOneOfTheseItemsShown, toggleShowForOneItem, toggleShowForSomeItems, toggleAllShownItems, resetAllItems]);
}