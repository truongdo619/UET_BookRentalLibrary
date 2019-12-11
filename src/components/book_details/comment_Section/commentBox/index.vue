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

            <comment v-for="item in commented" :item="item"></comment>
<!--            <rate v-for="item in rated" :item="item" ></rate>-->
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="30">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    import Comment from "./comment";
    import Rate from "./rate";
    import {getRatingDetails} from "../../../../services/books/books_api"
    export default {
        name : "CommentBox",
        components: {Rate, Comment},
        data() {
            return {
                start: 1,
                end: 24,
                input: "",
                commented : []
            }
        },
        mounted() {
            console.log(this.bookId)
            this.commented = getRatingDetails(this.bookId)
        }
    }
</script>

<style>
    .right-menu .el-input--prefix .el-input__inner {
        max-height: 22px;
    }
    .right-menu .el-input--prefix{
        margin-left: 10px;
    }
    .right-menu span.el-input__prefix{
        top: -9px;
    }
</style>

<style lang="scss" scoped>
    .comment_box{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .comment_box .el-divider{
        margin-top: 0px;
        margin-bottom: 10px;
    }
    .right-menu {
        float: right;
    }
    a.cl-blue, b.cl-blue{
        color: dodgerblue;
    }
    .comment_box div.el-breadcrumb{
        display: inline-block;
    }
    .comment_box .el-input{
        max-width: 170px;
    }
    .el-input__inner{
        max-height: 25px!important;

        border: none;
    }
    .comment-box-filter{
        margin-bottom: 10px;
    }
</style>