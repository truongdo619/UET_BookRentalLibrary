<template>
    <b-container>
        <b-row class="justify-content-md-center">
            <b-col cols="6">
                <el-card class="login-form-container">

                    <el-form ref="form" :model="form" :rules="rules" :hide-required-asterisk="true"
                             @keyup.enter.native="onSubmit">
                        <h4>Đăng ký tài khoản</h4>
                        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                        <el-form-item label="Họ" prop="firstname">
                            <el-input v-model="form.firstname" placeholder="Họ"></el-input>
                        </el-form-item>
                        <el-form-item label="Tên" prop="lastname">
                            <el-input v-model="form.lastname" placeholder="Tên"></el-input>
                        </el-form-item>

                        <el-form-item label="Email" prop="email">
                            <el-input v-model="form.email" placeholder="Email"></el-input>
                        </el-form-item>


                        <el-form-item label="Mật khẩu" prop="password">
                            <el-input v-model="form.password" type="password" placeholder="Mật khẩu"></el-input>
                        </el-form-item>
                        <el-form-item label="Nhập lại mật khẩu" prop="confirmPassword">
                            <el-input v-model="form.confirmPassword" type="password"
                                      placeholder="Nhập lại mật khẩu"></el-input>
                        </el-form-item>

                        <el-form-item class="el-col-24" style="text-align: center">

                            <el-button type="primary" size="medium" @click="onSubmit" :disabled="isRequesting"
                                       style="width:100%; height: 44px"
                            >Đăng ký
                            </el-button>
                        </el-form-item>
                        <el-row justify="space-between" class="el-col-24">
                            <el-button type="text" @click="gotoLogin">Đăng nhập</el-button>
<!--                            <el-button type="text" @click="gotoResendActivationCode">Gửi lại email xác nhận?</el-button>-->
                        </el-row>
                    </el-form>
                </el-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {isAuthenticated} from '../../services/auth_services'
    import {register} from '../../services/users/user_api'

    export default {
        name: "Register",
        data() {

            let validateConfirmPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Nhập lại mật khẩu'))
                } else if (value !== this.form.password) {
                    callback(new Error('Mật khẩu không khớp'))
                } else {
                    callback()
                }
            }

            return {
                form: {
                    firstname: '',
                    lastname: '',
                    username: '',
                    password: '',
                    confirmPassword: ''
                },
                isRequesting: false,
                rules: {
                    firstname: [
                        {required: true, message: 'Nhập họ đầy đủ'}
                    ],
                    lastname: [
                        {required: true, message: 'Nhập tên đầy đủ'}
                    ],
                    email: [
                        {required: true, message: 'Hãy nhập Email', trigger: 'change'}
                    ],
                    password: [
                        {required: true, message: 'Hãy nhập mật khẩu ', trigger: 'change'},
                        {min: 5, message: 'Mật khẩu tối thiểu 5 kí tự', trigger: 'blur'}

                    ],
                    confirmPassword: [
                        {required: true, message: 'Hãy nhập lại mật khẩu ', trigger: 'change'},
                        {min: 5, message: 'Mật khẩu tối thiểu 5 kí tự', trigger: 'change'},
                        {validator: validateConfirmPassword, trigger: 'change'}
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
            onSubmit() {
                this.errorMessage = null
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.isRequesting = true
                        register(this.form.firstname, this.form.lastname, this.form.email, this.form.password,
                            this.onError,
                            this.onSuccess
                        )
                        this.isRequesting = false
                    } else {
                        return false
                    }
                })

            },
            onSuccess() {
                this.$message({
                    message: 'Đăng ký thành công',
                    type: 'success'
                })

                this.$store.dispatch('updateIsAuthenticated')

                this.$router.push({name: 'home'})

            },
            onError(message) {
                this.errorMessage = message
            },
            gotoLogin() {
                this.$router.push({name: 'login'})
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
    .el-form-item {
        margin-bottom: 15px;
    }
</style>
