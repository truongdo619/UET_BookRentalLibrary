import axios from 'axios'
import {AUTH} from '../../config/config_api_backend'
import {updateToken} from '../auth_services'

const userLogin = async ({username, password}, errorFunc, successFunc) => {
    try {
        let response = await axios.post(AUTH.LOGIN, {
            username,
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

export {
    userLogin,
    register
}
