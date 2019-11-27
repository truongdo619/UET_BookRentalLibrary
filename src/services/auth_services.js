import {
    getLocalStorage,
    putLocalStorage,
    putLocalStorageObject,
    removeLocalStorage
} from '../helpers/local_storage_helper'
import axios from 'axios'
import {AUTH_CONST} from '../config/constants'
import {AUTH} from '../config/config_api_backend'
import authReq from '../plugins/http'

const isAuthenticated = () => {
    return getLocalStorage(AUTH_CONST.ACCESS_TOKEN) != null
}

const getAccessToken = () => {
    return getLocalStorage(AUTH_CONST.ACCESS_TOKEN)
}

const updateToken = (username, access, refresh) => {
    putLocalStorage(
        AUTH_CONST.ACCESS_TOKEN,
        access
    )
    putLocalStorage(
        AUTH_CONST.REFRESH_TOKEN,
        refresh
    )

    putLocalStorageObject(
        AUTH_CONST.USER_INFO,
        {
            username: username
        }
    )
}

const refreshToken = async () => {

    let response = await axios.post(AUTH.REFRESH_TOKEN, {}, {
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
        let res = await axios.post(AUTH.LOGOUT_ACCESS, {}, {
            headers: {
                Authorization: 'Bearer ' + getLocalStorage(AUTH_CONST.ACCESS_TOKEN)
            }
        })

        return res.data
    } catch (e) {
        alert(e)
        return null
    }

}
const logoutRefresh = async () => {
    try {
        let res = await axios.post(AUTH.LOGOUT_REFRESH, {},{
            headers: {
                Authorization: 'Bearer ' + getLocalStorage(AUTH_CONST.REFRESH_TOKEN)
            }
        })

        return res.data
    } catch (e) {
        alert(e)
        return null
    }

}

const logout = async () => {
    await logoutAccess()
    await logoutRefresh()
    removeLocalStorage(AUTH_CONST.REFRESH_TOKEN)
    removeLocalStorage(AUTH_CONST.ACCESS_TOKEN)
    removeLocalStorage(AUTH_CONST.USER_INFO)
    // location.reload()
    window.location.href = '/u/login'
}



const test_api = async () => {
    try {
        let res = await authReq.get(AUTH.TEST_API)
        return res ? res.data : null
    } catch (e) {
        alert(e)
        return null
    }
}


export {
    isAuthenticated,
    getAccessToken,
    refreshToken,
    updateToken,
    logout,
    test_api
}
