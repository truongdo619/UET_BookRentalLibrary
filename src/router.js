import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from './layouts/MainLayout'
import Home from './views/Home'
import Login from './views/Login'
import TestApi from './views/TestApi'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                {path: '/', name: 'home', component: Home },
                {path: '/login', name: 'login', component: Login},
                {path: '/test_api', name: 'test_api', component: TestApi}
            ]
        }
    ]
})
