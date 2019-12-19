<template>
    <el-col :span="20" :offset="2">
        <div class="app-container">
            <div v-if="user">
                <el-row :gutter="20">

                    <el-col :span="6" :xs="24">
                        <user-card :user="user" />
                    </el-col>

                    <el-col :span="18" :xs="24">
                        <el-card>
                            <el-tabs v-model="activeTab">
                                <el-tab-pane label="Activity" name="activity">
                                    <timeline />
                                </el-tab-pane>
                                <el-tab-pane label="Books are borrowed" name="Books are borrowed">
                                    <Book_rental></Book_rental>
                                </el-tab-pane>
                     <el-tab-pane label="Borrowed book" name="Borrowed book">
                                    <Borrowed_book></Borrowed_book>
                                </el-tab-pane>
                            </el-tabs>
                        </el-card>
                    </el-col>

                </el-row>
            </div>
        </div>
    </el-col>
</template>

<script>
    import UserCard from './components/UserCard'
    import Timeline from './components/Timeline'
    import Book_rental from "./components/Book_rental";
    import Borrowed_book from "./components/Borrowed_book";

    export default {
        name: 'Profile',
        components: {Borrowed_book, Book_rental, UserCard, Timeline},
        data() {
            return {
                user: {
                    name: 'Truong',
                    email: 'admin@test.com',
                    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                },
                activeTab: 'activity'
            }
        },
        created() {
            this.getUser()
        },
        methods: {
            getUser() {
                this.user = {
                    name: 'Truong',
                    email: 'admin@test.com',
                    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                }
            }
        }
    }
</script>
