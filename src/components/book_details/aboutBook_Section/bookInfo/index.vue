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
                    <el-link icon="el-icon-data-analysis" class="cl-deepblue">Rating details</el-link>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <el-link class="cl-deepblue">{{bookDetail !== null ?bookDetail.rating.length:0}} Ratings</el-link>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <el-link><b class="cl-deepblue">1 Review</b></el-link>
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
            <a href="" onclick="return false;">Look inside</a>
            <div class="tag_list">
                <el-tag type="success">Paperback</el-tag>
                <el-tag type="info">Hardcover</el-tag>
                <el-tag type="warning">Ebook</el-tag>
                <el-tag type="danger">Audio</el-tag>
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
                <el-table-column min-width="150" header-align="right" label="Actions">
                    <div class="text-center table-actions">
                        <el-tooltip content="Info" :open-delay="300" placement="top">
                            <el-button type="success" icon="el-icon-plus">Add to Cart</el-button>
                        </el-tooltip>
                    </div>
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
                disabled_color: '#C6D1DE',
                more_less: 'See more',
                short_long: 'short',
                centerDialogVisible: false,
                listWarehouses: []
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
                this.centerDialogVisible = true
                let res = await getByBook(this.bookDetail.ISBN)
                console.log(res)

                this.listWarehouses = res.data
            }
        },
        mounted() {
        },
        computed: {
            bookRating() {
                if (this.bookDetail && this.bookDetail.rating.length > 0) {
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
</style>
