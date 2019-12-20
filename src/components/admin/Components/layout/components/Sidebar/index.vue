<template>
  <div :class="{'has-logo':showLogo, 'sidebarCollapse' : isCollapse}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="default_active"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="true"
        mode="vertical"
      >
        <el-menu-item index="1" @click="myDocClick"> <i class="el-icon-document"></i><span slot="title">Danh sách</span></el-menu-item>
        <el-menu-item index="2" @click="naDocClick"> <i class="el-icon-location"></i ><span slot="title">Kiểm tra</span></el-menu-item>
        </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from './Logo'
import variables from '../../../../../../assets/scss/variables.scss'

export default {
  components: { Logo },
  name : 'Sidebar',
  data(){
    return{
      sidebar: {
        opened: false,
        withoutAnimation: false
      }
    }
  },
  computed: {
    default_active(){
      if (this.$route.path.indexOf('/home/national/') !== -1)
        return "2"
      else
        if (this.$route.path.indexOf('/home/local/') !== -1)
          return "3"
      else
      return "1"
    },
    activeMenu() {
      // const route = this.$route
      // const { meta, path } = route
      // // if set path, the sidebar will highlight the path you set
      // if (meta.activeMenu) {
      //   return meta.activeMenu
      // }
      // return path
    },
    showLogo() {
      return true
    },
    variables() {
      return variables
    },
    isCollapse() {
      return this.$store.getters.isCollapse;
    }
  },
  methods:{
    myDocClick(){
      this.$router.push({path :"/admin/show"})
    },
    naDocClick(){
      this.$router.push({path :"/admin/confirm"})
    }
  }
}
</script>
<style scoped>
  body #app .sidebarCollapse{
    width: 62px !important;
  }
</style>
