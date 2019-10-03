<template>
<div class="header-books-slider">
    <slick ref="slick" :options="slickOptions">
        <img v-for="(image, i) in images" :key="i" :src="image" >
    </slick>
</div>
</template>

<script>
    import Slick from 'vue-slick';

    import headerSliderImage1 from '../../assets/images/headerSliderImage1.jpg'
    import headerSliderImage2 from '../../assets/images/headerSliderImage2.jpg'
    import headerSliderImage3 from '../../assets/images/headerSliderImage3.jpg'

    export default {
        name: 'HeaderBooksSlider',
        components: { Slick },
        data: () => {
            return {
                images: [
                    headerSliderImage1,
                    headerSliderImage2,
                    headerSliderImage3,
                    headerSliderImage1,
                    headerSliderImage2,
                    headerSliderImage3,
                    headerSliderImage1,
                    headerSliderImage2,
                    headerSliderImage3,
                    headerSliderImage1,
                    headerSliderImage2,
                    headerSliderImage3,
                    headerSliderImage1,
                    headerSliderImage2,
                    headerSliderImage3,
                    headerSliderImage1,
                    headerSliderImage2,
                    headerSliderImage3
                ],
                slickOptions: {
                    //options can be used from the plugin documentation
                    slidesToShow: 3,
                    infinite: true,
                    accessibility: true,
                    adaptiveHeight: false,
                    arrows: true,
                    dots: true,
                    draggable: true,
                    edgeFriction: 0.30,
                    swipe: true
                }
            }
        }
    }
</script>

<style>

</style>

<style scoped>
.header-books-slider {

    width: 70%;
    margin: auto;
    transform: translateY(-20%);
}
</style>
