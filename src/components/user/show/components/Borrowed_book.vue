<template>
    <div class="user-activity">
        <div class="post" v-for="item in items">
            <Borrowed_book_item :item="item"></Borrowed_book_item>
        </div>
        <h3 v-if="this.items.length == 0" style="text-align: center; color: gray">No Items</h3>
    </div>
</template>

<script>

    import Borrowed_book_item from "./Borrowed_book_item";
    import {getBorrowingBooks} from "../../../../services/users/user_api";

    export default {
        components: {Borrowed_book_item},
        data() {
            return {
                items : []
            }
        },
        async mounted() {
            let res = await getBorrowingBooks({mode : "income"});
            this.items = res.data.details;
        }
    }
</script>

<style lang="scss" scoped>
    .user-activity {
        .user-block {

            .username,
            .description {
                display: block;
                margin-left: 50px;
                padding: 2px 0;
            }

            .username{
                font-size: 16px;
                color: #000;
            }

            :after {
                clear: both;
            }

            .img-circle {
                border-radius: 50%;
                width: 40px;
                height: 40px;
                float: left;
            }

            span {
                font-weight: 500;
                font-size: 12px;
            }
        }

        .post {
            font-size: 14px;
            border-bottom: 1px solid #d2d6de;
            margin-bottom: 15px;
            padding-bottom: 15px;
            color: #666;

            .image {
                width: 100%;
                height: 100%;

            }

            .user-images {
                padding-top: 20px;
            }
        }

        .list-inline {
            padding-left: 0;
            margin-left: -5px;
            list-style: none;

            li {
                display: inline-block;
                padding-right: 5px;
                padding-left: 5px;
                font-size: 13px;
            }

            .link-black {

                &:hover,
                &:focus {
                    color: #999;
                }
            }
        }

    }

    .box-center {
        margin: 0 auto;
        display: table;
    }

    .text-muted {
        color: #777;
    }
</style>
