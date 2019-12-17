import {getLocalStorageObject, putLocalStorageObject, removeLocalStorage} from '../../helpers/local_storage_helper'
import {CART_CONST} from '../../config/constants'

const removeAllItems = () => {
    removeLocalStorage(CART_CONST.CART_ITEMS)
}

const removeAItem = (warehouse_id) => {
    let currCart = getLocalStorageObject(CART_CONST.CART_ITEMS)
    let newItems = currCart.filter(item => (item.item.warehouse_id !== warehouse_id))
    putLocalStorageObject(CART_CONST.CART_ITEMS, newItems)
}

const addNewItems = (itemsArr) => {
    let currCart = getLocalStorageObject(CART_CONST.CART_ITEMS)
    let newItems = itemsArr.map(item => ({item: item, num: 1}))
    if (currCart === null) {
        putLocalStorageObject(CART_CONST.CART_ITEMS, newItems)
    } else {
        newItems = newItems.filter(item => {
                return currCart.findIndex(currItem => currItem.item.warehouse_id === item.item.warehouse_id) === -1
            }
        )
        putLocalStorageObject(CART_CONST.CART_ITEMS, currCart.concat(newItems))
    }
}

const changeNumOfItem = (item, newNum) => {
    let currCart = getLocalStorageObject(CART_CONST.CART_ITEMS)
    if (currCart === null) {
        putLocalStorageObject(CART_CONST.CART_ITEMS, [{item, num: newNum}])
    } else {
        putLocalStorageObject(CART_CONST.CART_ITEMS, currCart.map(item => item.item.warehouse_id === item.warehouse_id ? {item, num: newNum}: item))
    }
}

const getCartItems = () =>{
    return getLocalStorageObject(CART_CONST.CART_ITEMS)
}

export {
    removeAllItems,
    addNewItems,
    changeNumOfItem,
    getCartItems,
    removeAItem
}
