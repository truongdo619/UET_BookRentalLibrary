<template>
    <div :style="{position : 'relative'}">
        <el-card :body-style="{ padding: '2px'}" class="image_center" :style="{marginBottom : '20px'}">
            <img :src="bookImage" class="image" :alt="bookId">
        </el-card>
        <div>
            <el-button class ="pos_center" type="success">Want to read <i class="el-icon-arrow-bottom el-icon-bottom"></i></el-button>
            <div class="al-center">
                <h6 :style="{color: 'gray'}">Rate it now</h6>
            </div>
            <el-rate :value="rateNum" @change="handleRateChange" class="al-center"></el-rate>
        </div>
    </div>
</template>

<script>
    import {rateBook} from '../../../../services/users/user_api'
    import {isAuthenticated} from '../../../../services/auth_services'

    export default {
        name: "bookImage",
        props: {
            bookId: {
                type: String,
                required: true,
            },
            bookImage: {
                type: String,
                required: true,
            }
        },
        data: () => {
            return {
                rateNum: 0
            }
        },
        methods: {
            async handleRateChange(rate) {
                if (!isAuthenticated()){
                    this.$router.push({name: 'login'})
                }
                let response = await rateBook(this.bookId, rate)
                console.log(response)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bg-gray{
        background-color: #f6f6f6;
        padding: 60px 0;
    }
    .full-width {
        width: 100%;
    }
    .pos_center{
        position:relative;
        left:50%;
        transform: translateX(-50%);
        margin-bottom: 10px;
    }
    .al-center{
        text-align: center;
    }
    .image{
        object-fit: cover;
        max-width: 100%;
        height: auto;
        width: 100%;
    }
</style>
