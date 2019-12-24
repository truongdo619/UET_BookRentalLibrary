import authReq from '../../plugins/http'
import {USER} from '../../config/config_api_backend'


const getUserLendings = async (params) => {
    try {
        let res = await authReq.get(USER.LENDING, {
            params
        })
        return res ? res.data : null
    } catch (err) {
        alert(err)
        return null
    }
}

const postUserRemovelending = async (data) => {
    let response =null
    try {
        response = await authReq.post(USER.REMOVE_LENDING, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response ? response.data.message : null
    } catch (e) {
        // console.log(e.response)
        if (e.response.status === 400)
            return e.response.data.message
        else return 'Error'
    }
}
const postUserlending = async (data) => {
    try {
        let response = await authReq.post(USER.LEND, JSON.stringify(data), {
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
    getUserLendings,
    postUserlending,
    postUserRemovelending
}
