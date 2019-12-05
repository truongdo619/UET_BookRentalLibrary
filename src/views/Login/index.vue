<template>
    <div>
        <el-card class="login-form-container" style="width: 550px; margin: auto;">

            <el-form ref="form" :model="form" :rules="rules" :hide-required-asterisk="true" @keyup.enter.native="login">
                <h4>Đăng nhập</h4>
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                <el-form-item label="Username" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="login" type="primary" align="right" :disabled="isRequesting">Đăng
                        nhập
                    </el-button>
                </el-form-item>
                <el-row justify="space-between">
                    <el-button type="text">Quên mật khẩu?</el-button>
                    <el-button type="text" @click="gotoRegister">Đăng ký</el-button>
                </el-row>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import {userLogin} from '../../services/users/user_api'
    import {isAuthenticated} from '../../services/auth_services'

    export default {
        name: 'Login',
        data: () => {
            return {
                avc: 'dfas',
                form: {
                    username: '',
                    password: '',
                },
                isRequesting: false,
                rules: {
                    username: [
                        {required: true, message: 'Hãy nhập tên đăng nhập', trigger: 'change'}
                    ],
                    password: [
                        {required: true, message: 'Hãy nhập mật khẩu ', trigger: 'change'},
                        {min: 5, message: 'Mật khẩu tối thiểu 5 kí tự', trigger: 'blur'}

                    ],
                },
                errorMessage: null
            }
        },
        created() {
            if (isAuthenticated()) {
                this.$router.push({name: 'home'})
            }
        },
        methods: {
             login() {
                this.errorMessage = null
                this.$refs['form'].validate(async (valid) => {
                    if (valid) {
                        this.isRequesting = true
                        await userLogin(
                            this.form,
                            this.onError,
                            this.onSuccess
                        )
                        this.isRequesting = false

                    } else {
                        return false
                    }
                })
            },
            gotoRegister() {
                 this.$router.push({name: 'register'})
            },
            onError(message) {
                this.errorMessage = message
            },
            onSuccess() {
                this.$store.dispatch('updateIsAuthenticated')
                this.$router.push('/')
                this.$message({
                    message: 'Đăng nhập thành công',
                    type: 'success'
                })
            }
        }
    }
</script>

<style scoped>
    .login-form-container {
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 5px;
    }

    .error-message {
        margin-top: 2px;
        padding: 5px 5px 5px 10px;
        background-color: indianred;
        width: 100%;
        border-radius: 3px;
        color: white;

    }
</style>
