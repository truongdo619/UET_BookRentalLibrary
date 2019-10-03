<template>
    <div class="header">
        <el-row>
            <el-col :span="20" :offset="2" class="navbar">
                <div id="logo">
                    <img class="logo_image" src="@/assets/images/book_details_page.png" alt="logo">
                </div>
                <div class="right-menu">
                    <el-button class="border_none">Login</el-button>
                    <el-button type="primary">Sign up</el-button>
                    <el-button class="border_none" icon="el-icon-shopping-cart-full">Cart</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
    #logo{
        float: left;
    }
    .right-menu {
        float: right;
        height: 100%;
        line-height: 50px;

        &:focus {
            outline: none;
        }

        .right-menu-item {
            display: inline-block;
            padding: 0 8px;
            height: 100%;
            font-size: 18px;
            color: #5a5e66;
            vertical-align: text-bottom;

            &.hover-effect {
                cursor: pointer;
                transition: background .3s;

                &:hover {
                    background: rgba(0, 0, 0, .025)
                }
            }
        }
    }
    .border_none{
        border:none;
    }
    .navbar{
        height: 100%;
        border-bottom: 2px solid #cfcfcf;
    }
</style>