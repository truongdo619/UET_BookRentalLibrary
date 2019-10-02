import axios from 'axios'
import Vue from "vue"
import {getAccessToken, logout, refreshToken} from '../services/auth_services'
import {getLocalStorage} from "../helpers/local_storage_helper"
import {AUTH_CONST} from '../config/constants'

const authReq = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
    transformRequest: [function (data, headers) {
        headers['Authorization'] = 'Bearer ' + getAccessToken()
        return data
    }],
})

authReq.interceptors.response.use(response => response,
    error => {
        let originalRequest = error.config
        if (error.response.status === 401) {
            let token = getLocalStorage(AUTH_CONST.REFRESH_TOKEN)
            if(token && token.length > 0){
                return refreshToken().then(() => {
                    return authReq(originalRequest)
                }).catch(() => {
                    logout()
                })
            } else {
                logout()
            }
        }
        return Promise.reject(error)
    }
)


Vue.prototype.$authReq = authReq

export default authReq


