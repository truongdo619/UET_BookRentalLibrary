<template>
    <!--    <el-card class="box-card">-->
    <el-col :span="21" :offset="1">

        <el-row style="min-height: 500px; display: flex">
            <el-col :span="17" class="user-activity border_raidus">
                <div class="shipping-area">
                    <h4>1. Shipping methods</h4>
                    <div class="payment-element">
                        <el-radio label="1" v-model="shippingMethod">
                            <div style="display:inline-block">
                                <span class="shipping-method">Basic shipping method </span>
                                <br/>
                                <div class="shipping-info">
                                    <div class="shipping-cost">Free</div>
                                    <div class="shipping-time">3-5 days</div>
                                </div>
                            </div>
                        </el-radio>
                    </div>
                </div>

                <div class="booktime-area" :class="{'disable-title': !isPayWithBT}">
                    <h4>2. Pay with Book'sTime</h4>
                    <div class="payment-element">
                        <el-checkbox v-model="isPayWithBT" :disabled="userInfo.cash < priceSum">
                            <span style="font-size:15px">
                                {{ userInfo.cash >= priceSum ? `Pay with Book's Time cash ($${priceSum})`: 'You do not have enough cashes!' }}
                            </span>
                        </el-checkbox>
                    </div>
                </div>
                <div class="payment-area" :class="{'disable-title': isPayWithBT}">
                    <h4>3. Payment methods</h4>
                    <div class="payment-element">
                        <el-radio v-model="paymentMethod" :label="1">Cash on delivery </el-radio>
                        <el-radio v-model="paymentMethod" :label="2">PayPal</el-radio>
                    </div>
                </div>
            </el-col>
            <el-col :span="6" :offset="1" class="total">
                <UserInfoCard :user-info="paymentInfo" :edit-func="() => {gotoStepFunc(2)}"/>
                <br/>
                <PaymentInfoCard :edit-func="() => {gotoStepFunc(1)}"/>

                <el-button class="summit" type="danger" @click="next">Submit</el-button>
            </el-col>
        </el-row>
    </el-col>
    <!--    </el-card>-->
</template>

<script>
    import {getCartItems} from '../../../services/cart/cart_services'
    import {getUserInfo} from '../../../services/users/user_api'
    import UserInfoCard from '../UserInfoCard/index'
    import PaymentInfoCard from '../PaymentInfoCard/index'

    export default {
        name: "StepThree",
        props: ['paymentInfo', 'gotoStepFunc'],
        components: {
            UserInfoCard,
            PaymentInfoCard
        },
        data: () => {
            return {
                shippingMethod: '1',
                cartItems: [],
                userInfo: {},
                isPayWithBT: false,
                paymentMethod: 1
            }
        },
        async mounted() {
            this.reloadItems()
            let res = await getUserInfo()
            this.userInfo = res.data
        },
        methods: {
            reloadItems() {
                let items = getCartItems()
                this.cartItems = items
            },
        },
        computed: {
            priceSum() {
                return this.cartItems.reduce((prev, cur) => prev + cur.item.price, 0)
            }
        },
        watch: {
            paymentMethod: function (val) {
                if (val !== -1) {
                    this.isPayWithBT = false
                }
            },
            isPayWithBT: function (val) {
                if (val) {
                    this.paymentMethod = -1
                }
            }
        }
    }
</script>

<style>
    .payment-element .el-cascader-node > .el-radio, .el-radio:last-child {
        display: flex;
        align-items: center;
    }
</style>

<style scoped>
    .payment-element {
        min-height: 20px;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #bebebe;
        margin: 20px auto;
        padding: 15px;
    }

    .disable-title h4{
        color: #8b919d;
    }

    .shipping-method {
        font-weight: 600;
        /*color: #647ca3;*/
        font-size: 15px;
        line-height: 2;
    }

    .shipping-cost, .shipping-time {
        display: inline-block;
    }

    .shipping-cost {
        border-radius: 15px;
        padding: 5px 10px;
        background-color: #4aa347;
        color: white;
        margin-right: 10px;
    }

    .shipping-time {
        border-radius: 15px;
        padding: 5px 10px;
        background-color: #ffc254;
        color: white;
        margin-right: 20px;
    }

    .summit {
        width: 100%;
        margin-top: 15px;
    }
</style>