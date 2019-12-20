import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from './layouts/MainLayout'
import Home from './views/Home/index'
import Login from './views/Login/index'
import TestApi from './views/TestApi/index'
import Register from './views/Register/index'

Vue.use(Router)

const router = new Router({
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
            component : () => import('./views/BookDetail/index')
        },
        {path: '/', name: 'home', component: Home},
        {
            path : '/user',
            component : () => import('./views/UserPage/index'),
            name : 'user',
            redirect : '/user/show',
            children: [
                {
                    path: 'show',
                    component: () => import('./components/user/show/index'),
                    name: 'UserShow'
                },
                {
                    path: 'update',
                    component: () => import('./components/user/update/index'),
                    name: 'UserUpdate'
                }
            ]
        },
        {
            path : '/rental',
            component : () => import('./views/RentalPage/index'),
            name : 'Rental',
            redirect : '/rental/show',
            children: [
                {
                    path: 'show',
                    component: () => import('./components/rental/show/index'),
                    name: 'RentalShow'
                }
            ]
        },
        {
            path : '/cart',
            component : MainLayout,
            children: [
                {
                    path: '/',
                    component: () => import('./views/Cart/index'),
                    name: 'cart'
                }
            ]
        },
        {
            path: '/borrowing',
            component: MainLayout,
            name: 'borrowing',
            redirect: '/borrowing/show',
            children: [
                {
                    path: 'show',
                    component: () => import('./components/borrowings/show/index'),
                    name: 'borrowingComponent'
                }
            ]
        },
        {
            path: '/lending',
            component: MainLayout,
            name: 'lending',
            redirect: '/lending/show',
            children: [
                {
                    path: 'show',
                    component: () => import('./components/lendings/show/index'),
                    name: 'lendingComponent'
                }
            ]
        },
        {
            path: '/search',
            component: MainLayout,
            children: [
                {
                    path: '/',
                    name: 'search',
                    component: () => import('./views/SearchResult/index'),
                }
            ]
        },
        {
            path: '/admin',
            component: () => import('./components/admin/Components/layout/index'),
            redirect:'/admin/show',

            children: [
                {
                    path: 'show',
                    component: () => import('./views/admin/index'),
                    name: 'AdminIndex'
                },
                {
                    path: 'confirm',
                    component: () => import('./views/admin/confirm'),
                    name: 'confirm'
                }
            ]
        },
        { path: "*", component : () => import('./views/ErrorPage/404')  }
    ]
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next()
})

export default router
