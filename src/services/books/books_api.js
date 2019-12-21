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

const getRatingDetails = async (bookId, page = 1) => {
    try {
        let res = await authReq.get(BOOKS.RATINGS, {
            params: {
                'book_id': bookId,
                'page' : page
            }
        })
        return res ? res.data : null
    } catch (err) {
        alert(err)
        return null
    }
}

const getCategories = async (bookId) => {
    try {
        let res = await authReq.get(BOOKS.CATEGORIES, {
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

const getRatingStat = async (bookId) => {
    try {
        let res = await authReq.get(BOOKS.RATINGSTAT, {
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
    getTopBooks,
    getBookDetails,
    getRatingDetails,
    getCategories,
    getRatingStat
}
