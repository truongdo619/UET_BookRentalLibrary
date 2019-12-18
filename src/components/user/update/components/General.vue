<template>
    <div>
        <!--<div class="">-->
        <!--<h1 class="heading_one">Thông tin cá nhân</h1>-->
        <!--<div class="divider_line"></div>-->
        <!--</div>-->
        <!--<el-form label-position="right" label-width="25%" :model="user">-->
        <!--<el-form-item label="Họ tên">-->
        <!--<el-input v-model="user.fullName"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="Email">-->
        <!--<el-input v-model="user.email"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="Địa chỉ">-->
        <!--<el-input v-model="user.address"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="Nơi làm việc">-->
        <!--<el-input v-model="user.workPlace"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="Số điện thoại">-->
        <!--<el-input v-model="user.phoneNumber"></el-input>-->
        <!--</el-form-item>-->

        <!--<el-button type="primary" @click="onSubmitEditUserInformation" style="margin-left: 200px">Cập nhập</el-button>-->
        <!--<el-button @click="reset">Reset</el-button>-->

        <!--</el-form>-->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"><i class="far fa-user" style="margin-right: 10px"></i> Thông tin cá nhân</h3>
            </div>
            <div class="card-body">
                <form action="">
                    <div class="form-group">
                        <div class="row align-items-center">
                            <label class="col-sm-3">First Name:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="userInfo.first_name">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row align-items-center">
                            <label class="col-sm-3">Last Name:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="userInfo.last_name">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row align-items-center">
                            <label class="col-sm-3">Email:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="userInfo.email" disabled>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row align-items-center">
                            <label class="col-sm-3">Cash:</label>
                            <div class="col-sm-9">
                                <span style="color: #30688d; font-weight: 600">${{userInfo.cash}}</span>
                            </div>
                        </div>
                    </div>

                    <div class="btn-list mt-4 text-right">
                        <button type="button" @click="reset" class="btn btn-secondary btn-space">Reset</button>
                        <button type="button" @click="dialogVisible = true" class="btn btn-primary btn-space">Xác
                            nhận
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <el-dialog
                title="Confirm"
                :visible.sync="dialogVisible"
                width="30%"
                >
            <span class="input-label">Password: </span>
            <el-input placeholder="Password" v-model="password" show-password/>

            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="onSubmitEditUserInformation">Confirm</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    import {getUserInfo, updateUserInfo} from '../../../../services/users/user_api'

    export default {
        name: 'General',
        data: function () {
            return {
                backupInfo: {},
                userInfo: {},
                dialogVisible: false,
                password: ''
            }
        },
        methods: {
            async onSubmitEditUserInformation() {
                let res = await updateUserInfo({first_name: this.userInfo.first_name, last_name: this.userInfo.last_name, old_password: this.password})
                if (res === 'success') {
                    this.$message({
                        message: 'User information has been updated successfully',
                        type: 'success',
                        duration: 5 * 1000
                    })
                } else {
                    this.$message({
                        message: res,
                        type: 'error',
                        duration: 5 * 1000
                    })
                }
                this.dialogVisible = false
            },
            reset() {
                this.userInfo = Object.assign({}, this.backupInfo)
            },
            gotoHome() {
                this.$router.push({name: 'home'})
            },
            onError(msg) {
                this.$message.error(msg)
                setTimeout(this.gotoHome, 1500)
            }
        },
        async mounted() {
            let res = await getUserInfo()
            this.userInfo = res.data
            this.backupInfo = JSON.parse(JSON.stringify(res.data))
        }
    }
</script>

<style>
    .input-label {
        display: inline-block;
        width: 130px;
    }
</style>

<style scoped>
    .card-title {
        margin: 0;
    }

    .el-form {
        margin: 20px 30px;
        width: 50%;
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
