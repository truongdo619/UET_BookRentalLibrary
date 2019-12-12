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

export {
    getUserLendings
}
