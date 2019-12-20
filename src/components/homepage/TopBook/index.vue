<template>
    <div class="top-books">
        <el-row>
            <el-col :span="12" class="top-books-by-rating">
                <h1 class="col-title">TOP 6 BOOKS</h1>
                <el-row>
                    <el-col :span="12"  v-for="item of books" :key="item.id" class="book-content">
                        <b-card>
                            <b-media no-body>
                                <img :src="item.book_cover" class="image" />

                                <b-media-body class="ml-3">
                                    <el-row>
                                        <span>{{item.book_title}}</span>
                                    </el-row>
                                    <el-row>
                                        <!--                                    <span>by: <a href="#!"><b class="cl-deepblue">{{item.author}}</b></a></span>-->

                                        <span style="color: #9e9e9e; font-size: 12px">William shakespeare</span>
                                    </el-row>
                                    <el-row>
                                        <el-rate
                                                disabled-void-color="#9a9696"
                                                v-model="rating"
                                                disabled
                                                :colors="['black', 'black', 'black']"
                                                score-template="{value} points">
                                        </el-rate>
                                    </el-row>
                                </b-media-body>
                            </b-media>
                        </b-card>
                    </el-col>
                </el-row>

            </el-col>
            <el-col :span="11" :offset="1" class="top-authors">
                <h1 class="col-title">TOP 3 ACTOR</h1>
                <el-row v-for="item of authors" :key="item.id">
                    <b-card>
                        <b-media no-body>
                            <img :src="item.img_cover" class="image" />

                            <b-media-body class="ml-3" style="margin-top: 30px">
                                <el-row>
                                    <span style="font-size: 18px">{{item.name}}</span>
                                </el-row>
                                <el-row>
                                    <!--                                    <span>by: <a href="#!"><b class="cl-deepblue">{{item.author}}</b></a></span>-->

                                    <span style="color: #9e9e9e">{{item.description}}</span>
                                </el-row>
                            </b-media-body>
                        </b-media>
                    </b-card>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {getTopBooks} from "../../../services/books/books_api";
    import edgar from "../../../assets/images/edgar_author.png";
    import mark from "../../../assets/images/mark_author.png";
    import william from "../../../assets/images/william_author.png";

    export default {
        name : "TopBook",
        data(){
            return{
                rating : 4,
                books: [

                ],
                authors: [
                    {
                        name: 'Edgar Allan poe',
                        description: "American short story author, poet",
                        img_cover : edgar
                    },
                    {
                        name: 'Mark Twain',
                        description: "American humorist, novelist short story author",
                        img_cover : mark
                    },
                    {
                        name: 'William shakespeare',
                        description: "Greatest English dramist & poet",
                        img_cover : william
                    }
                ]
            }
        },
        async mounted() {
            let data = await getTopBooks()
            console.log(data)
            this.books = data.data.map(book => ({
                id: book.ISBN,
                book_cover: book.book_cover,
                book_title: book.book_title,
                rating: book.rating.length > 0 ? Math.floor(book.rating.reduce((sum, current) => sum + current) / book.rating.length) : 0
            }))
            this.books = this.books.slice(0, 6)
            // this.reInit()
            // this.$refs.slick.reSlick()
        }
    }
</script>

<style scoped lang="scss">

    .top-books {
            width: 100%;
        height: 100%;
            padding-top: 70px;
        .col-title {
            font-size: 40px;
            letter-spacing: 1px;
            font-weight: bold;
        }
        .top-authors{
            background-color: #fcf3f3;
            padding: 50px 0px 50px 20px;
            border-radius: 15px;
            .card{
                width: 100%;
                border: none;
                margin-right: 20px;
                background-color: #fcf3f3;
            }
        }
        .top-books-by-rating{
            padding: 50px 0px 50px 20px;
            .card{
                width: 100%;
                border: none;
                margin-right: 20px;
                .card-body{
                    padding: 0;
                    img{
                        max-height: 144px;
                        max-width: 98px;
                        min-height: 144px;
                        min-width: 98px;
                        border-radius: 7px;
                    }
                    .el-rate__item{
                        .el-rate__icon{
                            margin-right: -3px!important;
                        }
                    }
                }
            }
        }
        .book-content{
            width: 44%;
            margin-right: 30px;
            margin-top: 20px;
        }

    }
</style>

<style lang="scss">
    .top-books {
        .el-rate__item{
            .el-rate__icon{
                margin-right: -3px!important;
            }
        }
    }
</style>
