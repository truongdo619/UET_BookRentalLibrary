<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <Sidebar class="sidebar-container" />
    <div :class="{hasTagsView :needTagsView, marginCollapse: isCollapse}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <Navbar />
        <TagView />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/index'
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
import TagView from './components/TagsView/index'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    AppMain,
    TagView
  },
  data() {
    return {
      sidebar: {
        opened: true,
        withoutAnimation: false
      },
      device: 'desktop',
      needTagsView: false,
      fixedHeader: false
    }
  },
  computed: {

    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
    isCollapse(){
      return this.$store.getters.isCollapse;
    }
  },
  methods: {
    handleClickOutside() {
      // this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../../assets/scss/mixin";
  @import "../../../../assets/scss/variables";
  @import "../../../../assets/scss/index";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
  .marginCollapse{
    margin-left: 62px!important;
  }
</style>
