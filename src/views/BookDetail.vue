<template>
    <div id="main">
        <Header></Header>
        <div class="body">
            <AboutBook :book-info="bookInfo"></AboutBook>
            <comment-section></comment-section>
            <featured-praise></featured-praise>
            <recommend-section></recommend-section>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>

    import AboutBook from "../components/book_details/aboutBook_Section/AboutBook";
    import CommentSection from "../components/book_details/comment_Section/index";
    import FeaturedPraise from "../components/book_details/featured_praises_section/index";
    import RecommendSection from "../components/book_details/recommend_section/index";
    import Header from "../components/layout/Header";
    import Footer from "../components/layout/Footer";
    import {getBookDetails} from '../services/books/books_api'
    export default {
        name: "BookDetail",
        data: () => {
            return {
                bookId: -1,
                bookInfo: {}
            }
        },
        components: {Footer, Header, RecommendSection, FeaturedPraise, CommentSection, AboutBook},
        async mounted() {
            let {id} = this.$route.params
            this.bookId = id
            console.log('book detail: ' + this.bookId)
            let response = await getBookDetails(id)
            if (response) {
                this.bookInfo = response.data[0]
            }
        }
    }
</script>

<style scoped>
    .body{
        margin-top: 30px;
    }
</style>
