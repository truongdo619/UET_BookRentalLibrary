import {getLocalStorage, putLocalStorage, removeLocalStorage} from '../helpers/local_storage_helper'
import axios from 'axios'
import {AUTH_CONST} from '../config/constants'
import {AUTH} from '../config/config_api_backend'
import ca from 'element-ui/src/locale/lang/ca'
import authReq from '../plugins/http'

const isAuthenticated = () => {
    return getLocalStorage(AUTH_CONST.ACCESS_TOKEN) != null
}

const getAccessToken = () => {
    return getLocalStorage(AUTH_CONST.ACCESS_TOKEN)
}

const refreshToken = async () => {

    let response = await axios.post(AUTH.REFRESH_TOKEN, {
        headers: {
            Authorization: 'Bearer ' + getLocalStorage(AUTH_CONST.REFRESH_TOKEN)
        }
    })
    if (response.status === 200) {
        putLocalStorage(
            AUTH_CONST.ACCESS_TOKEN,
            response.data.access_token
        )
    }
}

const logoutAccess = async () => {
    try {
        let res = await axios.post(AUTH.LOGOUT_ACCESS, {
            headers: {
                Authorization: 'Bearer ' + getLocalStorage(AUTH_CONST.ACCESS_TOKEN)
            }
        })
        removeLocalStorage('refresh_key')
        return res.data
    } catch (e) {
        alert(e)
        return null
    }

}
const logoutRefresh = async () => {
    try {
        let res = await axios.post(AUTH.LOGOUT_REFRESH, {
            headers: {
                Authorization: 'Bearer ' + getLocalStorage(AUTH_CONST.REFRESH_TOKEN)
            }
        })
        removeLocalStorage('refresh_key')
        return res.data
    } catch (e) {
        alert(e)
        return null
    }

}

const logout = async () => {
    await logoutAccess()
    await logoutRefresh()

    location.reload()
}



const test_api = async () => {
    try {
        let res = await authReq.get(AUTH.TEST_API)
        return res.data
    } catch (e) {
        alert(e)
        return null
    }
}


export {
    isAuthenticated,
    getAccessToken,
    refreshToken,
    logout,
    test_api
}
