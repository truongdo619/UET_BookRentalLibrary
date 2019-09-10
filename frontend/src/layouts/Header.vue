<template>
    <div class="header">
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>Tom</span>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
.header {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}

</style>
