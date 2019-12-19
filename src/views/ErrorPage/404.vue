<template>
    <div class="errPage-container">

        <el-row>
                <img style="position: relative;left: 50%;transform: translateX(-50%);" :src="errGif" alt="Girl has dropped her ice cream.">

        </el-row>
        <el-row>
            <h1 class="text-jumbo text-ginormous" style="text-align: center">
                Oops!
            </h1>

            <el-button style="position: relative;left: 50%;transform: translateX(-50%);" icon="arrow-left" class="pan-back-btn" @click="back">
                Back to Home
            </el-button>
        </el-row>
    </div>
</template>

<script>
    import errGif from '../../assets/images/404-page.gif'

    export default {
        name: 'Page404',
        data() {
            return {
                errGif: errGif
            }
        },
        methods: {
            back() {
                this.$router.push({name: 'home'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .errPage-container {
        width: 1000px;
        max-width: 100%;
        margin: 50px auto;
        .pan-back-btn {
            background: #008489;
            color: #fff;
            border: none!important;
        }
        .pan-gif {
            margin: 0 auto;
            display: block;
        }
        .pan-img {
            display: block;
            margin: 0 auto;
            width: 100%;
        }
        .text-jumbo {
            font-size: 60px;
            font-weight: 700;
            color: #484848;
        }
        .list-unstyled {
            font-size: 14px;
            li {
                padding-bottom: 5px;
            }
            a {
                color: #008489;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>
