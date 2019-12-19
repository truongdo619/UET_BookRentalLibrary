<template>
    <div class="home-page">
        <div class="home-header">
            <HeaderBar></HeaderBar>
            <div class="search-area">
                <search></search>
            </div>
        </div>
        <div class="home-body">
            <header-books-slider></header-books-slider>

            <div class="category-area">
                <list-categories></list-categories>
                <popular-categories-list></popular-categories-list>
                <top-book></top-book>
            </div>

            <praise></praise>
        </div>
        <div class="home-footer">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
    import HeaderBar from '../../components/homepage/HeaderBar/index'
    import Search from '../../components/homepage/Search/index'
    import HeaderBooksSlider from '../../components/homepage/HeaderBooksSlider/index'
    import ListCategories from '../../components/homepage/ListCategories/index'
    import PopularCategoriesList from '../../components/homepage/PopularCategoriesList/index'
    import TopBook from "../../components/homepage/TopBook/index";
    import Footer from "../../components/layout/Footer/index";
    import Praise from "../../components/homepage/Praise/index";
    export default {
        name: 'Home',
        components: {
            Praise,
            Footer, TopBook, PopularCategoriesList, ListCategories, HeaderBooksSlider, Search, HeaderBar}
    }
</script>

<style scoped>
    .home-page * {
        font-family: 'Open Sans', sans-serif;
    }

    .home-header {
        background-image: url("../../assets/images/header-images.jpg");
        background-repeat: no-repeat;
        height: calc(100vh - 60px);
        background-attachment: fixed;
        background-size: cover;
        background-position: top left;
        box-shadow: inset 0 -250px 250px 0px rgba(0, 0, 0, 0.4);
        min-height: 860px;
    }

    .home-body {
        width: 100%;
        transform: translateY(-7%);
    }

    .search-area {
        margin-top: 7%;
        margin-left: 120px;
    }

    .category-area {
        width: 70%;
        margin: auto;
    }
</style>
