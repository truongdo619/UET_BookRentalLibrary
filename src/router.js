import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from './layouts/MainLayout'
import Home from './views/Home'
import Login from './views/Login'
import TestApi from './views/TestApi'
import Register from './views/Register'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/u',
            component: MainLayout,
            children: [
                {path: 'login', name: 'login', component: Login},
                {path: 'register', name: 'register', component: Register},
                {path: 'test_api', name: 'test_api', component: TestApi}
            ]
        },
        {
            path: '/book/:id',
            name: 'book_detail',
            component : () => import('./views/BookDetail')
        },
        {path: '/', name: 'home', component: Home}
    ]
})
