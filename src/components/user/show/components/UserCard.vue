<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>About me</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
          <div>Hello</div>
          {{ user.name }}
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">{{ user.name }}</div>
        <div class="user-role text-center text-muted">{{ user.role | uppercaseFirst }}</div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>Details <el-button style="padding: 5px; border: none;" icon="el-icon-edit" @click="openUpdatePage"></el-button></span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            <div>
              <span >Email: </span>
              <span>{{email}}</span>
            </div>
            <div>
              <span style="padding-right: 11px;">City: </span>
              <span>{{city}}</span>
            </div>
          </div>
        </div>
      </div>

        <div class="user-bio-section">
          <div class="user-bio-section-header"><span>Favortive genres</span></div>
          <div class="user-bio-section-body">
            <div class="text-muted">
              <div>
                <el-tag
                        :key="tag.name"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)"
                        :type="tag.type"
                >
                  {{tag.name}}
                </el-tag>
                <el-input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="mini"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                >
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </div>
          </div>
        </div>
        </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="skill" /><span>Rating book</span></div>
        <div class="user-bio-section-body">
          <div class="progress-item">
            <i class="el-icon-star-on" style="color: #99A9BF"></i>
            <el-progress :percentage="0" />
          </div>
          <div class="progress-item">
            <i class="el-icon-star-on" style="color: #99A9BF"></i>
            <i class="el-icon-star-on" style="color: #99A9BF"></i>
            <el-progress :percentage="10" />
          </div>
          <div class="progress-item">
            <i class="el-icon-star-on" style="color: #F7BA2A"></i>
            <i class="el-icon-star-on" style="color: #F7BA2A"></i>
            <i class="el-icon-star-on" style="color: #F7BA2A"></i>
            <el-progress :percentage="20" />
          </div>
          <div class="progress-item">
            <i class="el-icon-star-on" style="color: #FF9900"></i>
            <i class="el-icon-star-on" style="color: #FF9900"></i>
            <i class="el-icon-star-on" style="color: #FF9900"></i>
            <i class="el-icon-star-on" style="color: #FF9900"></i>
            <el-progress :percentage="30" />
          </div>
          <div class="progress-item">
            <i class="el-icon-star-on" style="color: #FF9900"></i>
            <i class="el-icon-star-on" style="color: #FF9900"></i>
            <i class="el-icon-star-on" style="color: #FF9900"></i>
            <i class="el-icon-star-on" style="color: #FF9900"></i>
            <i class="el-icon-star-on" style="color: #FF9900"></i>
            <el-progress :percentage="40" />
          </div>
          <div style="margin-top: 7px">
            <span>Total: {{total_rating}}</span>
          </div>
          <div>
            <el-rate
                    v-model="aver_rating"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value} points">
            </el-rate>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '../PanThumb/index'

export default {
  components: { PanThumb },
  data(){
    return{
            total_rating : 10,
            aver_rating : 4,
            email: 'admin@test.com',
            city : 'Ha Noi',
            dynamicTags: [{ name : 'Fiction', type:''}, {name : 'Romantic', type : 'success'}, {name : 'Horror', type : 'info'}],
            inputVisible: false,
            inputValue: '',
            type  : ['', 'success', 'info', 'danger', 'warning'],
            type_index : 0
    }
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: ''
        }
      }
    }
  },
  methods:{
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push({name : inputValue, type : this.type[this.dynamicTags.length]});
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    openUpdatePage(){
      this.$router.push('/user/update')
    }
  }
}
</script>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
    margin-bottom: 10px;
  }
</style>

<style lang="scss" scoped>
 .box-center {
   margin: 0 auto;
   display: table;
 }

 .text-muted {
   color: #777;
 }

 .user-profile {
   .user-name {
     font-weight: bold;
   }

   .box-center {
     padding-top: 10px;
   }

   .user-role {
     padding-top: 10px;
     font-weight: 400;
     font-size: 14px;
   }

   .box-social {
     padding-top: 30px;

     .el-table {
       border-top: 1px solid #dfe6ec;
     }
   }

   .user-follow {
     padding-top: 20px;
   }
 }

 .user-bio {
   margin-top: 20px;
   color: #606266;

   span {
     padding-left: 4px;
   }

   .user-bio-section {
     font-size: 14px;
     padding: 15px 0;

     .user-bio-section-header {
       border-bottom: 1px solid #dfe6ec;
       padding-bottom: 10px;
       margin-bottom: 10px;
       font-weight: bold;
     }
   }
 }
</style>
