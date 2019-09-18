import axios from 'axios'
import {putLocalStorage, putLocalStorageObject} from '../../helpers/local_storage_helper'
import {AUTH_CONST} from '../../config/constants'
import {AUTH} from '../../config/config_api_backend'

const userLogin = async ({username, password}, errorFunc, successFunc) => {
    try {
        let response = await axios.post(AUTH.LOGIN, {
            username,
            password
        })

        if (response.status === 200 && response.data.message === 'Logged in') {

            putLocalStorage(
                AUTH_CONST.ACCESS_TOKEN,
                response.data.access_token
            )
            putLocalStorage(
                AUTH_CONST.REFRESH_TOKEN,
                response.data.refresh_token
            )

            putLocalStorageObject(
                AUTH_CONST.USER_INFO,
                {
                    username: username
                }
            )

            successFunc()

        } else {
            errorFunc(response.data.message)
        }
    } catch (e) {
        alert(e)
    }
}

const register = async (fullname, username, password, errorFunc, successFunc) => {
    try {
        let response = await axios.post(AUTH.REGISTRATION, {
            fullname,
            username,
            password
        })

        if (response.status === 200 && response.data.message === 'User was created') {

            putLocalStorage(
                AUTH_CONST.ACCESS_TOKEN,
                response.data.access_token
            )
            putLocalStorage(
                AUTH_CONST.REFRESH_TOKEN,
                response.data.refresh_token
            )

            putLocalStorageObject(
                AUTH_CONST.USER_INFO,
                {
                    username: username
                }
            )

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
