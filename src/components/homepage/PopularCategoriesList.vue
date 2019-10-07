<template>
    <div class="popular-categories-list">
        <el-row>
            <el-col :span="9" class="audio-list">
                <h1 class="col-title">Audio Books</h1>
                <div class="col-content">
                    <div class="col-item flex-row-center" v-for="audio in audioBooksData" :key="audio.name">
                        <div class="play-btn" @click="audio.isPlaying = !audio.isPlaying" :style="{border: audio.isPlaying ? 'none' : '1px solid black'}">
                            <font-awesome-icon v-if="!audio.isPlaying" icon="play"></font-awesome-icon>
                            <font-awesome-icon v-else icon="pause"></font-awesome-icon>
                        </div>
                        <div class="audio-info">
                            <h5 class="audio-info--title">{{audio.name}}</h5>
                            <p class="audio-info--artist">{{audio.artist}}</p>
                            <p class="audio-info--length">{{audio.time}} min sample</p>
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
                    <slick ref="slick" :options="slickOptions">
                        <div v-for="category in popular_categories" :key="category.name" class="category-content">
<!--                            <div class="-cover"><img :src="category.previewImg" :alt="category.name"></div>-->
                            <div class="category-card" :style="{backgroundImage: category.previewImg}">
                                <p>{{category.name}}</p>
                                <div class="category-stat">
                                    <div class="num-book">{{category.num_books}} Books</div>
                                    <span class="new-book">{{category.new_arrival}} New Arrivals</span>
                                </div>
                            </div>
                        </div>
                    </slick>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Slick from 'vue-slick'

    import Detective from '../../assets/images/detective_sherlock.png'
    import Romantic from '../../assets/images/romantic_theNotebook.jpg'
    import Horror from '../../assets/images/horror_abc.jpg'
    import History from '../../assets/images/history_sapiens.jpg'


    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faPlay, faPause, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

    library.add(faPlay, faEllipsisV, faPause)

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
                        artist: 'By Nicholas Sparks',
                        time: '1:00',
                        cost: 25,
                        isPlaying: false
                    },
                    {
                        name: 'Pride and Prejudice',
                        artist: 'Jnae Austen',
                        time: '1:00',
                        cost: 25,
                        isPlaying: false
                    },
                    {
                        name: 'Emotional Design',
                        artist: 'Donald Norman',
                        time: '1:00',
                        cost: 25,
                        isPlaying: false
                    },
                    {
                        name: 'Rome and Juliet',
                        artist: 'William Shakespeare',
                        time: '1:00',
                        cost: 25,
                        isPlaying: false
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
        .slick-arrow {
            padding: 25px;
            height: 90px;
            width: 90px;
            border-radius: 12px;
            background-color: #fcf3f3;

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
            right: -130px;
            .icon-arrow {
                background-image: url('../../assets/images/angle-right.svg') !important;
            }
        }

        .slick-prev {
            left: -130px;
            .icon-arrow {
                background-image: url('../../assets/images/angle-left.svg') !important;
            }
        }

        .slick-initialized{
            .slick-active {
                height: 330px;
                width: 30%;
            }

            .slick-active.slick-center {
                height: 260px;
                width: 36%
            }
        }
    }
</style>

<style scoped lang="scss">
.popular-categories-list {
    width: 100%;
    height: 100px;
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
                    padding: 0 0 2px 4px;
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
