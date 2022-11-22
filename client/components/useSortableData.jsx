import { useState, useMemo } from "react"

export default function useSortableData(items, config = null) {
    const [sortConfig, setSortConfig] = useState(config);
    const [itemsToSort, setItemsToSort] = useState(items);

    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            //if they are searching for imployed, convert the string to a boolean.

            sortableItems.sort((a, b) => {
                //check if the sortConfig is a string. If it is, then we are able to call toLowerCase() on it before sorting
                if (typeof a[sortConfig.key] === 'string') {
                    if (a[sortConfig.key].toLowerCase() < b[sortConfig.key].toLowerCase()) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key].toLowerCase() > b[sortConfig.key].toLowerCase()) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    //if the sortConfig is not a string, then we can't call toLowerCase() on it. So we just sort it as is
                } else {
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                }
                return 0;
            });
            console.log(`sortConfig`, JSON.stringify(sortConfig));
            if (sortConfig.params) {

                sortableItems = sortableItems.filter((item) => typeof item[sortConfig.searchKey] === 'string' ?
                    //if the sortConfig is a string, then we can call toLowerCase() on it before filtering
                    item[sortConfig.searchKey]?.toLowerCase().includes(sortConfig.params.toLowerCase()) :
                    //if the sortConfig is not a string, then we can't call toLowerCase() on it. So we just filter it as is
                    item[sortConfig.searchKey].toString()?.includes(sortConfig.params.toString())
                )
            }
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key, searchKey, params = "") => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        setSortConfig({ key, direction, searchKey, params });
    }
    return { sortedUsers: sortedItems, requestSort, sortConfig };
}