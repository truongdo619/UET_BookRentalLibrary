<template>
    <div class="home-page">
        <div class="home-header">
            <HeaderBar></HeaderBar>
            <div class="search-area">
                <search></search>
            </div>
        </div>
        <header-books-slider></header-books-slider>
    </div>
</template>

<script>
    import HeaderBar from '../components/homepage/HeaderBar'
    import Search from '../components/homepage/Search'
    import HeaderBooksSlider from '../components/homepage/HeaderBooksSlider'
    export default {
        name: 'Home',
        components: {HeaderBooksSlider, Search, HeaderBar}
    }
</script>

<style scoped>
    .home-page * {
        font-family: 'Open Sans', sans-serif;
    }

    .home-header {
        background-image: url("../assets/images/header-images.jpg");
        background-repeat: no-repeat;
        height: calc(100vh - 60px);
        background-attachment: fixed;
        background-size: cover;
        background-position: top left;
        box-shadow: inset 0 -250px 250px 0px rgba(0, 0, 0, 0.4);
        min-height: 860px;
    }

    .search-area {
        margin-top: 7%;
        margin-left: 120px;
    }
</style>
