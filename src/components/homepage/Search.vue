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
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="search-form-item">
                <p class="search-form-item-title">Years</p>
                <el-date-picker
                        v-model="daterange"
                        type="monthrange"
                        align="right"
                        start-placeholder="From"
                        end-placeholder="To"
                        default-value="2019-10-01">
                </el-date-picker>
            </div>
            <div class="search-form-item" style="width: 450px">
                <p class="search-form-item-title">Search</p>
                <el-autocomplete
                        style="width: 100%"
                        class="inline-input"
                        v-model="searchKey"
                        :fetch-suggestions="querySearch"
                        placeholder="Books, Stories, Authors and more"
                        :trigger-on-focus="false"
                        @select="handleSelect"
                ></el-autocomplete>
            </div>
            <el-button type="danger" class="submit-btn no-focus-outline">
                <font-awesome-icon icon="search"></font-awesome-icon>
            </el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data: () => {
            return {
                category: '',
                searchKey: '',
                categoryOptions: [],
                daterange: []
            }
        },
        mounted() {
            this.categoryOptions = [
                { value: 'action-and-adventure', label: 'Action and adventure' },
                { value: 'art', label: 'Art' },
                { value: 'alternate-history', label: 'Alternate history' },
                { value: 'autobiography', label: 'Autobiography' },
                { value: 'anthology', label: 'Anthology' },
                { value: 'biography', label: 'Biography' },
                { value: 'chick-lit', label: 'Chick lit' },
                { value: 'book-review', label: 'Book review' },
                { value: 'childrens', label: 'Children\'s' },
                { value: 'cookbook', label: 'Cookbook' },
                { value: 'diary', label: 'Diary' },
                { value: 'coming-of-age', label: 'Coming-of-age' },
                { value: 'dictionary', label: 'Dictionary' },
                { value: 'crime', label: 'Crime' },
                { value: 'encyclopedia', label: 'Encyclopedia' },
                { value: 'drama', label: 'Drama' },
                { value: 'guide', label: 'Guide' },
                { value: 'fairytale', label: 'Fairytale' },
                { value: 'health', label: 'Health' },
                { value: 'fantasy', label: 'Fantasy' },
                { value: 'history', label: 'History' },
                { value: 'graphic-novel', label: 'Graphic novel' },
                { value: 'journal', label: 'Journal' },
                { value: 'historical-fiction', label: 'Historical fiction' },
                { value: 'math', label: 'Math' },
                { value: 'horror', label: 'Horror' },
                { value: 'memoir', label: 'Memoir' },
                { value: 'mystery', label: 'Mystery' },
                { value: 'prayer', label: 'Prayer' },
                { value: 'paranormal-romance', label: 'Paranormal romance' },
                { value: 'religion-spirituality-and-new-age', label: 'Religion, spirituality, and new age' },
                { value: 'picture-book', label: 'Picture book' },
                { value: 'textbook', label: 'Textbook' },
                { value: 'poetry', label: 'Poetry' },
                { value: 'review', label: 'Review' },
                { value: 'political-thriller', label: 'Political thriller' },
                { value: 'science', label: 'Science' },
                { value: 'romance', label: 'Romance' },
                { value: 'self-help', label: 'Self help' },
                { value: 'satire', label: 'Satire' },
                { value: 'travel', label: 'Travel' },
                { value: 'science-fiction', label: 'Science fiction' },
                { value: 'true-crime', label: 'True crime' },
                { value: 'short-story', label: 'Short story' },
                { value: 'suspense', label: 'Suspense' },
                { value: 'thriller', label: 'Thriller' },
                { value: 'young-adult', label: 'Young adult' }
            ]
        },
        methods: {
            querySearch(queryString, cb) {
                let links = [
                    { "value": "vue", "link": "https://github.com/vuejs/vue" },
                    { "value": "element", "link": "https://github.com/ElemeFE/element" },
                    { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
                    { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
                    { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
                    { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
                    { "value": "babel", "link": "https://github.com/babel/babel" }
                ]
                let createFilter = (queryString) => {
                    return (link) => {
                        return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                    }
                }
                let results = queryString ? links.filter(createFilter(queryString)) : links;
                // call callback function to return suggestions
                cb(results);
            },
            handleSelect(item) {
                console.log(item);
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
