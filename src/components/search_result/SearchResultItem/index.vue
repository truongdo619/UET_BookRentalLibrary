<template>
    <div class="comment">
        <b-card>
            <b-media no-body>
                <img :src="item.image_url" class="image" />

                <b-media-body class="ml-3">
                    <el-row>
                        <span><a href="#!" @click="handleBookDetail"><b class="cl-deepblue">{{item.title}}</b></a></span>
                        <span class="float-right"> rated it <el-rate
                                v-model="item.rating"
                                disabled
                                score-template="{value} points"></el-rate></span>
                    </el-row>
                    <el-row>
                        <span>by: <a href="#!"><b class="cl-deepblue">{{item.author_name}}</b></a></span>
                    </el-row>
                    <el-row>
                        <span style="color: gray; font-size: 14px">published {{item.public_year}}</span>
                    </el-row>
<!--                    <el-row>-->
<!--                        <span>Rental date: {{item.date}}</span>-->
<!--                    </el-row>-->
                </b-media-body>
            </b-media>
        </b-card>
    </div>
</template>

<script>

    export  default {
        name: "SearchResultItem",
        props : ['item'],
        data (){
            return{
                value : 4
            }
        },
        methods : {
            handleBookDetail() {
                this.$router.push({name: 'book_detail', params: {id: this.item.id}})
            },
        }
    }

</script>

<style scoped>
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
    .image {
        max-width: 100%;
        max-height: 100px;
    }
</style>
