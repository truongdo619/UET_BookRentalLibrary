<template>
    <div class="popular-categories-list">
        <el-row>
            <el-col :span="9" class="audio-list">
                <h1 class="col-title">Best Seller</h1>
                <div class="col-content">
                    <div class="col-item flex-row-center" v-for="audio in audioBooksData" :key="audio.name">
                        <div class="play-btn" @click="audio.isPlaying = !audio.isPlaying" :style="{border: audio.isPlaying ? 'none' : '1px solid black'}">
                            <font-awesome-icon icon="book"></font-awesome-icon>
                        </div>
                        <div class="audio-info">
                            <h5 class="audio-info--title">{{audio.name}}</h5>
                            <p class="audio-info--artist">{{audio.artist}}</p>
                        </div>
                        <div class="audio-cost">
                            <span class="cost-currency">$</span>
                            <span class="cost-value">{{audio.cost}}</span>
                            <div class="cost-des">Full Version</div>
                        </div>
                        <el-button class="buy-btn no-focus-outline">
                            Buy now
                        </el-button>
                        <font-awesome-icon class="audio-options" icon="ellipsis-v"></font-awesome-icon>
                    </div>
                </div>
            </el-col>
            <el-col :span="15" class="popular-list col-title">
                <h1 class="col-title">Popular Categories</h1>
                <div class="popular-list">
                    <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
                        <div v-for="category in popular_categories" :key="category.name" class="category-content">
<!--                            <div class="category-cover"><img :src="category.previewImg" :alt="category.name"></div>-->
<!--                            <div class="category-card" :style="{backgroundImage: category.previewImg}">-->
<!--                                <p>{{category.name}}</p>-->
<!--                                <div class="category-stat">-->
<!--                                    <div class="num-book">{{category.num_books}} Books</div>-->
<!--                                    <span class="new-book">{{category.new_arrival}} New Arrivals</span>-->
<!--                                </div>-->
<!--                            </div>-->

                            <b-card
                                    :img-src="category.previewImg"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;"
                                    class="mb-2"
                            >
                                <div class="category-popular-item-des">
                                    <div>{{category.name}}</div>
                                    <el-button size="small" round>{{category.num_books}} Books</el-button>
                                </div>
                            </b-card>
                        </div>

                    </slick>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Slick from 'vue-slick'

    import Detective from '../../../assets/images/detective.png'
    import Romantic from '../../../assets/images/romantic.jpg'
    import Horror from '../../../assets/images/horror_abc.jpg'
    import History from '../../../assets/images/history.jpg'


    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faBook, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

    library.add(faBook, faEllipsisV)

    export default {
        name: 'PopularCategoriesList',
        components: {
            Slick
        },
        data: () => {
            return {
                audioBooksData: [
                    {
                        name: 'THE BEST OF ME',
                        artist: 'Nicholas Sparks',
                        time: '1:00',
                        cost: 25
                    },
                    {
                        name: 'Pride and Prejudice',
                        artist: 'Jnae Austen',
                        time: '1:00',
                        cost: 25
                    },
                    {
                        name: 'Emotional Design',
                        artist: 'Donald Norman',
                        time: '1:00',
                        cost: 25
                    },
                    {
                        name: 'Rome and Juliet',
                        artist: 'William Shakespeare',
                        time: '1:00',
                        cost: 25
                    },
                    {
                        name: 'THE BEST',
                        artist: 'Nicholas Sparks',
                        time: '1:00',
                        cost: 25
                    }
                ],
                popular_categories: [
                    {
                        name: 'Detective',
                        num_books: 60,
                        new_arrival: 70,
                        previewImg: Detective
                    },
                    {
                        name: 'Romantic',
                        num_books: 100,
                        new_arrival: 18,
                        previewImg: Romantic
                    },
                    {
                        name: 'Horror',
                        num_books: 98,
                        new_arrival: 50,
                        previewImg: Horror
                    },
                    {
                        name: 'History',
                        num_books: 89,
                        new_arrival: 32,
                        previewImg: History
                    }
                ],
                slickOptions: {
                    //options can be used from the plugin documentation
                    slidesToShow: 3,
                    centerPadding: '0',
                    centerMode: true,
                    infinite: true,
                    accessibility: true,
                    adaptiveHeight: false,
                    arrows: true,
                    dots: false,
                    draggable: true,
                    edgeFriction: 0.30,
                    swipe: true,
                    nextArrow: '<button type="button" data-role="none" class="control-arrows slick-next slick-arrow" aria-label="Next" role="button"><div class="icon-arrow"></div></button>',
                    prevArrow: '<button type="button" data-role="none" class="control-arrows slick-prev slick-arrow" aria-label="Previous" role="button"><div class="icon-arrow"></div></button>',
                }
            }
        },
        methods : {
            handleAfterChange(event, slick, currentSlide) {
                console.log(currentSlide);
            }
        }
    }
</script>

<style lang="scss">
    .buy-btn {
        span {

            font-size: 12px;
            font-weight: 500;
        }
    }
    .popular-list {

        .slick-track{
            padding-top: 20px;
        }
        .slick-center{
            .category-content{
                position: relative;
                bottom: 20px;
            }
            .category-popular-item-des{
                button{
                    opacity: 1!important;
                    background-color: #d96464!important;

                }
            }
        }

        .slick-list{
            margin-top: 50px;
        }
        .slick-slide{
            padding-right: 10px;
            padding-left: 10px;
        }
    .category-content{
        .card{
            border-radius: 20px;
            overflow: hidden;
            .category-popular-item-des{
                button{
                    font-weight: bold;
                    opacity: 0.8;
                    color: white;
                    border-color: transparent;
                    background-color: #9e9e9e;

                }
            }
        }
        .card-body{
            padding: 0;
            height: 0px;
            .category-popular-item-des{
                position: relative;
                top:-100px;
                left: 20px;
                color: white;
                div{

                    font-size: 28px;

                    font-weight: 900;
                }

            }
        }
    }
        .category-cover{
            img{
                /*max-height: 200px;*/
                /*max-width: 200px;*/
            }
        }
        .card-img-top{

        }
        .slick-arrow {
            top: -80px;
            right : 0px;
            left: auto;
            padding: 10px;
            height: 50px;
            width:50px;
            border-radius: 12px;
            background-color: #fcf3f3!important;;

            &:before {
                font-size: 20px;
                opacity: 0.75;
                color: gray;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                content: '';
            }

            .icon-arrow {
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            }
        }

        .slick-next {
            position: absolute;
            .icon-arrow {
                background-image: url('../../../assets/images/angle-right.svg') !important;
            }
        }

        .slick-arrow:hover{
            background-color: #d96464!important;
        }
        .slick-prev {
            right : 70px;
            .icon-arrow {
                background-image: url('../../../assets/images/angle-left.svg') !important;
            }
        }

        .slick-initialized{
            .slick-active {
                height: 330px;
                width: 30%;
            }

        }
    }
</style>

<style scoped lang="scss">
.popular-categories-list {
    width: 100%;
    height: 100%;
    padding-top: 110px;

    .col-title {
        font-size: 58px;
        letter-spacing: 1px;
        font-weight: bold;
    }

    .audio-list {



        .col-title {
            margin-bottom: 50px;
        }

        .col-content {
            .col-item {
                align-items: start;
                border-radius: 5px;
                padding: 18px 0 0 18px;
                transform: translateX(-18px);

                &:hover {
                    background-color: #f7dbbb;
                }

                .play-btn {
                    cursor: pointer;
                    display: flex;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    background-color: white;
                    justify-content: center;
                    align-items: center;
                    padding: 0 0 -2px 0px;
                    margin-right: 10px;
                }

                .audio-info {
                    width: 220px;

                    .audio-info--title {
                        margin-bottom: 0;
                    }

                    .audio-info--artist {
                        color: #9e9e9e;
                        font-weight: 200;
                        margin-bottom: 2px;
                    }

                    .audio-info--length {
                        color: #9e9e9e;
                        font-weight: 200;
                        font-size: 11px;
                    }
                }

                .audio-cost {
                    .cost-currency {
                        font-weight: bold;
                    }

                    .cost-value {
                        font-weight: bold;
                        font-size: 18px;
                        margin: 0 5px;
                    }

                    .cost-des {
                        width: 40px;
                        font-size: 8px;
                        font-weight: bold;
                        display: inline-block;
                        line-height: 1;
                    }
                }

                .buy-btn {
                    width: 70px;
                    height: 30px;
                    padding: 5px;
                    margin-top: -5px;
                    margin-right: 18px;
                    color: black;
                }

                .audio-options {
                    cursor: pointer;
                    line-height: 1.5;
                }
            }
        }

    }

    .popular-list {
        .category-card {
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
}
</style>
