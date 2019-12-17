<template>
    <div id="cart">
        <Header/>
        <div class="body">
            <AppMain/>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../../components/layout/Header/index";
    import AppMain from "../../components/layout/Main/index";
    import Footer from "../../components/layout/Footer/index";
    export default {
        name: "Cart",
        components: {Footer, AppMain, Header}
    }
</script>

<style scoped>
    .body{
        padding-top: 30px;

        background-color: #f8fafc;
    }
    .app-main{
        min-height: 700px !important;
    }
</style>
