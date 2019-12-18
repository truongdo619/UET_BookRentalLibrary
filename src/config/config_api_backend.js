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
    DETAIL: BACKEND_API + '/books/details',
    RATINGS: BACKEND_API + '/books/ratings'
}

const WAREHOUSES = {
    GET_BY_BOOK: BACKEND_API + '/warehouses/book'
}

const USER = {
    RATING: BACKEND_API + '/user/rate',
    BORROWING: BACKEND_API + '/user/borrowings',
    RETURN_BOOK: BACKEND_API + '/user/return',
    LENDING: BACKEND_API + '/user/lendings',
    LEND: BACKEND_API + '/user/lend'
}

const CATEGORY = {
    POPULAR: BACKEND_API + '/categories/popular',
    ALL: BACKEND_API + '/categories'
}

export {
    BOOKS,
    AUTH,
    CATEGORY,
    USER,
    WAREHOUSES,
    BACKEND_API
}


