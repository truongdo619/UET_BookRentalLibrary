import axios from 'axios'
import {SEARCH} from '../../config/config_api_backend'

const sendSearch = async (params) => {
    try {
        let res = await axios.get(SEARCH.SEARCH, {params})
        return res.data
    } catch (err) {
        console.log(err)
        return 'error'
    }
}

export {
    sendSearch
}