<template>
    <div :class="{'show':show}" class="header-search">
        <i class="el-icon-search" @click.stop="click"></i>
        <el-select
                ref="headerSearchSelect"
                v-model="search"
                :remote-method="querySearch"
                filterable
                default-first-option
                remote
                placeholder="Search"
                class="header-search-select"
        >
        </el-select>
    </div>
</template>

<script>
    export default {
        name: 'FilterSearch',
        data() {
            return {
                search: '',
                options: [],
                searchPool: [],
                show: false
            }
        },
        computed: {
            routes() {
                return this.$store.getters.permission_routes
            }
        },
        watch: {
            routes() {
                this.searchPool = this.generateRoutes(this.routes)
            },
            searchPool(list) {
                this.initFuse(list)
            },
            show(value) {
                if (value) {
                    document.body.addEventListener('click', this.close)
                } else {
                    document.body.removeEventListener('click', this.close)
                }
            }
        },
        mounted() {
            this.searchPool = this.generateRoutes(this.routes)
        },
        methods: {
            click() {
                this.show = !this.show
                if (this.show) {
                    this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus()
                }
            },
            close() {
                this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.blur()
                this.options = []
                this.show = false
            },
            change(val) {
                this.$router.push(val.path)
                this.search = ''
                this.options = []
                this.$nextTick(() => {
                    this.show = false
                })
            },
            querySearch(query) {

            }

        }
    }
</script>

<style lang="scss" scoped>
    .header-search {
        font-size: 0 !important;

        .search-icon {
            cursor: pointer;
            font-size: 18px;
            vertical-align: middle;
        }

        .header-search-select {
            font-size: 18px;
            transition: width 0.2s;
            width: 0;
            overflow: hidden;
            background: transparent;
            border-radius: 0;
            display: inline-block;
            vertical-align: middle;

            .el-input__inner {
                border-radius: 0;
                border: 0;
                padding-left: 0;
                padding-right: 0;
                box-shadow: none !important;
                border-bottom: 1px solid #d9d9d9;
                vertical-align: middle;
            }
        }

        &.show {
            .header-search-select {
                width: 210px;
                margin-left: 10px;
            }
        }
    }
</style>