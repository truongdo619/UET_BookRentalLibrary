<template>
    <div class="comment_box">
        <div class="comment-box-header">
            <h6 :style="{display : 'inline-block'}"><b>COMMUNITY REVIEWS</b></h6>
            <div class="right-menu">
                <small>(Showing {{start}}-{{end}})</small>
            </div>
        </div>

        <el-divider></el-divider>
        <div class="comment-box-filter">
            <el-link icon="el-icon-data-analysis">Rating details</el-link>
            <div class="right-menu">
                <el-link class="cl-blue">Filter</el-link>
                <span class="cl-blue">  | </span>
                <el-link class="cl-blue">Sort</el-link>
                <el-input
                        placeholder="Search review text"
                        v-model="input">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
        </div>
        <el-divider></el-divider>
    </div>
</template>

<script>
    export default {
        name : "CommentBox",
        data (){
            return {
                start  : 1,
                end : 24,
                input: ""
            }
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