<template>
    <div :style="{position : 'relative'}">
        <el-card :body-style="{ padding: '2px'}" class="image_center" :style="{marginBottom : '20px'}">
            <img :src="bookImage" class="image" :alt="bookId">
        </el-card>
        <div>
            <!--            <el-button class ="pos_center" type="success">Want to read <i class="el-icon-arrow-bottom el-icon-bottom"></i></el-button>-->
            <!--            <div class="al-center">-->
            <!--                <h6 :style="{color: 'gray'}">Rate it now</h6>-->
            <!--            </div>-->
            <!--            <el-rate :value="rateNum" @change="handleRateChange" class="al-center"></el-rate>-->
            <el-button class="pos_center" type="text" @click="ratingDialogVisible = true">Review this book</el-button>
            <el-dialog
                    title="Review this book"
                    :visible.sync="ratingDialogVisible"
                    width="20%">
                <el-form>
                    <el-form-item label="Rating Number">
                        <el-rate v-model="rateNum" class="al-center"></el-rate>
                    </el-form-item>
                </el-form>
                <el-button @click="ratingDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="handleRateChange">Confirm</el-button>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import {rateBook} from '../../../../services/users/user_api'
    import {isAuthenticated} from '../../../../services/auth_services'

    export default {
        name: 'bookImage',
        props: {
            bookId: {
                type: String,
                required: true,
                default: ''
            },
            bookImage: {
                type: String,
                required: true,
                default: 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png'
            }
        },
        data: () => {
            return {
                rateNum: 0,
                ratingDialogVisible: false
            }
        },
        methods: {
            async handleRateChange() {
                if (!isAuthenticated()) {
                    this.$router.push({name: 'login'})
                }
                let response = await rateBook(this.bookId, this.rateNum)
                this.ratingDialogVisible = false
                this.ratingNum = 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bg-gray {
        background-color: #f6f6f6;
        padding: 60px 0;
    }

    .full-width {
        width: 100%;
    }

    .pos_center {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 10px;
    }

    .al-center {
        text-align: center;
    }

    .image {
        object-fit: cover;
        max-width: 100%;
        height: auto;
        width: 100%;
    }
</style>
