<template>
    <div class="header-bar flex-row-center">
        <div class="menu-icon">
            <font-awesome-icon id="menu-bar" icon="stream"></font-awesome-icon>
        </div>
        <div class="center-logo" @click="handleToHomepage">
            <span>BOOK'S</span>
            <span>TIME</span>
        </div>
        <div class="right-menu">
            <div v-if="isAuthenticated">
                <el-button type="text" class="margin-right-25 no-focus-outline"
                           @click="handleCart">
                    <font-awesome-icon class="right-menu-icon" :icon="['far', 'heart']"></font-awesome-icon>
                    <span class="right-menu-title">Cart</span>
                </el-button>
                <el-dropdown @command="userCommand">
                    <span>
                    <font-awesome-icon class="right-menu-icon" :icon="['far', 'user']"></font-awesome-icon>
                    <span class="right-menu-title">User</span>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="testapi">User page</el-dropdown-item>
                        <el-dropdown-item command="settings">Settings</el-dropdown-item>
                        <el-dropdown-item command="logout" divided>Log out</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <el-button type="text" v-else class="no-focus-outline" @click="handleLogin">
                <font-awesome-icon class="right-menu-icon" :icon="['far', 'user']"></font-awesome-icon>
                <span class="right-menu-title">Sign in</span>
            </el-button>
        </div>
    </div>
</template>

<script>
    import {isAuthenticated, logout} from '../../../services/auth_services'
    import {getLocalStorageObject} from '../../../helpers/local_storage_helper'
    import {AUTH_CONST} from '../../../config/constants'

    export default {
        name: 'HeaderBar',
        methods: {
            handleToHomepage() {
                this.$router.push({name: 'home'})
            },
            handleLogin() {
                this.$router.push({name: 'login'})
            },
            handleCart() {
                this.$router.push({name: 'cart'})
            },
            userCommand(type) {
                if (type === 'logout') {
                    this.handleLogout()
                } else if (type === 'testapi') {
                    this.$router.push({name: 'user'})
                } else if (type === 'settings') {
                    this.$router.push({name: 'UserUpdate'})
                }
            },
            handleLogout() {
                console.log('Logging out ....')
                logout()
                this.$store.dispatch('updateIsAuthenticated')
            },
        },
        computed: {
            isAuthenticated() {
                return isAuthenticated()
            },
            isAuth() {
                return this.$store.getters.isAuthenticated
            },
            userInfo() {
                if (this.isAuth) {
                    return getLocalStorageObject(AUTH_CONST.USER_INFO)
                } else {
                    return {}
                }
            },
        }
    }
</script>

<style scoped>
    .header-bar {
        height: 100px;
        padding: 60px 60px 30px 60px;
        justify-content: space-between;
    }

    #menu-bar {
        font-size: 25px;
        cursor: pointer;
    }

    .center-logo {
        font-weight: bold;
        width: 50%;
        text-align: center;
        margin-left: 240px;
        cursor: pointer;
    }

    .center-logo span {
        font-size: 30px;
    }

    .center-logo span:first-child {
        color: #f26767;
    }


    .right-menu-icon, .right-menu-title {
        font-size: 16px;
        color: black;
    }

    .right-menu-icon {
        width: 40px;
    }

    .right-menu-title {
        letter-spacing: 1px;
        /*font-weight: 300;*/
    }

</style>
