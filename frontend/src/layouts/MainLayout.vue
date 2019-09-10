<template>
    <el-container style="height: 100%; border: 1px solid #eee">
<!--        <AsideBar></AsideBar>-->

<!--        <el-container>-->
            <el-header>
                <Header></Header>
            </el-header>
            <br/>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
<!--    </el-container>-->
</template>

<script>
    import Header from './Header'

    export default {
        name: 'MainLayout',
        components: {Header}
    }
</script>

<style scoped>

    .el-header {
        background-color: #fff;
        border-bottom: 1px solid #eeeeee;
        color: #333;
    }
</style>
