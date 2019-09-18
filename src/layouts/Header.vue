<template>
    <div class="header">
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown v-if="isAuth" @command="userCommand">
            <span>{{userInfo.username}}</span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="testapi">Test Secret Api</el-dropdown-item>
                <el-dropdown-item command="logout" divided>Log out</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <b-link v-else :to="{name: 'login'}">Login</b-link>
    </div>
</template>

<script>
    import {getLocalStorageObject} from '../helpers/local_storage_helper'
    import {AUTH_CONST} from '../config/constants'
    import {logout} from '../services/auth_services'

    export default {
        name: 'Header',
        methods: {
            handleLogout() {
                console.log('Logging out ....')
                logout()
                this.$store.dispatch('updateIsAuthenticated')
            },
            userCommand(type) {
                if (type === 'logout') {
                    this.handleLogout()
                } else if (type === 'testapi') {
                    this.$router.push({name: 'test_api'})
                }
            },
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
            }
        }
    }
</script>

<style scoped>
.header {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}

</style>
