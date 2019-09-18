import Vue from 'vue'
import Vuex from 'vuex'
import {isAuthenticated} from './services/auth_services'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isAuthenticated: isAuthenticated()
    },
    mutations: {
        UPDATE_IS_AUTHENTICATED(state) {
            state.isAuthenticated = isAuthenticated()
        }
    },
    actions: {
        updateIsAuthenticated({commit}) {
            commit('UPDATE_IS_AUTHENTICATED')
        }
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated
    }
})
