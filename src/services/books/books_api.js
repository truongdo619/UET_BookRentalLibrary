import authReq from '../../plugins/http'
import {BOOKS} from '../../config/config_api_backend'

const getTopBooks = async () => {
    try {
        let res = await authReq.get(BOOKS.TOP)
        return res ? res.data : null
    } catch (e) {
        alert(e)
        return null
    }
}

const getBookDetails = async (bookId) => {
    try {
        let res = await authReq.get(BOOKS.DETAIL, {
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
    getTopBooks,
    getBookDetails
}
