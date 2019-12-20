import Vue from 'vue'
import Vuex from 'vuex'
import {isAuthenticated} from './services/auth_services'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isAuthenticated: isAuthenticated(),
        updateCommentBox: false,
        numBadge : 0,
        totalRating : 0,
        isCollapse: false,
        tagViews :  [{ title : 'admin-show', path : "/admin/show", "query" : "", fullPath : "/admin/show"}],
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
        },
        COLLAPSE_SIDE_BAR: (state) => {
            state.isCollapse = !state.isCollapse;
        },
        SET_COLLAPSED: (state) => {
            state.isCollapse = true
        },
        ADD_TAG_VIEW(state, tag){
            if (state.tagViews.some(v => v.path === tag.path)) return
            let title = tag.path;
            let index = title.lastIndexOf('/');
            title = title.substring(index+1);
            console.log(title);
            title = !isNaN(title) ? '-' + title : '';
            state.tagViews.push(
                Object.assign({}, tag, {
                    title: tag.fullPath.replace(/\//g, "-").substring(1,tag.fullPath.length) || 'no-name'
                })
            )
        },
        DEL_VISITED_VIEW: (state, view) => {
            for (const [i, v] of state.tagViews.entries()) {
                if (v.path === view.path) {
                    state.tagViews.splice(i, 1)
                    break
                }
            }
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
        },
        collapseSideBar({commit}){
            commit('COLLAPSE_SIDE_BAR')
        },
        async addView({commit}, tag) {
            commit('ADD_TAG_VIEW', tag);
        },
        async delView({commit}, tag) {
            commit('DEL_VISITED_VIEW', tag);
        },
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        updateCommentBox: state => state.updateCommentBox,
        numBadge: state => state.numBadge,
        totalRating: state => state.totalRating,
        isCollapse:state => state.isCollapse,
        tagViews: state => state.tagViews,
    }
})
