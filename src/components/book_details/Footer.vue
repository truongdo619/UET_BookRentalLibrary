<template>
    <div class="footer">
        <el-row>
            <el-col :span="14" :offset="5" class="navbar">
                <el-divider></el-divider>
                <el-row style="width: 100%">
                        <el-col :span="5" :offset="1">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
                            <p>UET 5+</p>
                        </el-col>
                        <el-col :span="5" :offset="1">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p><a href="#!">Book Time</a></p>
                        </el-col>
                    <el-col :span="5" :offset="1">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p><a href="#!">Your Account</a></p>
                            <p><a href="#!">Become an Affiliate</a></p>
                            <p><a href="#!">Shipping Rates</a></p>
                        </el-col>
                    <el-col :span="5" :offset="1">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>144 Xuan Thuy, Cau Giay</p>
                            <p>info@gmail.com</p>
                            <p>01 234 567 88</p>
                    </el-col>
                </el-row>

                <el-divider></el-divider>
                <el-row style="width: 100%">
                <img src="@/assets/images/Opera Snapshot_2019-10-03_214212_app.slack.com.png" class="image">
                </el-row>

                <el-row style="width: 100%">
                    <el-col :span="10">
                        @ 2019 UET. All right reserved.
                    </el-col>
                    <el-col :span="6" :offset="8">
                        <el-link class="cl-gray">Term of use</el-link>
                        <span> | </span>
                        <el-link class="cl-gray">Privacy Policy</el-link>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    .cl-gray{
        color: #cfcfcf;
    }
</style>