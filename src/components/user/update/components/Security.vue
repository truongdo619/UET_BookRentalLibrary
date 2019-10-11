<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"><i class="fas fa-unlock-alt" style="margin-right: 10px"></i> Đổi mật khẩu</h3>
            </div>
            <div class="card-body">
                <el-form ref="form" :model="form" :rules="rules" :hide-required-asterisk="true" label-width="200px" @keyup.enter.native="onSubmit">

                    <el-form-item label="Mật khẩu hiện tại: " prop="oldPassword">
                        <el-input v-model="form.oldPassword" type="password" placeholder="Mật khẩu hiện tại"></el-input>
                    </el-form-item>

                    <el-form-item label="Mật khẩu mới: " prop="password">
                        <el-input v-model="form.password" type="password" placeholder="Mật khẩu mới"></el-input>
                    </el-form-item>
                    <el-form-item label="Nhập lại mật khẩu mới: " prop="confirmPassword">
                        <el-input v-model="form.confirmPassword" type="password"
                                  placeholder="Nhập lại mật khẩu mới"></el-input>
                    </el-form-item>

                    <div style="text-align: center; ">
                        <el-button type="primary" size="medium" @click="onSubmit" :disabled="isRequesting"
                                   style="height: 44px; margin-left: 40px"
                        >Xác nhận
                        </el-button>
                    </div>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Security',
    data: function() {
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
                oldPassword: '',
                password: '',
                confirmPassword: ''
            },
            isRequesting: false,
            rules: {
                oldPassword: [
                    {
                        required: true,
                        message: 'Hãy nhập mật khẩu hiện tại'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: 'Hãy nhập mật khẩu mới',
                        trigger: 'change'
                    },
                    {
                        min: 8,
                        message: 'Mật khẩu tối thiểu 8 kí tự',
                        trigger: 'blur'
                    }
                ],
                confirmPassword: [
                    {
                        required: true,
                        message: 'Hãy nhập lại mật khẩu mới',
                        trigger: 'change'
                    },
                    {
                        min: 8,
                        message: 'Mật khẩu tối thiểu 8 kí tự',
                        trigger: 'change'
                    },
                    { validator: validateConfirmPassword, trigger: 'change' }
                ]
            },
            errorMessage: null
        }
    },
    methods: {
        onSubmit() {
            this.errorMessage = null
            let _this_ = this
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    _this_.isRequesting = true
                } else {
                    return false
                }
            })

            setTimeout(this.$refs['form'].resetFields(), 1000)
        },
        onSuccess() {
            this.$message({
                message: 'Đổi mật khẩu thành công',
                type: 'success'
            })
        },
        onError(message) {
            this.errorMessage = message
            this.$message.error(message)
        },
    },
    mounted() {}
}
</script>

<style scoped>
.card-title {
    margin: 0;
}
.el-form {
    width: 80%;
}
.el-tabs--left .el-tabs__header.is-left {
    margin-right: 70px;
}

.card .card-header {
    background-color: rgba(0, 0, 0, 0);
}
.card .card-header .card-title {
    font-size: 22px;
}
.btn-secondary {
    background-color: white;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
}
.btn-secondary:hover {
    background-color: rgba(81, 81, 81, 0.1);
    color: rgba(0, 0, 0, 0.6);
}

.card-body {
    margin: 0 8%;
}
.btn-primary {
    margin-bottom: 0.5rem;
    font-size: 14px;
    font-weight: 600;
}
</style>
