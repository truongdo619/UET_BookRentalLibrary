import authReq from '../../plugins/http'
import {CATEGORY} from '../../config/config_api_backend'

const getPopularCategories = async (params) => {
    try {
        let res = await authReq.get(CATEGORY.POPULAR, {
            params
        })
        return res ? res.data : null
    } catch (e) {
        alert(e)
        return null
    }
}

const getAllCategories = async (params) => {
    try {
        let res = await authReq.get(CATEGORY.ALL, {
            params
        })
        return res ? res.data : null
    } catch (e) {
        alert(e)
        return null
    }
}
export {
    getPopularCategories,
    getAllCategories
}
