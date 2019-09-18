<template>
    <div>
        <el-card class="login-form-container" style="width: 550px; margin: auto;">

            <el-form ref="form" :model="form" :rules="rules" :hide-required-asterisk="true">
                <h4>Đăng nhập</h4>
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                <el-form-item label="Email" prop="email">
                    <el-input v-model="form.email"></el-input>
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
                    <el-button type="text">Đăng ký</el-button>
                </el-row>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import {userLogin} from '../services/users/user_api'

    export default {
        name: 'Login',
        data: () => {
            return {
                form: {
                    email: '',
                    password: '',
                },
                isRequesting: false,
                rules: {
                    email: [
                        {required: true, message: 'Hãy nhập email đăng ký', trigger: 'change'},
                        { message: 'Hãy nhập chính xác địa chỉ email', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: 'Hãy nhập mật khẩu ', trigger: 'change'},
                        {min: 5, message: 'Mật khẩu tối thiểu 8 kí tự', trigger: 'blur'}

                    ],
                },
                errorMessage: null
            }
        },
        methods: {
            async login() {
                let response = await userLogin(this.form.email, this.form.password)
                console.log(response)
            }
        }
    }
</script>

<style scoped>

</style>
