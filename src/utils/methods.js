// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {

    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);
    return result;
};

export function getPageNumber(array, page, limit) {
    let pageNumber;

    if (array.length === 0) pageNumber = 0;
    else if (array.length % limit === 0) pageNumber = page - 1;
    else pageNumber = page;

    return pageNumber;
}

export function getItemById(list, id) {
    return list.find(item => item.id === id);
}

export function removeItemFrom(list, id) {
    return list.filter(item => item.id !== id);
}

export function saveItemTo(list, item) {

    const index = list.findIndex((el) => el.id === item.id);

    let newList;

    if (index === -1) {
        newList = [...list, item];
    } else {
        newList = [
            ...list.slice(0, index),
            item,
            ...list.slice(index + 1)
        ];
    }

    return newList;
}

export function filteringSortingPagingOfArray(arr, {
    pagination: {
        page,
        limit
    },
    sorting: {
        field,
        direction
    },
    filters
}) {

    let result = [...arr];

    // paging
    result = result.slice(page * limit, page * limit + limit);

    // sorting
    const directionMultiplier = direction === "asc" ? 1 : -1;

    result.sort(function (a, b) {
        if (a[field] > b[field]) return directionMultiplier;
        else if (a[field] < b[field]) return -directionMultiplier;
        return 0;
    });

    // filtering
    const filterKeys = Object.keys(filters);    // ["id", "name"]

    result = result.filter(item =>
        filterKeys.every(key =>
            item[key].toLowerCase().includes(filters[key].toLowerCase())
        )
    );

    return {data: result, count: arr.length};
}
