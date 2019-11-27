<template>
    <el-col :span="20" :offset="2">
        <el-row class="border_raidus" style="min-height: calc(90vh - 50px); display: flex">
            <el-col :span="4" class="bg_light_gray">
                    <el-button type="primary" icon="el-icon-plus" round style="margin: 20px 0 10px 20px"> New product</el-button>
                    <el-menu
                            :default-active="default_active"
                            :collapse="isCollapse"
                            :background-color="variables.menuBg"
                            :text-color="variables.menuText"
                            :unique-opened="false"
                            :collapse-transition="true"
                            mode="vertical"
                    >
                        <el-menu-item index="1"> <i class="el-icon-document"></i><span slot="title">Home</span></el-menu-item>
                        <el-menu-item index="2"> <i class="el-icon-location"></i ><span slot="title">Wishlist</span></el-menu-item>
                        <el-menu-item index="3"> <i class="el-icon-location-outline"></i><span slot="title">Purchase status</span></el-menu-item>
                    </el-menu>
            </el-col>
            <el-col :span="20"  >
                <list-cate></list-cate>
                <list-item></list-item>
            </el-col>
        </el-row>
    </el-col>
</template>
<script>
    import ListCate from "../components/list_cate/index";
    import ListItem from "../components/list_item/index";
    export default {
        name : "RentalShow",
        components: {ListItem, ListCate},
        data(){
            return{
                sidebar: {
                    opened: false,
                    withoutAnimation: false
                },
                variables : {
                    menuBg: '#f4f9ff',
                    menuText: '#bfcbd9',

                },
                default_active : '1'
            }
        },
    }
</script>

<style>
    .border_raidus{
        border: 1px solid transparent;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .border_raidus .el-menu{
        border-right: none;
    }
    .bg_light_gray{
        background-color: #f4f9ff;
    }
</style>
