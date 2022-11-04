import { useState, useEffect } from "react";

function useLocalStore(itemName, initialValue) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (localStorageItem) {
                    parsedItem = JSON.parse(localStorageItem)
                } else {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = [];
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error)
            }
        }, 1000);
    });


    const saveItem = (newTodos) => {
        try {
            const stringifiedItems = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifiedItems);
            setItem(newTodos)
        } catch (error) {
            setError(error);
        }
    };
    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStore };

