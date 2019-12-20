import Vue from 'vue'
import Vuex from 'vuex'
import {isAuthenticated} from './services/auth_services'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isAuthenticated: isAuthenticated(),
        updateCommentBox: false,
        numBadge : 0,
        totalRating : 0
    },
    mutations: {
        UPDATE_IS_AUTHENTICATED(state) {
            state.isAuthenticated = isAuthenticated()
        },
        UPDATE_COMMENT_BOX(state, value){
            state.updateCommentBox = value;
        },
        UPDATE_NUM_BADGE(state){
            state.numBadge++;
        },
        RESTART_NUM_BADGE(state){
            state.numBadge = 0;
        },
        UPDATE_TOTAL_RATING(state, value){
            state.totalRating = value;
        }
    },
    actions: {
        updateIsAuthenticated({commit}) {
            commit('UPDATE_IS_AUTHENTICATED')
        },
        updateCommentBox({commit}, value) {
            commit('UPDATE_COMMENT_BOX', value);
        },
        updateNumBadge({commit}) {
            commit('UPDATE_NUM_BADGE');
        },
        restartNumBadge({commit}) {
            commit('RESTART_NUM_BADGE');
        },
        updateTotalRating({commit}, value) {
            commit('UPDATE_TOTAL_RATING', value);
        }
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        updateCommentBox: state => state.updateCommentBox,
        numBadge: state => state.numBadge,
        totalRating: state => state.totalRating
    }
})
