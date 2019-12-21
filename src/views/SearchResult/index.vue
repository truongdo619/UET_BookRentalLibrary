<template>
    <div>
        <el-col :span="12" :offset="3">
            <h4>Search Results</h4>

            <div>
                <div style="margin-top: 15px;" class="search-form">
                    <el-input placeholder="Please input" v-model="query.q" class="input-with-select">
                        <el-select v-model="query.search_filter" slot="prepend" placeholder="Select">
                            <el-option label="All" value="all"></el-option>
                            <el-option label="Author" value="author_searchable"></el-option>
                            <el-option label="Title" value="title"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search" @click="sendSearch"/>
                    </el-input>
                    <span style="color: gray">Category: </span>
                    <el-select placeholder="Choose" v-model="query.category">
                        <el-option
                                v-for="item in categoryOptions"
                                :key="item.category_id"
                                :label="item.category_name"
                                :value="item.category_id">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <p style="margin-top: 20px; color: gray; font-size:14px">Page {{currentPage}} of about {{totalItems}} results</p>
            <div style="margin-top: 10px;">
                <div v-for="item in searchItems" :key="item.id">
                    <SearchResultItem :item="item"/>
                </div>
            </div>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="20"
                    :current-page.sync="currentPage"
                    :total="totalItems">
            </el-pagination>
        </el-col>
        <el-col :span="8" :offset="1">
            <RelatedShelves :shelves-info="relatedShelves"/>
        </el-col>
    </div>
</template>

<script>
    import SearchResultItem from "../../components/search_result/SearchResultItem/index"
    import RelatedShelves from "../../components/search_result/RelatedShelves/index"
    import {sendSearch} from '../../services/search/search_api'
    import {getAllCategories} from '../../services/category/categories_api'

    export default {
        name: "SearchResult",
        data: () => {
            return {
                query: {
                    q: '',
                    search_filter: 'all',
                    category: 0
                },
                currentPage: 1,
                totalItems: 0,
                categoryOptions: [],
                searchItems: [],
                shelvesInfo: []
            }
        },
        components: {
            SearchResultItem,
            RelatedShelves
        },
         async mounted() {
            this.query = this.$attrs
            this.sendSearch()
            // console.log(query)
             let res = await getAllCategories({limit: -1})

             this.categoryOptions = res.data
             this.categoryOptions.unshift({category_name: 'All', category_id: 0})
        },
        methods: {
            async sendSearch() {
                let search_filter;
                if (this.query.search_filter !== 'all')
                    search_filter = this.query.search_filter

                let category;
                if (this.query.category !== 0)
                    category = this.query.category
                let res = await sendSearch({...this.filter_object(this.query), search_filter, category, page: this.currentPage})
                this.searchItems = res.data.data
                this.totalItems = res.data.total
                this.shelvesInfo = res.aggs ? res.aggs[0] : []
            },
            filter_object(rawQueries) {
                return Object.keys(rawQueries)
                    .filter(key => rawQueries[key])
                    .reduce((obj, key) => {
                        obj[key] = rawQueries[key];
                        return obj;
                    }, {});
            }
        },
        computed: {
            relatedShelves() {
                if (this.shelvesInfo) {
                    return this.shelvesInfo.map(item => {
                        let ret = {
                            id: item.id,
                            nums: item.count,
                            name: this.categoryOptions.find(cate => cate.category_id === item.id).category_name
                        }

                        return ret
                    })
                } else return []
            }
        },
        watch: {
            currentPage: function () {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })
                this.sendSearch()
            }
        }
    }
</script>

<style>
    .search-form .el-select .el-input {
        width: 110px;
    }

    .search-form .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }

    .search-form .el-input.el-input--suffix .el-input__inner {
        border: none;
    }
</style>

<style scoped>

</style>