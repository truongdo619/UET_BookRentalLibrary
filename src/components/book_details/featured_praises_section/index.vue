<template>
    <el-row class="bg-gray">
        <el-col :span="16" :offset="4">
            <h1 style="text-align: center">Featured Praises</h1>
            <h2 style="text-align: center"><i style="font-size: 16px"><b style="font-size: 20px">"</b> {{desciption[active_slide][0]}}<br>
                {{desciption[active_slide][1]}}<br> {{desciption[active_slide][2]}}
                <b style="font-size: 20px">"</b></i></h2>

            <h4 style="text-align: center; margin-bottom: 2%;color: gray">{{authors[active_slide]}}</h4>
            <el-row>
                <el-col :span="10" :offset="7">
                    <div class="header-books-slider">
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
        name: "FeaturedPraise",
        components: { Slick },
        data(){
            return{
                active_slide : 0,
                authors :["Henry Wadsworth Longfellow", "Arthur Conan Doyle", "Percy Bysshe Shelley"],
                desciption: [["This book made me laugh.And then a page loader, it made me sob.", "Reminiscent of Tom Robbins and Chrosstopher Moore, Poore finds humor in the", " dark absurdities of life."],
                    ["Bacon ipsum dolor amet shankle bacon kevin hamburger.", "Sirloin kielbasa cupim bresaola tenderloin ham burgdoggen ground round shankle", " Prosciutto bresaola andouille shoulder doner."],
                    ["Bacon ipsum dolor amet meatball jowl ribeye landjaeger filet mignon prosciutto", "ndouille doner shankle flank burgdoggen biltong pork chop bacon pastrami.", "  Cupim tenderloin sirloin flank pig beef ribs."]],
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
                    slidesToShow: 3,
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

<style lang="scss" scoped>
    .bg-gray{
        background-color: #f6f6f6;
        padding: 60px 0;
    }
    .full-width {
        width: 100%;
    }
    .header-books-slider {

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
</style>