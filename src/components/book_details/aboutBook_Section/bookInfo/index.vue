<template>
    <el-row>
        <!--        <div>{{bookDetail}}</div>-->
        <el-row>
            <h1>{{bookDetail.book_title}}</h1>
            <h5>by: {{bookDetail.author.author_name}}</h5>
            <el-rate
                    v-model="bookRating"
                    disabled
                    show-score
                    :disabled-void-color="disabled_color"
                    score-template="{value} points">
            </el-rate>
            <el-breadcrumb separator=".">
                <el-breadcrumb-item>
                    <el-popover
                            width="400"
                            trigger="click">
                        <div class="user-skills user-bio-section">
                            <div class="user-bio-section-header"><svg-icon icon-class="skill" /><span>Rating details</span></div>
                            <div class="user-bio-section-body">
                                <div class="progress-item">
                                    <i class="el-icon-star-on" style="color: #99A9BF"></i>
                                    <el-progress :percentage="rating_detail[1]" />
                                </div>
                                <div class="progress-item">
                                    <i class="el-icon-star-on" style="color: #99A9BF"></i>
                                    <i class="el-icon-star-on" style="color: #99A9BF"></i>
                                    <el-progress :percentage="rating_detail[2]" />
                                </div>
                                <div class="progress-item">
                                    <i class="el-icon-star-on" style="color: #F7BA2A"></i>
                                    <i class="el-icon-star-on" style="color: #F7BA2A"></i>
                                    <i class="el-icon-star-on" style="color: #F7BA2A"></i>
                                    <el-progress :percentage="rating_detail[3]" />
                                </div>
                                <div class="progress-item">
                                    <i class="el-icon-star-on" style="color: #FF9900"></i>
                                    <i class="el-icon-star-on" style="color: #FF9900"></i>
                                    <i class="el-icon-star-on" style="color: #FF9900"></i>
                                    <i class="el-icon-star-on" style="color: #FF9900"></i>
                                    <el-progress :percentage="rating_detail[4]" />
                                </div>
                                <div class="progress-item">
                                    <i class="el-icon-star-on" style="color: #FF9900"></i>
                                    <i class="el-icon-star-on" style="color: #FF9900"></i>
                                    <i class="el-icon-star-on" style="color: #FF9900"></i>
                                    <i class="el-icon-star-on" style="color: #FF9900"></i>
                                    <i class="el-icon-star-on" style="color: #FF9900"></i>
                                    <el-progress :percentage="rating_detail[5]" />
                                </div>
                                <div style="margin-top: 7px">
                                    <span>Total: {{total_rating}}</span>
                                </div>
                                <div>
                                    <el-rate
                                            v-model="bookRating"
                                            disabled
                                            show-score
                                            text-color="#ff9900"
                                            score-template="{value} points">
                                    </el-rate>
                                </div>
                            </div>
                        </div>
                        <el-link icon="el-icon-data-analysis" slot="reference" class="cl-deepblue">Rating details</el-link>
                    </el-popover>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <el-link class="cl-deepblue">{{bookDetail !== null ?bookDetail.rating.length:0}} Ratings</el-link>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-divider></el-divider>
        <el-row>
            <h4>About the book</h4>
            <div class="description">
                <div>
                    {{bookDescription}}
                </div>
            </div>

            <el-link class="tx-blue" @click="see_more"><b>{{more_less}}</b></el-link>
        </el-row>
        <el-divider></el-divider>
        <el-row>
            <el-button type="primary" :style="{marginRight : '20px', marginBottom: '20px'}" @click="handleGetBook">Get
                this book
            </el-button>
            <div class="tag_list">
                <el-tag
                        :key="index"
                        v-for="(cate, index) in categories"
                        :disable-transitions="false"
                        :type="type[index % 5]"
                >
                    {{cate}}
                </el-tag>
            </div>
        </el-row>
        <el-dialog
                title="Chose a warehouses"
                :visible.sync="centerDialogVisible"
                width="70%"
                center>
            <el-table :data="listWarehouses">
                <el-table-column min-width="250" property="email" label="Email"></el-table-column>
                <el-table-column min-width="150" property="price" label="Price"></el-table-column>
                <el-table-column min-width="150" property="borrowed_times" label="Borrowed Times"></el-table-column>
                <el-table-column min-width="150" header-align="right" label="">
                    <template slot-scope="scope">
                        <div class="text-center table-actions">
                            <el-tooltip content="Info" :open-delay="300" placement="top">
                                <el-button type="success" icon="el-icon-plus" @click="() => { addToCart(scope.row) }">Add to Cart</el-button>
                            </el-tooltip>
                        </div>
                    </template>
                </el-table-column>
                <!--                <el-table-column property="warehouse_id" label="warehouse_id"></el-table-column>-->
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">Cancel</el-button>
            </span>

        </el-dialog>
    </el-row>
</template>

<script>
    import {getByBook} from '../../../../services/warehouses/warehouses_api'
    import {addNewItems} from '../../../../services/cart/cart_services'
    import {isAuthenticated} from '../../../../services/auth_services'

    export default {
        name: 'bookInfo',
        props: {
            bookDetail: {
                type: Object,
                required: true,
                default: () => {
                    return {
                        'ISBN': '0',
                        'book_title': 'Untitled',
                        'publication_year': 0,
                        'book_description': '',
                        'book_cover': 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
                        'rating': [],
                        'author': {
                            'author_name': 'Untitled',
                            'author_id': 0
                        }
                    }
                }
            }
        },
        data: () => {
            return {
                categories: ['Paperback', 'Hardcover', 'Ebook', 'Audio'],
                type  : ['', 'success', 'info', 'danger', 'warning'],
                disabled_color: '#C6D1DE',
                more_less: 'See more',
                short_long: 'short',
                centerDialogVisible: false,
                listWarehouses: [],
                rating_detail :{
                    1 : 0,
                    2 : 0,
                    3 : 0,
                    4 : 0,
                    5 : 0
                }
            }
        },
        methods: {
            see_more() {

                if (this.more_less === 'Less') {
                    this.more_less = 'See more'
                    this.short_long = 'short'
                } else {
                    this.more_less = 'Less'
                    this.short_long = 'long'
                }
            },
            async handleGetBook() {
                if (!isAuthenticated()) {
                    this.$router.push({name: 'login'})
                }
                this.centerDialogVisible = true
                let res = await getByBook(this.bookDetail.ISBN)
                this.listWarehouses = res.data
            },
            addToCart(row) {

                addNewItems([{
                    book_info: {
                        book_id: this.bookDetail.ISBN,
                        book_title: this.bookDetail.book_title,
                        book_cover: this.bookDetail.book_cover,
                        book_rating: this.bookRating,
                        author: this.bookDetail.author
                    },
                    ...row
                }])
                this.$store.dispatch("updateNumBadge");
                this.centerDialogVisible = false
            },
            update_rating_detail(){
                let result = {
                    1 : 0,
                    2 : 0,
                    3 : 0,
                    4 : 0,
                    5 : 0
                }
                for (let i = 0; i < this.bookDetail.rating.length; i++){
                    result[this.bookDetail.rating[i]] ++;
                }
                for (let i = 1; i <= 4 ;i++){
                    console.log(result[i])
                    result[i] = Math.floor(result[i] / this.bookDetail.rating.length * 100) ;
                }
                result[5] = 100 - result[1] - result[2] - result[3] - result[4]
                this.rating_detail = result;
            }
        },
        mounted() {
        },
        computed: {
            bookRating() {
                if (this.bookDetail && this.bookDetail.rating.length > 0) {
                    this.update_rating_detail();
                    return Math.floor(this.bookDetail.rating.reduce((sum, current) => sum + current) / this.bookDetail.rating.length)
                } else {
                    return 0
                }
            },
            bookDescription() {
                if (this.bookDetail) {
                    if (this.bookDetail.book_description.length < 250) {
                        return this.bookDetail.book_description
                    } else if (this.short_long === 'short') {
                        return this.bookDetail.book_description.substr(0, 250) + '...'
                    } else
                        return this.bookDetail.book_description
                }
                return ''
            },
            total_rating(){
                return this.bookDetail.rating.length
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-breadcrumb {
        padding-top: 10px;
    }

    .description {
        overflow: hidden;
    }

    .tx-blue {
        color: dodgerblue !important;
    }

    .tag_list .el-tag {
        margin-right: 10px;
    }
    .user-bio {
        margin-top: 20px;
        color: #606266;

        span {
            padding-left: 4px;
        }

        .user-bio-section {
            font-size: 14px;
            padding: 15px 0;

            .user-bio-section-header {
                border-bottom: 1px solid #dfe6ec;
                padding-bottom: 10px;
                margin-bottom: 10px;
                font-weight: bold;
            }
        }
    }
</style>
