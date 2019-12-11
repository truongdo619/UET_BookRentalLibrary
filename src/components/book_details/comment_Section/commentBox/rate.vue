<template>
    <div class="rate">
        <b-card>
            <b-media no-body>
<!--                <img :src="item.image" class="image">-->

                <b-media-body class="ml-3">
                    <el-row>
                        <div><a href="#!"><b class="cl-deepblue">{{item.email}}</b></a></div>
                        <div>rated it </div>
                        <el-rate
                                v-model="item.rating_number"
                                disabled
                                score-template="{value} points">

                        </el-rate>
<!--                        <div class="cl-gray">{{item.date}}</div>-->
                    </el-row>
                </b-media-body>
            </b-media>
        </b-card>
    </div>
</template>

<script>
    export  default {
        name: "Rate",
        data (){
            return{
                value : 4
            }
        },
        props: ['item']
    }

</script>

<style>
    .rate {
        max-width: 33%;
        display: inline-block;
    }
</style>