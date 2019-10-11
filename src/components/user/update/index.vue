<template>
    <el-col :span="16" :offset="4" style="margin-top: 2%">
        <div class="app-container">
            <el-tabs type="border-card" :tab-position="tabPosition" style="height: 480px;">
                <el-tab-pane><span slot="label"><i class="el-icon-user"></i> General</span><general></general></el-tab-pane>
                <el-tab-pane><span slot="label"><i class="el-icon-lock"></i> Sercurity</span><security></security></el-tab-pane>
            </el-tabs>
        </div>
    </el-col>
</template>

<script>
    import General from "./components/General";
    import Security from "./components/Security";
    export default {
        name : "Update_profile",
        components: {Security, General},
        data(){
            return{
                tabPosition : "left"
            }
        }
    }
</script>

<style>
    #app .app-main[data-v-7fd75c4a]{
        min-height: 70vh;
    }
</style>