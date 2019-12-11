import authReq from '../../plugins/http'
import {BOOKS} from "../../config/config_api_backend";


const getUserBorrowings = async (bookId) => {
    try {
        let res = await authReq.get(BOOKS.RATINGS, {
            params: {
                'book_id': bookId
            }
        })
        return res ? res.data : null
    } catch (err) {
        alert(err)
        return null
    }
}

const postUserReturn = async (bookId) => {
    try {
        let res = await authReq.get(BOOKS.RATINGS, {
            params: {
                'book_id': bookId
            }
        })
        return res ? res.data : null
    } catch (err) {
        alert(err)
        return null
    }
}

export {
    getUserBorrowings,
    postUserReturn
}