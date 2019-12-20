<template>
    <div class="comment_box">
        <div>

            <div class="comment-box-header">
                <h6 :style="{display : 'inline-block'}"><b>COMMUNITY REVIEWS</b></h6>
                <div class="right-menu">
                    <small>(Showing {{start}}-{{end}})</small>
                </div>
            </div>

            <el-divider></el-divider>
            <!--            <div class="comment-box-filter">-->
            <!--                <el-link icon="el-icon-data-analysis"><b class="cl-deepblue">Rating details</b></el-link>-->
            <!--                <div class="right-menu">-->
            <!--                    <el-link class="cl-deepblue">Filter</el-link>-->
            <!--                    <span class="cl-blue">  | </span>-->
            <!--                    <el-link class="cl-deepblue">Sort</el-link>-->
            <!--                    <el-input-->
            <!--                            placeholder="Search review text"-->
            <!--                            v-model="input">-->
            <!--                        <i slot="prefix" class="el-input__icon el-icon-search"></i>-->
            <!--                    </el-input>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <el-divider></el-divider>-->

            <comment v-for="(item, index) in commented" :item="item" :key="index"></comment>
            <!--            <rate v-for="item in rated" :item="item" ></rate>-->
            <el-pagination
                    background
                    :current-page.sync="currentPage"
                    layout="prev, pager, next"
                    :page-size="5"
                    @current-change="handleCurrentChange"
                    :total="this.$store.getters.totalRating">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    import Comment from './comment'
    import {getRatingDetails} from '../../../../services/books/books_api'

    export default {
        name: 'CommentBox',
        props: {
            bookId: {
                type: String,
                required: true,
                default: ''
            }
        },
        components: {Comment},
        data() {
            return {
                currentPage : 1,
                input: '',
                commented: []
            }
        },
        computed: {
            update(){
                return this.$store.getters.updateCommentBox;

            },
            start(){
                return (this.currentPage - 1) * 5 + 1
            },
            end(){
                return this.currentPage * 5
            }
        },
        watch: {
            bookId: async function (newVal, oldVal) { // watch it
                console.log('Update commented', newVal, oldVal)
                let res = await getRatingDetails(newVal)
                this.commented = res.data
            },
            update: async function (newVal, oldVal) { // watch it
                if (newVal == true){
                    this.$store.dispatch("updateCommentBox", false);
                    let res = await getRatingDetails(this.bookId, this.currentPage)
                    this.commented = res.data
                }
            }
        },
        methods : {
            async handleCurrentChange(val) {
                let res = await getRatingDetails(this.bookId, val)
                this.commented = res.data
            }
        }
    }
</script>

<style>
    .right-menu .el-input--prefix .el-input__inner {
        max-height: 22px;
    }

    .right-menu .el-input--prefix {
        margin-left: 10px;
    }

    .right-menu span.el-input__prefix {
        top: -9px;
    }
</style>

<style lang="scss" scoped>
    .comment_box {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .comment_box .el-divider {
        margin-top: 0px;
        margin-bottom: 10px;
    }

    .right-menu {
        float: right;
    }

    a.cl-blue, b.cl-blue {
        color: dodgerblue;
    }

    .comment_box div.el-breadcrumb {
        display: inline-block;
    }

    .comment_box .el-input {
        max-width: 170px;
    }

    .el-input__inner {
        max-height: 25px !important;

        border: none;
    }

    .comment-box-filter {
        margin-bottom: 10px;
    }
</style>
