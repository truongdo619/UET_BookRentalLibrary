<template>
    <div id="cart">
        <Header></Header>
        <div class="body">
            <app-main></app-main>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/layout/Header";
    import AppMain from "../components/layout/main";
    import Footer from "../components/layout/Footer";
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