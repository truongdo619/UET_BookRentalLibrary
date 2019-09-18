const BACKEND_API = process.env.VUE_APP_ROOT_API


const AUTH = {
    LOGIN: BACKEND_API + '/login',
    REGISTRATION: BACKEND_API + '/registration',
    LOGOUT_ACCESS: '/logout/access',
    LOGOUT_REFRESH: BACKEND_API + '/logout/refresh',
    REFRESH_TOKEN: BACKEND_API + '/token/refresh',
    TEST_API: '/secret',
}

export {
    AUTH,
    BACKEND_API
}


