<template>
<div class="header-bar flex-row-center">
    <div class="menu-icon">
        <font-awesome-icon id="menu-bar" icon="stream"></font-awesome-icon>
    </div>
    <div class="center-logo">
        <span>BOOK'S</span>
        <span>TIME</span>
    </div>
    <div class="right-menu">
        <el-button type="text" class="margin-right-25 no-focus-outline">
            <font-awesome-icon class="right-menu-icon" :icon="['far', 'heart']"></font-awesome-icon>
            <span class="right-menu-title">Wishlist</span>
        </el-button>
        <el-button type="text" class="no-focus-outline">
            <font-awesome-icon class="right-menu-icon" :icon="['far', 'user']"></font-awesome-icon>
            <span class="right-menu-title">Sign in</span>
        </el-button>
    </div>
</div>
</template>

<script>
    export default {
        name: 'HeaderBar'
    }
</script>

<style scoped>
    .header-bar {
        height: 100px;
        padding: 60px 60px 30px 60px;
        justify-content: space-between;
    }

    #menu-bar {
        font-size: 25px;
        cursor: pointer;
    }

    .center-logo {
        font-weight: bold;
        width: 50%;
        text-align: center;
        margin-left: 240px;
    }

    .center-logo span {
        font-size: 30px;
    }

    .center-logo span:first-child {
        color: #f26767;
    }


    .right-menu-icon, .right-menu-title {
        font-size: 16px;
        color: black;
    }

    .right-menu-icon {
        width: 40px;
    }

    .right-menu-title {
        letter-spacing: 1px;
        /*font-weight: 300;*/
    }

</style>
