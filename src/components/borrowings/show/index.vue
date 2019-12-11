<template>
    <el-col :span="20" :offset="2">
        <h4>San Pham Dang Muon ({{this.items.length}} sản phẩm)</h4>
        <el-row style="min-height: 500px; display: flex">
            <div style="width: 100%;" v-if="items.length === 0">
                <div class="not-found border_raidus">
                    <img :src="image">
                    <h5>Không có sản phẩm nào được tìm thấy</h5>
                    <el-button type="primary">Quay lại trang chủ</el-button>
                </div>
            </div>
            <el-col :span = "17" v-if="items.length !== 0" class="user-activity border_raidus">
                <div class="post" v-for="item in items" :key="item.id">
                    <BookItem :item="item"></BookItem>
                </div>
            </el-col>
        </el-row>
    </el-col>

</template>

<script>
    import cart from '../../../assets/images/ezgif.com-crop.gif'
    import BookItem from '../BookItem/index'

    export default {
        name: 'cartComponent',
        components: {BookItem},
        data () {
            return {
                image: cart,
                user: null,
                items : []
            }
        },
        mounted() {

        },
        methods:{}
    }
</script>

<style lang="scss" scoped>
    table th, td{
        text-align: center;
    }
    .delete_btn{
        cursor: pointer;
    }
    .result{
        margin-top: 40px;
        width: 50%;
        float: right;
    }
    .border_raidus{
        border: 1px solid transparent;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 8px 16px 0 rgba(7,17,27,.1);
        box-sizing: border-box;
        background-color: #fff;
    }
    .border_raidus .el-menu{
        border-right: none;
    }
    .bg_light_gray{
        background-color: #f4f9ff;
    }
    .not-found{
        margin: 0 auto;
    }
    .not-found img{
        display: block;
        margin: 0 auto;
    }
    .not-found button{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 20px;
    }
    .not-found h5{
        text-align: center;
    }

    .user-activity {
        padding-top: 20px;
        margin-top: 20px;
        .user-block {

            .username,
            .description {
                display: block;
                margin-left: 50px;
                padding: 2px 0;
            }

            .username{
                font-size: 16px;
                color: #000;
            }

            :after {
                clear: both;
            }

            .img-circle {
                border-radius: 50%;
                width: 40px;
                height: 40px;
                float: left;
            }

            span {
                font-weight: 500;
                font-size: 12px;
            }
        }

        .post {
            width: 90%;
            margin: 0 auto;
            font-size: 14px;
            border-bottom: 1px solid #d2d6de;
            margin-bottom: 15px;
            padding-bottom: 15px;
            color: #666;

            .image {
                width: 100%;
                height: 100%;

            }

            .user-images {
                padding-top: 20px;
            }
        }

        .list-inline {
            padding-left: 0;
            margin-left: -5px;
            list-style: none;

            li {
                display: inline-block;
                padding-right: 5px;
                padding-left: 5px;
                font-size: 13px;
            }

            .link-black {

                &:hover,
                &:focus {
                    color: #999;
                }
            }
        }

    }

    .box-center {
        margin: 0 auto;
        display: table;
    }

    .text-muted {
        color: #777;
    }
    .total{
        margin-top: 20px;
    }
    .text strong{
        position: relative;
        bottom: 10px;
        color: #fe3834;font-size: 22px;font-weight: 400;
    }
    .summit{
        width: 100%;
        margin-top: 15px;
    }
</style>

