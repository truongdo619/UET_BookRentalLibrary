<template>
    <el-row>
        <el-col :span="16" :offset="5" class="navbar">
            <el-row class="full-width">
                <el-col :span="14">
                    <comment-box :book-id="bookInfo.ISBN" ></comment-box>
                </el-col>
<!--                <el-col :span="7" :offset="1">-->
<!--                    <about-author></about-author>-->
<!--                </el-col>-->
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    import CommentBox from './commentBox/index'

    export default {
        name : "CommentSection",
        props: {
            bookInfo: {
                type: Object,
                required: true
            }
        },
        components: { CommentBox}
    }
</script>

<style lang="scss" scoped>
    .full-width{
        width: 100%;
    }

</style>
