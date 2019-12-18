<template>
    <div>
        <el-col :span="12" :offset="3">
            <h4>Search Results</h4>

            <div>
                <div style="margin-top: 15px;" class="search-form">
                    <el-input placeholder="Please input" v-model="searchKey" class="input-with-select">
                        <el-select v-model="searchType" slot="prepend" placeholder="Select">
                            <el-option label="All" value="1"></el-option>
                            <el-option label="Author" value="2"></el-option>
                            <el-option label="Title" value="3"></el-option>
                            <el-option label="Genre" value="4"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search" @click="sendSearch"/>
                    </el-input>
                </div>
            </div>
            <p style="margin-top: 20px; color: gray; font-size:14px">Page 1 of about 8 results</p>
            <div style="margin-top: 10px;">
                <div v-for="item in searchItems" :key="item.item.warehouse_id">
                    <SearchResultItem :item="item.item"/>
                </div>
            </div>
        </el-col>
        <el-col :span="8" :offset="1">
            <RelatedShelves :shelves-info="shelvesInfo"/>
        </el-col>
    </div>
</template>

<script>
    import SearchResultItem from "../../components/search_result/SearchResultItem/index"
    import RelatedShelves from "../../components/search_result/RelatedShelves/index"

    export default {
        name: "SearchResult",
        data: () => {
            return {
                searchKey: '',
                searchType: '1',
                searchItems: [{
                    "item": {
                        "book_info": {
                            "book_id": "0000195170342",
                            "book_title": "Washington's Crossing",
                            "book_cover": "https://images.gr-assets.com/books/1353284022m/1206073.jpg",
                            "book_rating": 4,
                            "author": {"author_name": "Carolyn Keene", "author_id": 2588}
                        }, "warehouse_id": 1, "publish_year": 2010, "borrowed_times": 0, "email": "test@gmail.com"
                    }, "num": 1
                }],
                shelvesInfo: [
                    {name: 'picture-books', nums: '1,573,078'},
                    {name: 'childrens', nums: '1,554,679'},
                    {name: 'humor', nums:  '1,451,853'},
                    {name: 'storytime', nums: '158,031'}

                ]
            }
        },
        components: {
            SearchResultItem,
            RelatedShelves
        },
        methods: {
            sendSearch() {
                console.log('send search info: ', this.searchKey, this.searchType)
                this.searchItems = [{
                    "item": {
                        "book_info": {
                            "book_id": "0000195170342",
                            "book_title": "Washington's Crossing",
                            "book_cover": "https://images.gr-assets.com/books/1353284022m/1206073.jpg",
                            "book_rating": 4,
                            "author": {"author_name": "Carolyn Keene", "author_id": 2588}
                        }, "warehouse_id": 1, "publish_year": 2003, "borrowed_times": 0, "email": "test@gmail.com"
                    }, "num": 1
                }, {
                    "item": {
                        "book_info": {
                            "book_id": "0025986247522",
                            "book_title": "One Tuesday Morning (9/11, #1)",
                            "book_cover": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
                            "book_rating": 0,
                            "author": {"author_name": "Jay McInerney", "author_id": 826}
                        }, "warehouse_id": 3, "publish_year": 2019, "borrowed_times": 0, "email": "phong@gmail.com"
                    }, "num": 1
                }]
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
</style>

<style scoped>

</style>