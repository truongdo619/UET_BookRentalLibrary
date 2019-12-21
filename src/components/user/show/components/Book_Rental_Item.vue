<template>
    <div class="comment">
        <b-card>
            <b-media no-body>
                <img :src="item.book_cover" class="image" style="max-width: 111px;max-height: 148px;" />

                <b-media-body class="ml-3">
                    <el-row>
                        <span><a href="#!"><b class="cl-deepblue">{{item.book_title}}</b></a></span>

                    </el-row>
                    <el-row>
                        <span>by: <a href="#!"><b class="cl-deepblue">{{item.author}}</b></a></span>
                    </el-row>
                    <el-row>
                        <span><a href="#!"><b>${{item.price}}</b></a></span>
                    </el-row>
                    <el-row>
                        <span>Rental date: {{item.day_borrow}}</span>
                    </el-row>
                </b-media-body>
            </b-media>
        </b-card>
    </div>
</template>

<script>
    export  default {
        name: "Book_rental_item",
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
