import { ASCENDING_SORT } from "./constants";

export const reorderItems = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);
    return result;
};

export function getAvailableCurrentPage(arrayLength, page, limit) {
    if (arrayLength % limit === 0 && page > 0) return page - 1;
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

export function isExistCondition(list, condition) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].x === condition.x && list[i].y === condition.y)
            return true;
    }
    return false;
}

export function getIndexOfCondition(list, condition) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].x === condition.x && list[i].y === condition.y)
            return i;
    }
    return -1;
}

export function saveObjectItemTo(list, item) {
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

export function saveItemTo(list, item, index) {
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

    // sorting
    const directionMultiplier = direction === ASCENDING_SORT ? 1 : -1;

    result.sort(function (a, b) {
        if (a[field] > b[field]) return directionMultiplier;
        else if (a[field] < b[field]) return -directionMultiplier;
        return 0;
    });

    // filtering
    const filterKeys = Object.keys(filters);    // ["id", "name"]

    result = result.filter(item =>
        filterKeys.every(key =>
            String(item[key]).toLowerCase().includes(filters[key].toLowerCase())
        )
    );

    // paging
    result = result.slice(page * limit, page * limit + limit);

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

const cors_api_url = "https://murmuring-retreat-06793.herokuapp.com/";

function doCORSRequest(url, onload) {
    const x = new XMLHttpRequest();
    x.responseType = "blob";
    x.open("GET", cors_api_url + url);
    x.onload = x.onerror = function () {
        onload(x);
    };

    x.setRequestHeader("X-Requested-With", "*");
    x.setRequestHeader("Access-Control-Allow-Origin", "*");
    x.send();
}

export async function createFileFromUrl(url) {
    // return new Promise((resolve) => {
    //     if (url.includes("data:")) return;
    //
    //         doCORSRequest(url, (x) => {
    //         const filename = url.replace(/\?.+/, "").split("/").pop();
    //         const metadata = { type: "jpeg" };
    //             console.log(x.response);
    //             resolve(new File([x.response], filename, metadata))
    //     })
    // });

    const response = await fetch(cors_api_url + url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "X-Requested-With": "XMLHttpRequest"
        }
    });
    const data = await response.blob();
    const metadata = { type: data.type };
    const filename = url.replace(/\?.+/, "").split("/").pop();
    return new File([data], filename, metadata);
}