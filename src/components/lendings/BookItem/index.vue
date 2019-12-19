<template>
    <div class="comment">
        <b-card>
            <b-media no-body>
                <img :src="item.book_cover" class="image" />

                <b-media-body class="ml-3">
                    <el-row>
                        <span><a href="#!" @click="handleBookDetail"><b class="cl-deepblue">{{item.book_title}}</b></a></span>
                    </el-row>
                    <el-row>
                        <span>by: <a href="#!"><b class="cl-deepblue">{{item.author}}</b></a></span>
                    </el-row>
                    <el-row>
                        <span>Price: {{item.price}}</span>
                    </el-row>
                    <el-row>
                        <span>Time Upload: {{item.time_upload}}</span>
                    </el-row>
                    <el-row>
                        <span>Validated: {{item.is_validate}}</span>
                    </el-row>
                    <el-row>
                        <span>Borrowed Times: {{item.borrowed_times}}</span>
                    </el-row>
                    <el-row>
                        <span>Status: {{item.status}}</span>
<!--                        0 / 1 : not available / available-->
                    </el-row>
                </b-media-body>
            </b-media>
        </b-card>
    </div>
</template>

<script>
    export  default {
        name: "BookItem",
        props : ['item'],
        data (){
            return{
                value : 4
            }
        },
        methods: {
            handleBookDetail() {
                this.$router.push({name: 'book_detail', params: {id: this.item.book_id}})
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

<style scoped>
    .image {
        max-width: 100%;
        max-height: 150px;
    }
</style>
