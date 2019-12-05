<template>
    <div class="header">
        <el-row>
            <el-col :span="20" :offset="2" class="navbar">
                <div class="center-logo" @click="handleHome">
                    <span>BOOK'S</span>
                    <span>TIME</span>
                </div>
                <div class="right-menu">
                    <div v-if="isAuth" >
                        <el-button class="border_none no-focus-outline" icon="el-icon-shopping-cart-full" @click="handleCart">Cart</el-button>

                        <el-dropdown @command="userCommand">
                            <span>{{userInfo.username}}</span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="testapi">User page</el-dropdown-item>
                                <el-dropdown-item command="logout" divided>Log out</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div v-else>
                        <el-button class="border_none no-focus-outline" @click="handleLoginBtn">Login</el-button>
                        <el-button type="primary" @click="handleSignUpBtn">Sign up</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {getLocalStorageObject} from '../../../helpers/local_storage_helper'
    import {AUTH_CONST} from '../../../config/constants'
    import {logout} from '../../../services/auth_services'

    export default {
        name: "Header",
        methods: {
            userCommand(type) {
                if (type === 'logout') {
                    this.handleLogout()
                } else if (type === 'testapi') {
                    this.$router.push({name: 'user'})
                }
            },
            handleLogout() {
                console.log('Logging out ....')
                logout()
                this.$store.dispatch('updateIsAuthenticated')
            },
            handleLoginBtn() {
                this.$router.push({name: 'login'})
            },
            handleSignUpBtn() {
                this.$router.push({name: 'register'})
            },
            handleCart() {
                this.$router.push({name: 'cart'})
            },
            handleHome() {
                this.$router.push({name: 'home'})
            }
        },
        computed: {
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

<style lang="scss" scoped>
    #logo{
        float: left;
    }
    .right-menu {
        float: right;
        height: 100%;
        line-height: 50px;

        &:focus {
            outline: none;
        }

        .right-menu-item {
            display: inline-block;
            padding: 0 8px;
            height: 100%;
            font-size: 18px;
            color: #5a5e66;
            vertical-align: text-bottom;

            &.hover-effect {
                cursor: pointer;
                transition: background .3s;

                &:hover {
                    background: rgba(0, 0, 0, .025)
                }
            }
        }
    }
    .border_none{
        border:none;
    }
    .navbar{
        height: 100%;
        border-bottom: 2px solid #cfcfcf;
    }
    .center-logo {
        font-weight: bold;
        width: 50%;
        cursor: pointer;
    }

    .center-logo span {
        font-size: 30px;
    }

    .center-logo span:first-child {
        color: #f26767;
    }
</style>
