<template>
    <el-row>
        <el-col :span="16" :offset="5" class="navbar">
            <el-row class="full-width">
                <el-col :span="14">
                    <comment-box></comment-box>
                </el-col>
                <el-col :span="7" :offset="1">
                    <about-author></about-author>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    import CommentBox from "./commentBox/index";
    import AboutAuthor from "./author/index";
    export default {
        name : "CommentSection",
        components: {AboutAuthor, CommentBox}
    }
</script>

<style lang="scss" scoped>
    .full-width{
        width: 100%;
    }

</style>