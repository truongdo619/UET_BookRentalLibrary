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
                        <el-radio v-model="paymentMethod" :label="1">Cash on delivery</el-radio>
                        <br/>
                        <el-radio v-model="paymentMethod" :label="2">PayPal</el-radio>
                        <br/>
                        <el-radio v-model="paymentMethod" :label="3">Debit or Credit Card</el-radio>
                        <br/>
                        <InteractivePaycard v-if="paymentMethod === 3"/>
                    </div>
                </div>
            </el-col>
            <el-col :span="6" :offset="1" class="total">
                <UserInfoCard :user-info="paymentInfo" :edit-func="() => {gotoStepFunc(2)}"/>
                <br/>
                <PaymentInfoCard :edit-func="() => {gotoStepFunc(1)}"/>
                <br/>
                <el-button class="summit" type="danger" v-if="paymentMethod !== 2" @click="submitPayment">Submit</el-button>
                <div v-else ref="paypal"></div>
            </el-col>
        </el-row>
    </el-col>
    <!--    </el-card>-->
</template>

<script>
    import {getCartItems, removeAllItems} from '../../../services/cart/cart_services'
    import {borrowBooks, getUserInfo} from '../../../services/users/user_api'
    import UserInfoCard from '../UserInfoCard/index'
    import PaymentInfoCard from '../PaymentInfoCard/index'
    import InteractivePaycard from '../IneractivePayCard/index'

    export default {
        name: "StepThree",
        props: ['paymentInfo', 'gotoStepFunc'],
        components: {
            UserInfoCard,
            PaymentInfoCard,
            InteractivePaycard
        },
        data: () => {
            return {
                shippingMethod: '1',
                cartItems: [],
                userInfo: {},
                isPayWithBT: false,
                paymentMethod: 1,
                loaded: false
            }
        },
        async mounted() {
            this.reloadItems()
            let res = await getUserInfo()
            this.userInfo = res.data
            // this.loadPayPal()
        },
        methods: {
            reloadItems() {
                let items = getCartItems()
                this.cartItems = items
            },
            async submitPayment() {
                let type = this.isPayWithBT ? 'cash' : 'paypal'
                let res = await this.borrowBooks(type)
                if (res === 'Error') {
                    this.$notify({
                        title: 'Oops!',
                        message: 'Error',
                        type: 'error'
                    })
                } else
                    this.cleanCart()
            },
            cleanCart() {
                this.$notify({
                    title: 'Thank you!',
                    message: 'Order success',
                    type: 'success'
                });
                removeAllItems()
                this.$router.push({name: 'home'})
            },
            async borrowBooks(type) {
                let res = await borrowBooks({
                    warehouse_id_list: this.paymentInfo.books,
                    address: this.paymentInfo.address,
                    phone: this.paymentInfo.phone,
                    payment_type: type
                })
                return res
            },
            loadPayPal() {
                const script = document.createElement("script");
                script.src =
                    "https://www.paypal.com/sdk/js?client-id=AXf5iDBdkPjcRgd3vbsMGOLZDROiZuUe6qUJgkvYMou4Y8kWzUUDLAgsmhzsMVR1eJpWZiQLbm4u6ghu";
                script.addEventListener("load", this.setLoaded);
                document.body.appendChild(script);
            },
            setLoaded: function () {
                this.loaded = true;
                console.log(window.paypal.Buttons)
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        description: 'Book\'s Time shop',
                                        amount: {
                                            currency_code: 'USD',
                                            value: this.priceSum,
                                            breakdown: {
                                                item_total: {
                                                    currency_code: 'USD',
                                                    value: this.priceSum
                                                }
                                            },
                                        },
                                        shipping: {
                                            name: {full_name: this.paymentInfo.full_name},
                                            address: {
                                                address_line_1: 'No 4',
                                                address_line_2: 'Chelsea',
                                                admin_area_2: 'Birmingham',
                                                admin_area_1: 'AL',
                                                postal_code: '35201',
                                                country_code: 'US'
                                            }
                                        },
                                        items: this.paypalItems
                                    }
                                ]
                            })
                        },
                        onApprove: async (data, actions) => {
                            const order = await actions.order.capture()
                            console.log(data)
                            console.log(order)
                            let res = await this.borrowBooks('paypal')
                            if (res === 'Error') {
                                this.$notify({
                                    title: 'Oops!',
                                    message: 'Error',
                                    type: 'error'
                                });
                            } else
                                this.cleanCart()
                         },
                        onError: err => {
                            console.log(err)
                        }
                    })
                    .render(this.$refs.paypal)
            }
        },
        computed: {
            priceSum() {
                return this.cartItems.reduce((prev, cur) => prev + cur.item.price, 0)
            },
            paypalItems() {
                let paypalItems = this.cartItems.map(item => ({
                    name: item.item.book_info.book_title,
                    unit_amount: {currency_code: 'USD', value: item.item.price},
                    quantity: '1'
                }))
                console.log('paypal items: ', paypalItems)
                return paypalItems
            }
        },
        watch: {
            paymentMethod: function (val) {
                if (val !== -1) {
                    this.isPayWithBT = false
                    if (val === 2) {
                        this.loadPayPal()
                    }
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

    .disable-title h4 {
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
        /*margin-top: 15px;*/
    }
</style>