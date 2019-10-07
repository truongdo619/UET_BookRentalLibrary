<template>
    <div class="list-categories">
        <h1 class="list-title">Find More Category</h1>
        <div class="list-content flex-row-center">
            <div class="list-category-item flex-row-center" v-for="category in categories" :key="category.name" :style="{backgroundImage: 'linear-gradient(to top right, ' + category.color[0] + ', ' + category.color[1] + ')'}">
                <img :src="category.icon" :alt="category.name" class="category-icon">
                <p class="category-name">{{category.name.toUpperCase()}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import biography_icon from  '../../assets/images/biography_icon.png'
    import business_icon from  '../../assets/images/business_icon.png'
    import cookbook_icon from  '../../assets/images/cookbook_icon.png'
    import romantic_icon from  '../../assets/images/romantic_icon.png'

    export default {
        name: 'ListCategories',
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
    .list-categories {
        .list-title {
            margin-top: 80px;
            margin-bottom: 60px;
            font-size: 58px;
            letter-spacing: 1px;
            font-weight: bold;
        }


        .list-content {
            .list-category-item {
                min-height: 160px;
                min-width: 300px;
                padding: 40px;
                justify-content: flex-start;
                border-radius: 10px;
                margin-right: 45px;
                cursor: pointer;

                .category-icon {
                    height: 80px;
                    background-color: transparent;
                    margin-right: 30px;
                }

                .category-name {
                    color: white;
                    font-size: 18px;
                    font-weight: 600;
                    letter-spacing: 1px;
                }
            }
        }
    }
</style>
