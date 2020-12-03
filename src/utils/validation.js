export function isValidName(name) {
    const pattern = /^[A-Za-z]+[\s]?[A-Za-z]+[\s]?[A-Za-z]+[\s]?[A-Za-z]+[\s]?[A-Za-z]$/;
    return pattern.test(name) && name.length > 1;
}

export function isValidImageUrl(url) {
    const patternBase64 = /^data:image\/jpeg;base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;
    const patternURL = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/;
    return patternBase64.test(url) || patternURL.test(url);
}

export function isValidJsonUrl(url) {
    const patternJson = /\b((http|https):\/\/?)[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?).json)/;
    return patternJson.test(url);
}
