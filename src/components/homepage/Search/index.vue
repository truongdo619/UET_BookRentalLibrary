<template>
    <div class="book-search">
        <div class="search-title-area">
            <h1 class="search-title">BOOK SEARCH</h1>
            <p class="search-des">Reading lists begin with the shelf full of hope util the year flies</p>
        </div>
        <div class="search-form flex-row-center">
            <div class="search-form-item">
                <p class="search-form-item-title">Category</p>
                <el-select placeholder="Choose" v-model="category">
                    <el-option
                            v-for="item in categoryOptions"
                            :key="item.category_id"
                            :label="item.category_name"
                            :value="item.category_id"
                            size="small"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="search-form-item" style="width: 450px">
                <p class="search-form-item-title">Search</p>
                <el-input
                        style="width: 100%"
                        class="inline-input"
                        v-model="searchKey"
                        placeholder="Star Wars, Harry Potter, ..."
                        @keyup.enter.native="sendSearch"
                />
            </div>
            <el-button type="danger" class="submit-btn no-focus-outline" @click="sendSearch">
                <font-awesome-icon icon="search" />
            </el-button>
        </div>
    </div>
</template>

<script>
    import {getAllCategories} from '../../../services/category/categories_api'

    export default {
        name: 'Search',
        data: () => {
            return {
                category: 0,
                searchKey: '',
                categoryOptions: [],
                daterange: []
            }
        },
        async mounted() {
            let res = await getAllCategories({limit: -1})

            console.log(res)
            this.categoryOptions = res.data
            this.categoryOptions.unshift({category_name: 'All', category_id: 0})
        },
        methods: {
            sendSearch() {
                this.$router.push(`/search/result?q=${this.searchKey}&category=${this.category}`)
            }
        }
    }
</script>

<style>
   .search-form-item .el-input__inner {
       border: none;
       font-size: 18px;
       color: #b1b1b1;
       padding-left: 0;
   }

    .search-form-item .el-select .el-input .el-select__caret {
        font-size: 22px;
        font-weight: 700;
        color: #b1b1b1;
    }

    .search-form-item .el-range-editor .el-range-input {
        color: #b1b1b1;
        font-size: 18px;
    }

    .search-form-item .el-date-editor .el-range-separator {
        color: #b1b1b1;
        font-size: 18px;
    }

   .submit-btn span {
       font-size: 25px;
   }

</style>

<style scoped>
    .book-search * {
        text-align: center;
    }

    .search-title-area {
        margin-bottom: 5%;
    }

    .search-title {
        font-size: 60px;
        font-weight: bold;
        letter-spacing: 1px;
    }

    .search-form {
        width: 70%;
        margin: auto;
        justify-content: center;
    }

    .search-form-item {
        background-color: white;
        border-radius: 8px;
        padding: 10px 15px 10px 20px;
        border: 1px solid #dedede;
        margin-right: 20px;
    }

    .search-form-item-title {
        text-align: left;
        color: #b1b1b1;
        font-size: 14px;
        margin-bottom: -1px;
        /*font-weight: 400;*/
    }

    .submit-btn {
        height: 80px;
        width: 120px;
        border-radius: 8px;
        background-color: #d96464;
    }

</style>
