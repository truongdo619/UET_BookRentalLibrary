<template>
    <div class="comment">
        <b-card>
            <b-media no-body>
                <img :src="item.book_cover" class="image"/>

                <b-media-body class="ml-3">
                    <el-row>
                        <span><a href="#!"><b class="cl-deepblue">{{item.book_title}}</b></a></span>
                    </el-row>
                    <el-row>
                        <span>by: <a href="#!"  @click="() => {searchAuthor(item.author)}"><b class="cl-deepblue">{{item.author}}</b></a></span>
                    </el-row>
                    <el-row>
                        <span>Day Borrowed: {{item.day_borrow}}</span>
                    </el-row>
                    <el-row>
                        <span>Day Expected Return: {{item.day_expected_return}}</span>
                    </el-row>
                    <el-row>
                        <span>Owner Email: {{item.owner}}</span>
                    </el-row>
                    <el-row>
                        <span>Borrow ID: {{item.borrow_id}}</span>
                    </el-row>
                    <el-row>
                        <el-button type="text" @click="returnDialogVisible = true">Return this book</el-button>
                        <el-dialog title="Confirm" :visible.sync="returnDialogVisible">
                            <el-form>
                                <el-form-item label="Address">
                                    <el-input type="textarea" v-model="address"></el-input>
                                </el-form-item>
                            </el-form>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="returnDialogVisible = false">Cancel</el-button>
                                <el-button type="primary" @click="handleReturnBook">Confirm</el-button>
                              </span>
                        </el-dialog>
                    </el-row>
                </b-media-body>
            </b-media>
        </b-card>
    </div>
</template>

<script>
    import {postUserReturn} from '../../../services/borrowings/borrowings_api'

    export default {
        name: "BookItem",
        props: ['item', 'returnSuccess'],
        data() {
            return {
                value: 4,
                returnDialogVisible: false,
                address: ''
            }
        },
        methods: {
            async handleReturnBook() {
                await postUserReturn(this.item.borrow_id, this.address)
                this.returnDialogVisible = false
                this.returnSuccess()
            },
            searchAuthor(name) {
                this.$router.push(`/search/result?q=${name}&search_filter=author_searchable`)
            }
        }
    }

</script>

<style>
    .comment .card {
        border: none;
    }

    .rate .card {
        border: none;
    }

    .comment .el-rate {
        position: relative;
        display: inline-block;
        top: -3px;
    }

    .cl-deepblue {
        color: #3b6d74 !important;
    }
</style>

<style scoped>
    .image {
        max-width: 100%;
        max-height: 140px;
    }
</style>
