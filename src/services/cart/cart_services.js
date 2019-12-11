import {getLocalStorageObject, putLocalStorageObject, removeLocalStorage} from '../../helpers/local_storage_helper'
import {CART_CONST} from '../../config/constants'

const removeAllItems = () => {
    removeLocalStorage(CART_CONST.CART_ITEMS)
}

const addNewItems = (itemsArr) => {
    let currCart = getLocalStorageObject(CART_CONST.CART_ITEMS)
    let newItems = itemsArr.map(item => ({itemId: item, num: 1}))
    if (currCart === null) {
        putLocalStorageObject(newItems)
    } else {
        newItems = newItems.filter(item =>
            currCart.findIndex(currItem => currItem.itemId === item.itemId) === -1
        )
        putLocalStorageObject(currCart.concat(newItems))
    }
}

const changeNumOfItem = (itemId, newNum) => {
    let currCart = getLocalStorageObject(CART_CONST.CART_ITEMS)
    if (currCart === null) {
        putLocalStorageObject(CART_CONST.CART_ITEMS, [{itemId, num: newNum}])
    } else {
        putLocalStorageObject(currCart.map(item => item.itemId === itemId ? {itemId, num: newNum}: item))
    }
}

const getCartItems = () =>{
    return getLocalStorageObject(CART_CONST.CART_ITEMS)
}

export {
    removeAllItems,
    addNewItems,
    changeNumOfItem,
    getCartItems
}
