<template>
    <div>
        <el-row :gutter="40" style="margin-top: 10px">
            <el-col :offset="1">
                <b style="font-size: 2rem">Category</b>
            </el-col>
        </el-row>
        <el-row :gutter="40" class="panel-group">
            <el-col class="categoryR" :span="4" v-for="category in categories" :key="category.name" :style="{backgroundImage: 'linear-gradient(to top right, ' + category.color[0] + ', ' + category.color[1] + ')'}">
                <img :src="category.icon" :alt="category.name" class="category-icon">
                <p class="category-name">{{category.name.toUpperCase()}} <br> + 203 items</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import biography_icon from  '../../../../assets/images/biography_icon.png'
    import business_icon from  '../../../../assets/images/business_icon.png'
    import cookbook_icon from  '../../../../assets/images/cookbook_icon.png'
    import romantic_icon from  '../../../../assets/images/romantic_icon.png'

    export default {
        name: 'ListCate',
        data: () => {
            return {
                categories: [
                    {
                        'name': 'biography',
                        'icon': biography_icon,
                        'color': ['#fbac7e', '#f7cd69']
                    },
                    {
                        'name': 'business',
                        'icon': business_icon,
                        'color': ['#8a94e1', '#6bc0f7']
                    },
                    {
                        'name': 'romantic',
                        'icon': romantic_icon,
                        'color': ['#fc5ccb', '#fc82a2']
                    },
                    {
                        'name': 'cookbooks',
                        'icon': cookbook_icon,
                        'color': ['#fc82a2', '#adc8fe']
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .panel-group{
        margin-top: 40px;
    }

.categoryR{
    border-radius: 10px;
    transform: scale(0.8);

    .category-icon{
        position: relative;
        top:-30px;
        left: 10px;
        transform: scale(1.2);
        height: 111px;
    }
    .category-name{
        color: white;
    }
}
.panel-group .categoryR:first-child{
    margin-left: 4.16667%;
}
</style>
