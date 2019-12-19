<template>
    <div id="step-two-body">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-button style="padding: 3px 0" type="text" icon="el-icon-arrow-left" @click="handleBack">Back</el-button>
                <span id="card-title">Confirm user Info</span>
            </div>
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="Full name">
                    <el-input v-model="form.fullName"/>
                </el-form-item>
                <el-form-item label="Phone Number">
                    <el-input v-model="form.phone"/>
                </el-form-item>
                <el-form-item label="Address">
                    <el-input type="textarea" v-model="form.address"/>
                </el-form-item>
                <el-form-item >
                    <el-button style="float: right" type="primary" @click="onSubmit">Confirm</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "StepTwo",
        props: ['paymentInfo', 'nextStepFunc', 'prevStepFunc'],
        data: () => {
            return {
                form: {
                    fullName: '',
                    phone: '',
                    address: '',
                },
                isFirstFill: true
            }
        },
        methods: {
            handleBack() {
                this.prevStepFunc()
            },
            onSubmit() {
                let newInfo = JSON.parse(JSON.stringify(this.paymentInfo))
                newInfo.address = this.form.address
                newInfo.full_name = this.form.fullName
                newInfo.phone = this.form.phone
                this.$emit('update:paymentInfo', newInfo)
                this.nextStepFunc()
            }
        },
        created() {
            this.form.address = this.paymentInfo.address
            this.form.phone = this.paymentInfo.phone
            this.form.fullName = this.paymentInfo.full_name
        }
    }
</script>

<style lang="scss">
    #step-two-body {
        .text {
            font-size: 14px;
        }

        .item {
            margin-bottom: 18px;
        }

        .clearfix {

            &:before, &:after {
                display: table;
                content: "";
            }

            &:after {
                clear: both;
            }

            #card-title {
               font-size: 15px;
                margin-left: 20px;
               font-weight: 500;
            }
        }
    }
</style>

<style scoped>

</style>