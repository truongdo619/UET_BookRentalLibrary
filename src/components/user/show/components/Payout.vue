<template>
    <el-row class="payout">
        <el-col class="payout-col" :span="3" style="padding-top: 50px;">
            <h2 style="color: #4f6c8f; font-weight: 500">Payout</h2>
        </el-col>
        <el-col class="payout-col" :span="7" style="padding-top: 13px;">
            <b-card>
                <b-media no-body>
                    <img :src="balance" class="image" />

                    <b-media-body class="ml-3" style="padding-top: 5px;">
                        <div style="color: #9e9e9e; font-size: 12px; font-weight: bold">Balance</div>
                        <span style="font-size: 30px; color: #4f6c8f ">{{this.cash}}.<span style="font-size: 22px">00 USD</span></span>
                    </b-media-body>
                </b-media>
            </b-card>
        </el-col>
        <el-col class="payout-col" :span="7" style="padding-top: 13px;border-right: none">
            <b-card>
                <b-media no-body>
                    <img :src="available_balance" class="image" />

                    <b-media-body class="ml-3" style="padding-top: 5px;">
                        <div style="color: #9e9e9e; font-size: 12px; font-weight: bold">Available to Payout</div>
                        <span style="font-size: 30px; color: #4f6c8f ">{{this.cash}}.<span style="font-size: 22px">00 USD</span></span>
                    </b-media-body>
                </b-media>
            </b-card>
        </el-col>
        <el-col class="payout-col" :span="7" style="padding-top: 45px; border-right: none; padding-left: 50px">
            <el-button @click="handleWithdrawal" class="no-focus-outline" type="primary" round style="background-color: #3888fa ">Withdrawal</el-button>
        </el-col>
    </el-row>
</template>

<script>
    import balance from "../../../../assets/images/balance.png"
    import available_balance from "../../../../assets/images/available_balance.png"

    export default {
        name : "Payout",
        props : ['cash'],
        data(){
            return{
                balance_num : 200,
                available_balance_num : 168,
                balance : balance,
                available_balance : available_balance
            }
        },
        methods : {
            handleWithdrawal(){

            }
        }
    }

</script>

<style lang="scss">
    .is-top{
        margin-bottom: 0px;
    }
    .el-tab-pane{
        margin-top: 15px;
    }
</style>

<style scoped lang="scss">
    .payout{
        .payout-col{
            border-right: 2px solid #f6f6f6;
            border-bottom: 2px solid #f6f6f6;
            min-height: 130px;
            padding-left: 15px;
        }
        .card{
            border: none;
        }
    }

</style>

