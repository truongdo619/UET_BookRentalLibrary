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
            <div class="comment-box-filter">
                <el-link icon="el-icon-data-analysis"><b class="cl-deepblue">Rating details</b></el-link>
                <div class="right-menu">
                    <el-link class="cl-deepblue">Filter</el-link>
                    <span class="cl-blue">  | </span>
                    <el-link class="cl-deepblue">Sort</el-link>
                    <el-input
                            placeholder="Search review text"
                            v-model="input">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
            </div>
            <el-divider></el-divider>

            <comment v-for="item in commented" :item="item"></comment>
            <rate v-for="item in rated" :item="item" ></rate>
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
    export default {
        name : "CommentBox",
        components: {Rate, Comment},
        data (){
            return {
                start  : 1,
                end : 24,
                input: "",
                commented : [{
                    "name" : "Dad",
                    "image" : require("@/assets/images/Dad.png"),
                    "rate" : 4,
                    "date" : "Feb 24, 2019",
                    "shelves" : "history-geography",
                    "text" : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\n" +
                        "                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce\n" +
                        "                            condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n" +
                        "                            \n" +
                        "                            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis\n" +
                        "                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                },
                    {
                        "name" : "Ctrunek",
                        "image" : require("@/assets/images/Ctrunek.png"),
                        "rate" : 5,
                        "date" : "Apr 1, 2017",
                        "shelves" : "",
                        "text" : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante\n" +
                            "                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce\n" +
                            "                            condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n" +
                            "                            \n" +
                            "                            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis\n" +
                            "                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                }],
                rated : [{
                "name" : "Jennifer",
                    "image" : require("@/assets/images/jennifer.png"),
                    "rate" : 3,
                    "date" : "Dec 09, 2015"
                },
                    {
                        "name" : "Lori C",
                        "image" : require("@/assets/images/default.png"),
                        "rate" : 3,
                        "date" : "Jul 15, 2018"
                    },
                    {
                        "name" : "Aimee",
                        "image" : require("@/assets/images/Aimee.png"),
                        "rate" : 4,
                        "date" : "Apr 04, 2018"
                    },
                    {
                        "name" : "Ian",
                        "image" : require("@/assets/images/Ian.png"),
                        "rate" : 3,
                        "date" : "Apr 01, 2017"
                    },
                    {
                        "name" : "Joel",
                        "image" : require("@/assets/images/Joel.png"),
                        "rate" : 3,
                        "date" : "Aug 24, 2013"
                    },
                    {
                        "name" : "Anna",
                        "image" : require("@/assets/images/default.png"),
                        "rate" : 2,
                        "date" : "May 28, 2016"
                    }]
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