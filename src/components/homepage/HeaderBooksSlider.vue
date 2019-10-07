<template>
<div class="header-books-slider">
    <slick ref="slick" :options="slickOptions">
        <div v-for="(image, i) in images" :key="i" class="book-content">
            <div class="book-cover"><img :src="image.image" :alt="image.name"></div>
            <div class="book-intro">
                <p>READ A BOOK</p>
                <p>LISTEN A BOOK</p>
                <el-rate v-model="image.star" disabled :colors="['black', 'black', 'black']"  void-color="black"></el-rate>
            </div>
        </div>
    </slick>
</div>
</template>

<script>
    import Slick from 'vue-slick';
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

    import headerSliderImage1 from '../../assets/images/headerSliderImage1.jpg'
    import headerSliderImage2 from '../../assets/images/headerSliderImage2.jpg'
    import headerSliderImage3 from '../../assets/images/headerSliderImage3.jpg'

    library.add(faChevronRight, faChevronLeft)

    export default {
        name: 'HeaderBooksSlider',
        components: { Slick },
        data: () => {
            return {
                images: [
                    {
                        'image': headerSliderImage1,
                        'name': 'Becoming Michelle Obama',
                        'star': 4
                    },
                    {
                        'image': headerSliderImage2,
                        'name': 'Moral Relativism',
                        'star': 5
                    },
                    {
                        'image': headerSliderImage3,
                        'name': 'Vinegar Girl',
                        'star': 4
                    },
                    {
                        'image': headerSliderImage2,
                        'name': 'Moral Relativism',
                        'star': 5
                    },
                {
                        'image': headerSliderImage1,
                        'name': 'Becoming Michelle Obama',
                        'star': 4
                    },
                    {
                        'image': headerSliderImage2,
                        'name': 'Moral Relativism',
                        'star': 5
                    },
                    {
                        'image': headerSliderImage3,
                        'name': 'Vinegar Girl',
                        'star': 4
                    },
                    {
                        'image': headerSliderImage2,
                        'name': 'Moral Relativism',
                        'star': 5
                    },
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
        }
    }
</script>

<style lang="scss">
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

        .slick-initialized .slick-slide {
            padding: 20px;

            .book-cover {
                overflow: hidden;
                border-radius: 15px;
                img {
                    width: 100%;
                    min-width: 408px;
                    min-height: 660px;
                }
                 // -webkit-box-shadow: -1px 2px 87px -39px rgba(168,168,168,1);
                 // -moz-box-shadow: -1px 2px 87px -39px rgba(168,168,168,1);
                // box-shadow: -1px 2px 87px -39px rgba(168,168,168,1);
            }

            .book-intro {
                padding-top: 20px;

                p:first-child {
                    font-size: 17px;
                    margin-bottom: 5px;
                    cursor: pointer;
                }
                p:nth-child(2) {
                    font-size: 18px;
                    margin-bottom: 5px;
                    cursor: pointer;
                }
            }
        }


        .el-rate__icon {
            font-size: 22px;
            color: #121212;
        }
    }
</style>

<style scoped>
.header-books-slider {
    width: 70%;
    margin: auto;
}
</style>
