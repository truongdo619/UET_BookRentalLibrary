<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>User Info</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="editFunc">Edit</el-button>
        </div>
        <span id="username">{{userInfo.full_name}}</span><br/>
        <span>{{userInfo.address}}</span><br/>
        <span>Phone: {{userInfo.phone}}</span>
    </el-card>
</template>

<script>
    export default {
        name: "UserInfoCard",
        props: ['userInfo', 'editFunc']
    }
</script>

<style scoped>
#username {
    font-weight: 600;
    font-size: 16px;
    line-height:2;
}
</style>