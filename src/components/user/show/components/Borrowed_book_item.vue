<template>
    <div class="comment">
        <b-card>
            <b-media no-body>
                <img :src="item.book_cover" class="image" />

                <b-media-body class="ml-3">
                    <el-row>
                        <span><a href="#!"><b class="cl-deepblue">{{item.book_title}}</b></a></span>
                        <span class="float-right"> rated it <el-rate
                                v-model="item.rate"
                                disabled
                                score-template="{value} points"></el-rate></span>
                    </el-row>
                    <el-row>
                        <span>by: <a href="#!"><b class="cl-deepblue">{{item.author}}</b></a></span>
                    </el-row>
                    <el-row>
                        <span>Return date: {{item.day_borrow}}</span>
                    </el-row>
                </b-media-body>
            </b-media>
        </b-card>
    </div>
</template>

<script>
    export  default {
        name: "Borrowed_book_item",
        props : ['item'],
        data (){
            return{
                value : 4
            }
        }
    }

</script>

<style>
    .comment .card{
        border: none;
    }
    .rate .card{
        border: none;
    }
    .comment .el-rate{
        position: relative;
        display: inline-block;
        top: -3px;
    }
    .cl-deepblue{
        color: #3b6d74!important;
    }
</style>
