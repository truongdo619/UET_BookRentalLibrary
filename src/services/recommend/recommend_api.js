import axios from 'axios'
import {RECOMMEND} from '../../config/config_api_backend'

const getRecommendedBook = async (params) => {
    try {
        let res = await axios.get(RECOMMEND.SEARCH, {params})
        return res.data
    } catch (err) {
        console.log(err)
        return 'error'
    }
}

export {
    getRecommendedBook
}
