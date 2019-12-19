import Vue from 'vue'
import Vuex from 'vuex'
import {isAuthenticated} from './services/auth_services'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isAuthenticated: isAuthenticated(),
        updateCommentBox: false
    },
    mutations: {
        UPDATE_IS_AUTHENTICATED(state) {
            state.isAuthenticated = isAuthenticated()
        },
        UPDATE_COMMENT_BOX(state, value){
            state.updateCommentBox = value;
        }
    },
    actions: {
        updateIsAuthenticated({commit}) {
            commit('UPDATE_IS_AUTHENTICATED')
        },
        updateCommentBox({commit}, value) {
            commit('UPDATE_COMMENT_BOX', value);
        }
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        updateCommentBox: state => state.updateCommentBox
    }
})
