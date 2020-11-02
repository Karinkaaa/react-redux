export function removeItemFrom(list, id) {
    return list.filter(itemId => itemId !== id)
}

export function saveItemTo(list, item) {

    const index = list.findIndex((el) => el.id === item.id);

    let newList = [];

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