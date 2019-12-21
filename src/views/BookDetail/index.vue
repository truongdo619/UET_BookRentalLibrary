<template>
    <div id="main">
        <Header></Header>
        <div class="body">
            <AboutBook :book-info="bookInfo"></AboutBook>
            <comment-section :book-info="bookInfo"></comment-section>
            <featured-praise></featured-praise>
            <recommend-section :bookID="this.bookInfo.ISBN"></recommend-section>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>

    import AboutBook from "../../components/book_details/aboutBook_Section/index";
    import CommentSection from "../../components/book_details/comment_Section/index";
    import FeaturedPraise from "../../components/book_details/featured_praises_section/index";
    import RecommendSection from "../../components/book_details/recommend_section/index";
    import Header from "../../components/layout/Header/index";
    import Footer from "../../components/layout/Footer/index";
    import {getBookDetails, getCategories, getRatingDetails, getRatingStat} from '../../services/books/books_api'
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
            this.reload(id)
        },
        methods: {
            async reload(id) {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                this.bookId = id
                console.log('book detail: ' + this.bookId)
                let response = await getBookDetails(id)
                let tmp;
                if (response) {
                    tmp = response.data[0]
                }
                let res = await getRatingStat(id);
                if (res){
                    tmp.ratingStat = res.data;
                    await this.$store.dispatch("updateTotalRating", res.data.total_cnt);
                }
                res = await getCategories(id);
                if (res){
                    tmp.categories = res.data;
                }
                this.bookInfo = tmp;
                console.log(this.bookInfo)

                setTimeout(() => {
                    loading.close();
                }, 1000);
            }
        },
        computed: {
            update(){
                return this.$store.getters.updateCommentBox;

            },
            path(){
                return this.$router.currentRoute.path;
            }
        },
        watch: {
            $route: function (to, from) {

                let {id} = this.$route.params
                this.reload(id)
            },
            update: async function (newVal){
                if (newVal == true){
                    let {id} = this.$route.params
                    this.bookId = id
                    console.log('book detail: ' + this.bookId)
                    let response = await getBookDetails(id);
                    let tmp;
                    if (response) {
                        tmp = response.data[0];
                    }

                    console.log(this.bookInfo)
                    let res = await getRatingStat(id);
                    if (res){
                        tmp.ratingStat = res.data;

                        await this.$store.dispatch("updateTotalRating", res.data.total_cnt);
                    }
                    this.bookInfo = tmp;
                }
            }
        }
    }
</script>

<style scoped>
    .body{
        margin-top: 30px;
    }
</style>
