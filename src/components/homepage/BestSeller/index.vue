<template>
    <div class="best-seller">
        <h1 class="best-seller-title">Best seller</h1>
        <el-row class="best-seller-content">
            <el-col span="4" v-for="book of books" :key="book.id" class="best-seller-item">
                <b-card
                        :img-src="book.book_cover"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                >
                    <b-card-text>
                        {{book.book_title}}
                    </b-card-text>
                    <el-rate
                            v-model="rating"
                            disabled
                            score-template="{value} points">
                    </el-rate>
                    <h5 style="color: #c46d38; font-weight: bold">
                        U$S {{150}}
                    </h5>

                </b-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    import {getTopBooks} from '../../../services/books/books_api'

    export  default {
        name : "BestSeller",
        data: () => {
            return {
                rating: 4,
                books: []
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
            this.books = this.books.slice(0, 5);
        }
    }
</script>

<style scoped lang="scss">
    .best-seller{
        .best-seller-title {
            margin-bottom: 20px;
            font-size: 40px;
            letter-spacing: 1px;
            font-weight: bold;
        }
        .best-seller-content{
            .best-seller-item{
                margin-right: 20px;

                .card-img-top{
                    max-height: 250px;
                }
                .card-body{
                    padding: 0.5rem;
                    .card-text{
                        font-size: 14px;
                        margin-bottom: 0px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .el-rate__item{
                        .el-rate__icon{
                            margin-right: -3px!important;
                        }
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    .best-seller {
        .card{
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 7px;
            overflow: hidden;
        }
        .el-rate__icon{
            margin-right: -1px!important;
        }
        .el-rate{
            margin-bottom: 5px;
        }
    }
</style>
