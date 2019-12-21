const BACKEND_API = process.env.VUE_APP_ROOT_API
const SEARCH_API = process.env.VUE_APP_SEARCH_SERVER


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
    RATINGS: BACKEND_API + '/books/ratings',
    CATEGORIES: BACKEND_API + '/books/details/categories',
    RATINGSTAT: BACKEND_API + '/books/ratings/stat'
}

const WAREHOUSES = {
    GET_BY_BOOK: BACKEND_API + '/warehouses/book'
}

const USER = {
    RATING: BACKEND_API + '/user/rate',
    BORROWING: BACKEND_API + '/user/borrowings',
    RETURN_BOOK: BACKEND_API + '/user/return',
    BORROW: BACKEND_API + '/user/borrow',
    LENDING: BACKEND_API + '/user/lendings',
    LEND: BACKEND_API + '/user/lend',
    INFO: BACKEND_API + '/user/profile',
    UPDATE_INFO: BACKEND_API + '/user/profile/update',
    TRANSACTIONS:BACKEND_API + '/user/transactions',
    GETRATING: BACKEND_API + '/user/ratings'
}

const CATEGORY = {
    POPULAR: BACKEND_API + '/categories/popular',
    ALL: BACKEND_API + '/categories'
}

const SEARCH = {
    SEARCH: SEARCH_API + '/search'
}

const RECOMMEND = {
    SEARCH: SEARCH_API + '/recommend'
}

export {
    BOOKS,
    AUTH,
    CATEGORY,
    SEARCH,
    USER,
    WAREHOUSES,
    BACKEND_API,
    RECOMMEND
}


