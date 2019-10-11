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
                            <label class="col-sm-3">Họ tên:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="userInfo.name">
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
                            <label class="col-sm-3">Địa chỉ :</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="userInfo.address">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row align-items-center">
                            <label class="col-sm-3">Nơi làm việc:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="userInfo.workPlace">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row align-items-center">
                            <label class="col-sm-3">Số điện thoại:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="userInfo.phone">
                            </div>
                        </div>
                    </div>

                    <div class="btn-list mt-4 text-right">
                        <button type="button" @click="reset" class="btn btn-secondary btn-space">Reset</button>
                        <button type="button" @click="onSubmitEditUserInformation" class="btn btn-primary btn-space">Xác
                            nhận
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'General',
        data: function () {
            return {
                backupInfo: {},
                userInfo: {}
            }
        },
        methods: {
            async onSubmitEditUserInformation() {

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
        }
    }
</script>

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
