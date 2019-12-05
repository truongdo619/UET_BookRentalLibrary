<template>
    <div id="main">
        <Header></Header>
        <div class="body">
            <app-main></app-main>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../../components/layout/Header/index";
    import AppMain from "../../components/layout/Main/index";
    import Footer from "../../components/layout/Footer/index";
    export default {
        name: "UserPage",
        components: {Footer, AppMain, Header}
    }
</script>

<style scoped>
    .body{
        margin-top: 30px;
    }
</style>
