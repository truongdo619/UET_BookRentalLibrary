const BACKEND_API = process.env.VUE_APP_ROOT_API


const AUTH = {
    LOGIN: BACKEND_API + '/auth/login',
    REGISTRATION: BACKEND_API + '/auth/registration',
    LOGOUT_ACCESS: BACKEND_API + '/auth/logout/access',
    LOGOUT_REFRESH: BACKEND_API + '/auth/logout/refresh',
    REFRESH_TOKEN: BACKEND_API + '/auth/token/refresh',
    TEST_API: '/secret',
}

const BOOKS = {
    TOP: BACKEND_API + '/books/top',
    DETAIL: BACKEND_API + '/books/details'
}

const USER = {
    RATING: BACKEND_API + '/user/rate'
}

export {
    BOOKS,
    AUTH,
    USER,
    BACKEND_API
}


