<template>
    <el-row>
                    <el-row>
                        <h1>{{bookDetail.book_title}}</h1>
                        <h5>by: {{bookDetail.author.author_name}}</h5>
                        <el-rate
                                v-model="bookRating"
                                disabled
                                show-score
                                :disabled-void-color = "disabled_color"
                                score-template="{value} points">
                        </el-rate>
                        <el-breadcrumb separator=".">
                            <el-breadcrumb-item><el-link icon="el-icon-data-analysis" class="cl-deepblue">Rating details</el-link></el-breadcrumb-item>
                            <el-breadcrumb-item><el-link class="cl-deepblue">{{bookDetail !== null ?bookDetail.rating.length:0}} Ratings</el-link></el-breadcrumb-item>
                            <el-breadcrumb-item><el-link><b class="cl-deepblue">1 Review</b></el-link></el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <h4>About the book</h4>
                        <div class="description">
                            <div>
                                {{bookDescription}}
                            </div>
                        </div>

                        <el-link class="tx-blue" @click="see_more"><b>{{more_less}}</b></el-link>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-button type="primary" :style="{marginRight : '20px', marginBottom: '20px'}">Get this book</el-button>
                        <a href="" onclick="return false;">Look inside</a>
                        <div class="tag_list">
                            <el-tag type="success">Paperback</el-tag>
                            <el-tag type="info">Hardcover</el-tag>
                            <el-tag type="warning">Ebook</el-tag>
                            <el-tag type="danger">Audio</el-tag>
                        </div>
                    </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "bookInfo",
        props: {
          bookDetail: {
            type: Object,
            required: true
          },
        },
        data (){
            return {
                disabled_color: '#C6D1DE',
                more_less : 'See more',
                short_long: 'short'
            }
        },
        methods:{
            see_more(){

                if (this.more_less === 'Less') {
                    this.more_less = 'See more'
                    this.short_long = "short"
                }
                else {
                    this.more_less = 'Less'
                    this.short_long = "long"
                }
            }
        },
        computed: {
            bookRating() {
                if (this.bookDetail && this.bookDetail.rating.length > 0) {
                    return Math.floor(this.bookDetail.rating.reduce((sum, current) => sum + current) / this.bookDetail.rating.length)
                } else {
                    return 0
                }
            },
            bookDescription() {
                if (this.bookDetail) {
                   if (this.bookDetail.book_description.length < 250) {
                       return this.bookDetail.book_description
                   } else if (this.short_long === 'short') {
                       return this.bookDetail.book_description.substr(0, 250) + '...'
                   } else
                       return this.bookDetail.book_description
                }
                return ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-breadcrumb{
        padding-top: 10px;
    }
    .description{
        overflow: hidden;
    }
    .tx-blue{
        color: dodgerblue!important;
    }
    .tag_list .el-tag{
        margin-right: 10px;
    }
</style>
