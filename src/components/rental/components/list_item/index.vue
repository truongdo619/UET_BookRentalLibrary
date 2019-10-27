<template>
    <div>
        <el-row :gutter="40" style="margin-top: 20px">
            <el-col :offset="1">
                <b style="font-size: 2rem">Best deal</b>
            </el-col>
        </el-row>
        <el-row :gutter="40" class="list_items">
            <el-col :span="7" :offset="1">
                <el-card class="box-card-component" style="margin-left:8px;">
                    <div slot="header" class="box-card-header">
                        <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
                    </div>
                    <div style="position:relative;">
                        <el-avatar class="panThumb"> $ 104 </el-avatar>
                        <Mallki class-name="mallki-text" text="IKEL VALINIA"></Mallki>
                        <div style="padding-top:35px;" class="progress-item">
                        <h3>Vue</h3>
                            <span>  Bacon ipsum dolor amet buffalo spare ribs strip steak ground round ham chuck ribeye sirloin.</span>
                    </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Mallki from "../list_cate/Mallki";
    export default {
        name: 'ListItem',
        components: {Mallki},
        data: () => {
            return {}
        }
    }
</script>

<style lang="scss" >
    .box-card-component{
        .el-card__header {
            padding: 0px!important;
        }
    }
</style>
<style lang="scss" scoped>
    .box-card-component {
        .box-card-header {
            position: relative;
            height: 220px;
            img {
                width: 100%;
                height: 100%;
                transition: all 0.2s linear;
                &:hover {
                    transform: scale(1.1, 1.1);
                    filter: contrast(130%);
                }
            }
        }
        .mallki-text {
            position: absolute;
            top: 0px;
            right: 0px;
            font-size: 20px;
            font-weight: bold;
        }
        .panThumb {
            z-index: 100;
            height: 70px !important;
            width: 70px !important;
            position: absolute !important;
            top: -45px;
            left: 0px;
            border: 5px solid #ffffff;
            background-color: rgb(64, 158, 255);
            margin: auto;
            box-shadow: none !important;
            padding-top: 8px;
        }
        .progress-item {
            margin-bottom: 10px;
            font-size: 14px;
        }
        @media only screen and (max-width: 1510px){
            .mallki-text{
                display: none;
            }
        }
    }
</style>