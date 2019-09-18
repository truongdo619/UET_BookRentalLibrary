const putLocalStorageObject = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const getLocalStorageObject = (key, defaultValue=null) => {
    let value = localStorage.getItem(key)
    return value != null ? JSON.parse(value) : defaultValue
}

const putLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

const getLocalStorage = (key) => {
    return localStorage.getItem(key)
}

const removeLocalStorage = (key) => {
    return localStorage.removeItem(key)
}

export {putLocalStorageObject, getLocalStorageObject, putLocalStorage, getLocalStorage, removeLocalStorage}
