import axios from 'axios'
import {putLocalStorage} from '../../helpers/local_storage_helper'
import {AUTH_CONST} from '../../config/constants'
import {AUTH} from '../../config/config_api_backend'

export const userLogin = async (username, password) => {
    try {
        let response = await axios.post(AUTH.LOGIN, {
            username,
            password
        })

        putLocalStorage(
            AUTH_CONST.ACCESS_TOKEN,
            response.data.access_token
        )
        putLocalStorage(
            AUTH_CONST.REFRESH_TOKEN,
            response.data.refresh_token
        )
    } catch (e) {
        alert(e)
    }
}
