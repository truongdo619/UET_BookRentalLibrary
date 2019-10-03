<template>
    <div id="main">
        <Header></Header>
        <div class="body">
            <AboutBook></AboutBook>
            <comment-section></comment-section>
            <featured-praise></featured-praise>
            <recommend-section></recommend-section>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>

    import Header from "../components/book_details/Header";
    import AboutBook from "../components/book_details/aboutBook_Section/AboutBook";
    import CommentSection from "../components/book_details/comment_Section/index";
    import FeaturedPraise from "../components/book_details/featured_praises_section/index";
    import RecommendSection from "../components/book_details/recommend_section/index";
    import Footer from "../components/book_details/Footer";
    export default {
        name: "BookDetail",
        components: {Footer, RecommendSection, FeaturedPraise, CommentSection, AboutBook, Header}
    }
</script>

<style scoped>
    .body{
        margin-top: 30px;
    }
</style>