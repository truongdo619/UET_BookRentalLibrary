<template>
    <el-container style="height: 100%; border: 1px solid #eee">
<!--        <AsideBar></AsideBar>-->

<!--        <el-container>-->
                <Header></Header>
            <br/>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>
<!--    </el-container>-->
</template>

<script>
    import Header from '../components/layout/Header/index'
    import Footer from '../components/layout/Footer/index'

    export default {
        name: 'MainLayout',
        components: {Footer, Header}
    }
</script>

<style scoped>

    .el-header {
        background-color: #fff;
        border-bottom: 1px solid #eeeeee;
        color: #333;
    }
</style>
