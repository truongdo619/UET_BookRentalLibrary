<template>
    <el-row class="bg-gray">
        <el-col :span="16" :offset="4">
            <h1 style="text-align: center">Featured Praises</h1>
            <h2 style="text-align: center"><i style="font-size: 16px"><b style="font-size: 20px">"</b> This book made me laugh.And then a page loader, it made me sob.<br>
                Reminiscent of Tom Robbins and Chrosstopher Moore, Poore finds humor in the <br> dark absurdities of life.
                <b style="font-size: 20px">"</b></i></h2>

            <h4 style="text-align: center; margin-bottom: 2%;color: gray">{{authors[active_slide]}}</h4>
            <el-carousel :autoplay="false" type="card" @change="change_slide">
                <el-carousel-item v-for="item in 3" :key="item">

                    <el-image src="http://www.lopburicancer.in.th/images/user.png"></el-image>
                </el-carousel-item>
            </el-carousel>

        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "FeaturedPraise",
        data(){
            return{
                active_slide : 0,
                authors :["Henry Wadsworth Longfellow", "Arthur Conan Doyle", "Percy Bysshe Shelley"]
            }
        },
        methods: {
            change_slide(index){
                this.active_slide = index;
            }
        }
    }
</script>
<style>
    .bg-gray .el-image{
        left: 50%;
        transform: translateX(-50%);
    }
</style>

<style lang="scss" scoped>
    .bg-gray{
        background-color: #f6f6f6;
        padding: 60px 0;
    }
    .full-width {
        width: 100%;
    }
</style>