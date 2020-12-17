// a little function to help us with reordering the result
export const reorderItems = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);
    return result;
};

export function getAvailableCurrentPage(array, page, limit) {
    if (array.length % limit === 0 && page > 0) return page - 1;
    return page;
}

export function getItemById(list, id) {
    return list.find(item => item.id === id);
}

export function removeItemById(list, id) {
    return list.filter(item => item.id !== id);
}

export function removeItemByIndex(list, index) {
    const newList = [...list];
    newList.splice(index, 1);

    return newList;
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

    return { data: result, count: arr.length };
}

export function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event?.target?.result);
        };
        reader.onerror = (event) => {
            reader.abort();
            reject(event);
        };
        reader.readAsDataURL(file);
    });
}

export async function createFileFromUrl(url) {
    const response = await fetch(url);
    const data = await response.blob();
    const metadata = { type: data.type };
    const filename = url.replace(/\?.+/, "").split("/").pop();
    return new File([data], filename, metadata);
}