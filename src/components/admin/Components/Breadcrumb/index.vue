<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span>{{ item.path }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  computed:{
    levelList(){
      let path = this.$route.path.split('/').splice(1);
      let el = [];
      path.forEach(function (item) {
          el.push({path : item});
      })
      return el;
    }

  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
.app-breadcrumb.el-breadcrumb[data-v-782c49fe]{
  margin-left: 20px!important;
}
</style>
