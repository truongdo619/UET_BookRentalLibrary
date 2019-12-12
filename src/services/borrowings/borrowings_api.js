import authReq from '../../plugins/http'
import {USER} from '../../config/config_api_backend'


const getUserBorrowings = async (params) => {
    try {
        let res = await authReq.get(USER.BORROWING, {
            params
        })
        return res ? res.data : null
    } catch (err) {
        alert(err)
        return null
    }
}

const postUserReturn = async (borrow_id, address) => {
    let data = {
        borrow_id,
        address
    }
    try {
        let response = await authReq.post(USER.RETURN_BOOK, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response ? response.data : null
    } catch (e) {
        alert(e)
        return null
    }
}

export {
    getUserBorrowings,
    postUserReturn
}
