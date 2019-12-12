import authReq from '../../plugins/http'
import {WAREHOUSES} from '../../config/config_api_backend'

const getByBook = async (bookId) => {
    try {
        let res = await authReq.get(WAREHOUSES.GET_BY_BOOK, {
            params: {
                'book_id': bookId
            }
        })
        return res ? res.data : null
    } catch (e) {
        alert(e)
        return null
    }
}

export {
    getByBook
}

