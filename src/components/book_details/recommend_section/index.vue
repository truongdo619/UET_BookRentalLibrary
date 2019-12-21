<template>
    <el-row>
        <el-col :span="20" :offset="2">
            <h1 style="text-align: center; margin-top: 30px">Recommended For You</h1>
            <div class="header-recommend-books-slider">
                <slick ref="slick" :options="slickOptions"
                       @afterChange="handleAfterChange" >
                    <div style="cursor: pointer" @click="handleClickImage(image.id)" @reInit="handleReInit" v-for="(image, i) in images" :key="i" class="book-content">
                            <div class="book-cover">
                                <el-tooltip :content="image.title" placement="top">
                                    <img :src="image.image_url" >
                                </el-tooltip>
                            </div>
                    </div>
                </slick>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import Slick from 'vue-slick';
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

    import headerSliderImage1 from '@/assets/images/recommend1.png'
    import headerSliderImage2 from '@/assets/images/recommend2.png'
    import headerSliderImage3 from '@/assets/images/recommend3.png'
    import headerSliderImage4 from '@/assets/images/recommend4.png'
    import headerSliderImage5 from '@/assets/images/recommend5.png'
    import headerSliderImage6 from '@/assets/images/recommend6.png'
    import headerSliderImage7 from '@/assets/images/recommend7.png'
    import {getAllCategories} from "../../../services/category/categories_api";
    import {getRecommendedBook} from "../../../services/recommend/recommend_api";
    import {getTopBooks} from "../../../services/books/books_api";

    library.add(faChevronRight, faChevronLeft)
    export default {
        name: "RecommendSection",
        components: { Slick },
        props: ['bookID'],
        data(){
            return{
                active_slide : 0,
                images: [
                    {
                        'image': headerSliderImage1
                    },
                    {
                        'image': headerSliderImage2
                    },
                    {
                        'image': headerSliderImage3
                    },
                    {
                        'image': headerSliderImage4
                    },
                    {
                        'image': headerSliderImage5
                    },
                    {
                        'image': headerSliderImage6
                    },
                    {
                        'image': headerSliderImage7
                    }
                ],
                slickOptions: {
                    //options can be used from the plugin documentation
                    slidesToShow: 7,
                    centerMode: false,
                    centerPadding: '0px',
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
        methods: {
            handleAfterChange(event, slick, currentSlide) {
                this.active_slide = currentSlide % 3;
            },
            handleReInit(){
                this.images = this.recommended;
            },
            handleClickImage(id){
                this.$router.push({name: 'book_detail', params: {id: id}})
            }
        },
        async created(){

        },
        watch: {
            bookID: function(old){
                setTimeout(async () => {
                    let data = await getRecommendedBook({id : this.bookID, top :7});
                    console.log(data)
                    this.images = data.book_ids.map(image => ({
                        title: image.title,
                        image_url: image.image_url,
                        id: image.isbn
                    }))
                }, 500)
            }
        }
    }
</script>
<style lang="scss">
    .bg-gray{
        background-color: #f6f6f6;
        padding: 60px 0;
    }
    .full-width {
        width: 100%;
    }
    .header-recommend-books-slider {

        .slick-arrow {
            padding: 25px;
            height: 90px;
            width: 90px;
            border-radius: 12px;
            background-color: transparent!important;

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
                background-image: url('../../../assets/images/angle-right.svg') !important;
            }
        }

        .slick-prev {
            left: -130px;
            .icon-arrow {
                background-image: url('../../../assets/images/angle-left.svg') !important;
            }
        }

        .slick-center{
            position: relative;
            bottom: 15px;
        }

        .slick-initialized .slick-slide {
            padding: 20px;

            .book-cover {
                overflow: hidden;
                border-radius: 15px;
                img {
                    width: 100%;
                    max-width: 164px;
                    max-height: 244px;
                    min-width: 164px;
                    min-height: 244px;
                }
                // -webkit-box-shadow: -1px 2px 87px -39px rgba(168,168,168,1);
                // -moz-box-shadow: -1px 2px 87px -39px rgba(168,168,168,1);
                // box-shadow: -1px 2px 87px -39px rgba(168,168,168,1);
            }
        }

    }
</style>
