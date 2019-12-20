<template>
  <div class="navbar-admin">
    <Hamburger id="hamburger-container" class="hamburger-container" />
    <Breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <el-button type="primary" icon="el-icon-plus" class="composeBtn" @click="toEditor">Soạn thảo</el-button>
        <el-input
                placeholder="Nhập nội dung tìm kiếm"
                prefix-icon="el-icon-search"
                v-model="input" :class="{header_search : true }">
        </el-input>

      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/setting-567-722008.png" class="user-avatar">
        </div>
        <el-dropdown-menu slot="dropdown">
          <a target="_blank" href="">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span style="display:block;min-width:80px" @click="logout">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from '../../Hamburger/index'
import Breadcrumb from '../../Breadcrumb/index'

export default {
  components: {
    Hamburger,
    Breadcrumb
  },
  data(){
    return{
      sidebar: {
        opened: true,
        withoutAnimation: false
      },
      device: 'desktop',
      input:''
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    logout() {
      this.$store.dispatch('logout').then(() =>{
        this.$router.push({path : '/login'})
      })
    },
    toEditor(){
      window.location.href = this.$store.getters.BASE_URL + "/home/mydoc/edit/" + (this.$store.getters.sizeOfMyDoc+1) + '?new=1'
    }
  }
}
</script>

<style lang="scss" scoped>
  .header_search{
    width: 200px;
    float: left;
  }
.navbar-admin {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          height: 32px;
          width: 32px;
          margin-top: 5px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
    .composeBtn{
      float: left;
      margin-top: 5px;
      margin-right: 10px;
    }
  }
}
</style>

