<template>
    <div class="comment">
        <b-card>
            <b-media no-body>
                <img :src="item.book_info.book_cover" class="image" :alt="item.book_info.book_title"/>

                <b-media-body class="ml-3">
                    <el-row>
                        <span><a href="#!" @click="handleBookDetail"><b class="cl-deepblue">{{item.book_info.book_title}}</b></a></span>
                        <span class="float-right"> rated it
                            <el-rate
                                v-model="item.book_info.book_rating"
                                disabled
                                score-template="{value} points"
                            />
                        </span>
                    </el-row>
                    <el-row>
                        <span>by: <a href="#!"><b
                                class="cl-deepblue">{{item.book_info.author.author_name}}</b></a></span>
                    </el-row>
                    <el-row>
                        <span><a href="#!"><b>${{item.price}}</b></a></span>
                        <span class="float-right">borrows
                            <el-input-number v-model="numDays" controls-position="right" @change="handleChange" :min="1"
                                             :max="30" size="small" width="20"/> days
                        </span>
                    </el-row>
                    <!--                    <el-row>-->
                    <!--                        <span>Rental date: {{item.date}}</span>-->
                    <!--                    </el-row>-->
                    <el-row>
                        <el-button type="text" @click="removeItem">Remove item</el-button>
                    </el-row>
                </b-media-body>
            </b-media>
        </b-card>
    </div>
</template>

<script>
    import {changeNumOfItem, removeAItem} from '../../../services/cart/cart_services'

    export default {
        name: "BookItem",
        props: ['item', 'reloadFunc', 'num'],
        data() {
            return {
                numDays: 0,
                isGetNum: false
            }
        },
        methods: {
            handleBookDetail() {
                this.$router.push({name: 'book_detail', params: {id: this.item.book_info.book_id}})
            },
            removeItem() {
                removeAItem(this.item.warehouse_id)
                this.reloadFunc()
            },
            handleChange(currentValue) {
                changeNumOfItem(this.item, currentValue)
            }
        },
        updated() {
            if (!this.isGetNum) {
                this.numDays = this.num
                this.isGetNum = true
            }
        },
    }

</script>

<style scoped>
    .comment .card {
        border: none;
    }

    .rate .card {
        border: none;
    }

    .comment .el-rate {
        position: relative;
        display: inline-block;
        top: -3px;
    }

    .cl-deepblue {
        color: #3b6d74 !important;
    }

    .image {
        max-width: 100%;
        max-height: 100px;
    }
</style>
