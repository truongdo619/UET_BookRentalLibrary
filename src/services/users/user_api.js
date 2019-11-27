import axios from 'axios'
import {AUTH, USER} from '../../config/config_api_backend'
import {updateToken} from '../auth_services'
import authReq from '../../plugins/http'

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

export {
    userLogin,
    register,
    rateBook
}
