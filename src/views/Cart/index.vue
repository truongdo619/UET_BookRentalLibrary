<template>
    <div id="cart">
        <div v-if="activeStep >= 1 && activeStep <= 2">
            <el-steps :space="300" :active="activeStep"
                      finish-status="success" align-center id="cart-step">
                <el-step title="Cart Info"/>
                <el-step title="User Info"/>
                <el-step title="Payment"/>
            </el-steps>
        </div>
        <div id="step-one" v-if="activeStep === 0">
            <StepOne :payment-info.sync="paymentInfo" :next-step-func="nextStep"/>
        </div>
        <div id="step-two" v-if="activeStep === 1">
            <StepTwo :payment-info.sync="paymentInfo" :next-step-func="nextStep" :prev-step-func="prevStep"/>
        </div>
        <div id="step-three" v-if="activeStep === 2">
            <StepThree :payment-info="paymentInfo" :goto-step-func="gotoStep" />
        </div>
    </div>
</template>

<script>
    import StepOne from '../../components/cart/StepOne/index'
    import StepTwo from '../../components/cart/StepTwo/index'
    import StepThree from '../../components/cart/StepThree/index'

    export default {
        name: "Cart",
        components: {
            StepOne,
            StepTwo,
            StepThree
        },
        data: () => {
            return {
                activeStep: 0,
                paymentInfo: {
                    books: [],
                    address: '',
                    phone: '',
                    full_name: '',
                }
            }
        },
        methods: {
            nextStep() {
                this.activeStep = Math.min( 2, this.activeStep + 1)
            },
            prevStep() {
                this.activeStep = Math.max(0, this.activeStep - 1)
            },
            gotoStep(step) {
                this.activeStep = step - 1
            }
        },
    }
</script>

<style scoped lang="scss">
    #cart {
        width: 80%;
        margin: auto;
        min-height: 500px;

        #cart-step {
            margin: 0 25%;
        }

        #step-two {
            margin: 50px 15%
        }

        #step-three {
            margin: 50px 10%
        }
    }
</style>
