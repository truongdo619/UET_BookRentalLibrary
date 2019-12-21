import axios from 'axios'
import {AUTH, USER} from '../../config/config_api_backend'
import {updateToken} from '../auth_services'
import authReq from '../../plugins/http'
import ca from 'element-ui/src/locale/lang/ca'

const userLogin = async ({username, password}, errorFunc, successFunc) => {
    try {
        let response = await axios.post(AUTH.LOGIN, {
            email: username,
            password
        })

        if (response.status === 200 && response.data.message.toLowerCase() === 'success') {

            updateToken(username, response.data.access_token, response.data.refresh_token)

            successFunc()

        } else {
            errorFunc(response.data.message)
        }
    } catch (e) {
        alert(e)
    }
}

const register = async (firstname, lastname, email, password, errorFunc, successFunc) => {
    try {
        let response = await axios.post(AUTH.REGISTRATION, {
            firstname,
            lastname,
            email,
            password
        })

        if (response.status === 200 && response.data.message.toLowerCase() === 'success') {

            updateToken(email, response.data.access_token, response.data.refresh_token)

            successFunc()

        } else {
            errorFunc(response.data.message)
        }
    } catch (e) {
        alert(e)
    }
}

const rateBook = async (book_id, rating_num, comment) => {
    let data = {
        book_id,
        rating_num
    }
    if (comment) {
        data['rating_comment'] = comment
    }

    try {
        let response = await authReq.post(USER.RATING, JSON.stringify(data), {
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

 const getUserInfo = async () => {
     try {
         let res = await authReq.get(USER.INFO)
         return res ? res.data : null
     } catch (err) {
         alert(err)
         return null
     }
 }

const updateUserInfo = async (data) => {
    let response = null
    try {
        response = await authReq.post(USER.UPDATE_INFO, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response ? response.data : null
    } catch (e) {
        console.log(response)
        return "Wrong password"
    }
}

const borrowBooks = async (data) => {
    let response = null
    try {
        response = await authReq.post(USER.BORROW, JSON.stringify(data),{
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response ? response.data : null
    } catch (e) {
        console.log(response)
        return 'Error'

    }
}

const getBorrowingBooks = async (data) => {
    let response = null
    try {
        console.log(data)
        response = await authReq.get(USER.TRANSACTIONS, {params : data})
        console.log(response)
        return response ? response.data : null
    } catch (e) {
        console.log(response)
        return 'Error'

    }
}

export {
    userLogin,
    register,
    rateBook,
    getUserInfo,
    updateUserInfo,
    borrowBooks,
    getBorrowingBooks
}
