<template>
    <div id="main">
        <Header></Header>
        <div class="body">
            <AppMain></AppMain>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

    import Header from "../components/user/layout/Header";

    import Footer from "../components/user/layout/Footer";
    import AppMain from "../components/user/layout/main";
    export default {
        name: "UserPage",
        components: {AppMain, Footer, Header}
    }
</script>

<style scoped>
    .body{
        margin-top: 30px;
    }
</style>