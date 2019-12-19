<template>
    <div class="user-activity">
        <div class="post" v-for="item in items">
            <Borrowed_book_item :item="item"></Borrowed_book_item>
        </div>
    </div>
</template>

<script>

    import Borrowed_book_item from "./Borrowed_book_item";

    export default {
        components: {Borrowed_book_item},
        data() {
            return {
                items : [{
                    "name" : "Life of Pi",
                    "image" : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320562005l/4214._SY75_.jpg",
                    "rate" : 4,
                    "date" : "Feb 24, 2019",
                    "author" : "Yann Martel"
                },
                    {
                        "name" : "Mình phải sống một tuổi trẻ rực rỡ",
                        "image" : "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
                        "rate" : 5,
                        "date" : "Apr 1, 2017",
                        "author" : "LiNi Thông Minh"
                    }]
            }
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
