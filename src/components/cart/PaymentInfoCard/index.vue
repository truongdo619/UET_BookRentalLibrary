<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>Order Info ({{items.length}} books)</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="editFunc">Edit</el-button>
        </div>
        <div v-for="item in items" :key="item.item.warehouse_id">
            <span><a href="#!" @click="() => {gotoBook(item.item.book_info.book_id)}">{{ item.item.book_info.book_title}}</a></span>
            <span style="float: right">${{item.item.price}}</span>
        </div>

        <el-divider/>
        <div class="text item">
            <span>{{items.length}} books:</span>
            <span class="float-right">${{priceSum}}</span>
        </div>
        <div class="text item">
            <span>Shipping:</span>
            <span class="float-right">$0</span>
        </div>
        <el-divider/>
        <div class="text item" style="min-height: 30px">
            <span>Total:</span>
            <strong class="float-right">${{priceSum}}</strong>
            <br/>
            <small class="float-left">(VAT included)</small>
        </div>
    </el-card>
</template>

<script>
    import {getCartItems} from '../../../services/cart/cart_services'

    export default {
        name: "PaymentInfoCard",
        props: ['editFunc'],
        data: () => {
            return {
                items: []
            }
        },
        mounted() {
            this.reloadItems()
        },
        methods: {
            reloadItems() {
                let items = getCartItems()
                this.items = items
                console.log(this.items)

            },
            gotoBook(ISBN){
                this.$router.push({name: 'book_detail', params: {id: ISBN}})
            },
        },
        computed: {
            priceSum() {
                return this.items.reduce((prev, cur) => prev + cur.item.price, 0)
            },
        }
    }
</script>

<style scoped>

    .text strong {
        position: relative;
        bottom: 10px;
        color: #fe3834;
        font-size: 22px;
        font-weight: 400;
    }

</style>