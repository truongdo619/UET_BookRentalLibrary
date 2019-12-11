<template>
    <el-row class="bg-gray">
        <el-col :span="16" :offset="5" class="navbar">
            <el-row class="full-width">
                <el-col :span="6">
                    <book-image :book-id="bookInfo.ISBN" :book-image=" bookInfo.book_cover"></book-image>
                </el-col>
                <el-col :span="15" :offset="1">
                    <book-info :book-detail="bookInfo"></book-info>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    import BookInfo from "./bookInfo/index";
    import BookImage from "./bookImage/index";
    export default {
        name: "AboutBook",
        props: {
            bookInfo: {
                type: Object,
                required: true
            }
        },
        components: {BookImage, BookInfo},
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
.bg-gray{
    background-color: #f6f6f6;
    padding: 60px 0;
}
    .full-width {
        width: 100%;
    }
</style>
