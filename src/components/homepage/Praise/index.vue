<template>
    <div class="praise">
        <div class="comment">
            <el-row class="bg-gray">
                <el-col :span="16" :offset="4">
                    <h1 style="text-align: center">Praises</h1>
                    <h2 style="text-align: center"><i style="font-size: 16px"><b style="font-size: 20px">"</b> {{desciption[active_slide][0]}}
                        <b style="font-size: 20px">"</b></i></h2>

                    <h4 style="text-align: center; margin-bottom: 1%;color: gray; margin-top: 20px">{{authors[active_slide]}}</h4>
                    <el-row>
                        <el-col :span="10" :offset="7">
                            <div class="praise-slider">
                                <slick ref="slick" :options="slickOptions"
                                       @afterChange="handleAfterChange" >
                                    <div v-for="(image, i) in images" :key="i" class="book-content">
                                        <div class="book-cover"><img :src="image.image" :alt="image.name"></div>
                                    </div>
                                </slick>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import Slick from 'vue-slick';
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

    import headerSliderImage1 from '@/assets/images/avatar1.png'
    import headerSliderImage2 from '@/assets/images/avatar2.png'
    import headerSliderImage3 from '@/assets/images/avatar3.png'

    library.add(faChevronRight, faChevronLeft)

    export default {
        name: "Praise",
        components: { Slick },
        data(){
            return{
                active_slide : 0,
                authors :["Arthur Conan Doyle" , "Henry Wadsworth Longfellow",  "Percy Bysshe Shelley"],
                desciption: [
                    ["Great book when I read it was so wonderful and nice. I recommended that you read it this is so cool and funny books for me and my child.", ""],
                    ["This book made me laugh. And then a page loader, it made me sob. Reminiscent of Tom Robbins and Chrosstopher Moore, Poore finds humor in the dark absurdities of life."],
                    ["I have read your book over and over again. The first time I was so surprised that anyone could know me that well. I underlined everything that is me and that was lots. "]],
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
                        'image': headerSliderImage1
                    },
                    {
                        'image': headerSliderImage2
                    },
                    {
                        'image': headerSliderImage3
                    }
                ],
                slickOptions: {
                    //options can be used from the plugin documentation
                    slidesToShow: 1,
                    centerMode: true,
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
            }
        }
    }
</script>
<style>
    .bg-gray .el-image{
        left: 50%;
        transform: translateX(-50%);
    }
</style>

<style lang="scss">
    .praise{
        background-image: url("../../../assets/images/image_footer.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        box-shadow: inset 0 -250px 250px 0px rgba(0, 0, 0, 0.4);
        min-height: 784px;
        margin-top: 100px;

        .book-cover{
            img{
                margin: 0 auto;
            }
        }
        .comment{
            position: relative;
            left: 65%;
            top: 40px;
            width: 550px;
        }
        .praise-slider {

            .slick-arrow {
                padding: 25px;
                height: 90px;
                width: 90px;
                border-radius: 12px;

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
                right: -100px;
                .icon-arrow {
                    background-image: url('../../../assets/images/angle-right.svg') !important;
                }
            }

            .slick-prev {
                left: -100px;
                .icon-arrow {
                    background-image: url('../../../assets/images/angle-left.svg') !important;
                }
            }

            .slick-initialized .slick-slide {
                padding: 20px;

                .book-cover {
                    overflow: hidden;
                    border-radius: 15px;
                    img {
                        width: 100%;
                        min-width: 64px;
                        min-height: 64px;
                        max-height: 64px;
                        max-width: 64px;
                    }
                    // -webkit-box-shadow: -1px 2px 87px -39px rgba(168,168,168,1);
                    // -moz-box-shadow: -1px 2px 87px -39px rgba(168,168,168,1);
                    // box-shadow: -1px 2px 87px -39px rgba(168,168,168,1);
                }
            }
    }
    .bg-gray{

        min-height: 451px;
        background-image: url("../../../assets/images/praise_background.png");
        background-repeat: no-repeat;
        background-size: cover;

        background-position: top center;
        border-radius: 10px;
        padding: 80px 0 30px 0 ;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12);
        h2{
            min-height: 132px;
        }
    }
    .full-width {
        width: 100%;
    }


    }
</style>
