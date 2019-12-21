<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.index }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Ngày yêu cầu">
        <template slot-scope="scope">
          <span>{{ scope.row.dateIssued }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="Người yêu cầu">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="Đánh giá">
        <template slot-scope="scope">
          <i v-for="n in +scope.row.importance" :key="n" class="el-icon-star-on" />
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Trạng thái" width="110">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Tên văn bản">
        <template slot-scope="{row}">
          <router-link :to="'confirm'" class="link-type">
            <span>{{ row.title }}</span>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column align="center" label="" width="150">
        <template slot-scope="scope">
            <el-button type="primary" size="small" icon="el-icon-edit">
              Chỉnh sửa
            </el-button>
        </template>
      </el-table-column>
    </el-table>


  </div>
</template>

<script>

  export default {
  name: 'AdminIndex',
  filters: {
    statusFilter(status) {
      const statusMap = {
        "đã xuất bản": 'success',
        "bản nháp": 'info',
        "đã xóa": 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  computed:{
    getUrl(){
      let str = this.$route.path;
      let index = str.lastIndexOf("/");
      return this.$route.path.substring(0, index);
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true;
      this.list = [{
          author: "admin",
        dateIssued: "2019-11-07 05:49:09.766000",
        importance: 1,
        index: 2,
        status: "đã xóa",
        title: "The Hunter Game"  ,
      }]

      this.listLoading = false
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
