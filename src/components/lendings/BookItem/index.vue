<template>
    <div class="comment">
        <b-card>
            <b-media no-body>
                <img :src="item.book_cover" class="image" />

                <b-media-body class="ml-3">
                    <el-row>
                        <span><a href="#!" @click="handleBookDetail"><b class="cl-deepblue">{{item.book_title}}</b></a></span>
                    </el-row>
                    <el-row>
                        <span>by: <a href="#!" @click="() => {searchAuthor(item.author)}"><b class="cl-deepblue">{{item.author}}</b></a></span>
                    </el-row>
                    <el-row>
                        <span>Price: {{item.price}}</span>
                    </el-row>
                    <el-row>
                        <span>Time Upload: {{item.time_upload}}</span>
                    </el-row>
                    <el-row>
                        <span>Validated: {{item.is_validate}}</span>
                    </el-row>
                    <el-row>
                        <span>Borrowed Times: {{item.borrowed_times}}</span>
                    </el-row>
                    <el-row>
                        <span>Status: {{item.status}}</span>
                        <!--                        0 / 1 : not available / available-->
                    </el-row>
                </b-media-body>
            </b-media>
            <el-button class="no-focus-outline" icon="el-icon-delete" circle style="position: absolute; right: 0; top: 0" @click="centerDialogVisible = true"></el-button>
        </b-card>
        <el-dialog
                title="Warning"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <span>Are you sure you want to delete this item?</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="handleConfirmDelete">Confirm</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
    export  default {
        name: "BookItem",
        props : ['item'],
        data (){
            return{
                value : 4,
                centerDialogVisible: false
            }
        },
        methods: {
            handleBookDetail() {
                this.$router.push({name: 'book_detail', params: {id: this.item.book_id}})
            },
            handleConfirmDelete(){
                this.centerDialogVisible = false;
                this.$emit("handleDeleteItem", this.item.book_id)
            },
            searchAuthor(name) {
                this.$router.push(`/search/result?q=${name}&search_filter=author_searchable`)
            }
        }
    }

</script>

<style>
    .comment .card{
        border: none;
    }
    .rate .card{
        border: none;
    }
    .comment .el-rate{
        position: relative;
        display: inline-block;
        top: -3px;
    }
    .cl-deepblue{
        color: #3b6d74!important;
    }
</style>

<style scoped>
    .image {
        max-width: 100%;
        max-height: 150px;
    }
</style>
