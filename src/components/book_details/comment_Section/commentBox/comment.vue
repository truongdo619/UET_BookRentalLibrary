<template>
    <div class="comment">
        <b-card>
            <b-media no-body>
<!--                    <img :src="item.image" class="image" />-->

                <b-media-body class="ml-3">
                    <el-row>
                        <span><a href="#!"><b class="cl-deepblue">{{item.email}}</b></a> rated it <el-rate
                                v-model="item.rating_number"
                                disabled
                                score-template="{value} points">

                        </el-rate></span>
<!--                        <span class="float-right cl-gray">{{item.date}}</span>-->
                    </el-row>
<!--                    <el-row v-if="item.shelves.length != 0">-->
<!--                        <span class="cl-gray">Shelves: <a href="#!"><b class="cl-deepblue">{{item.shelves}}</b></a></span>-->
<!--                    </el-row>-->
                    <el-row style="margin-top: 10px; margin-bottom: 7px">
                        <p>
                            {{item.rating_comment}}
                        </p>
                    </el-row>
<!--                    <el-row>-->
<!--                        <span><el-button plain style="padding: 5px; margin-right: 10px">Like</el-button> <a href="#!"><b class="cl-deepblue">See review</b></a></span>-->
<!--                    </el-row>-->

                </b-media-body>
            </b-media>
        </b-card>
    </div>
</template>

<script>
    export  default {
        name: "Comment",
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