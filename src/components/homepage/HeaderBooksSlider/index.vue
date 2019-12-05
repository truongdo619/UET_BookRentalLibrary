<template>
<div class="header-books-slider">
    <slick ref="slick" :options="slickOptions">
        <div v-for="book of books" :key="book.id" class="book-content">
            <div class="book-cover"><img :src="book.book_cover" :alt="book.book_title"></div>
            <div class="book-intro">
                <div @click="() => {handleBookDetail(book.id)}">
                <p style="font-weight: bold;">{{book.book_title}}</p>
                <p @click="() => {handleBookDetail(book.id)}">READ BOOK</p></div>
                <el-rate v-model="book.rating" disabled :colors="['black', 'black', 'black']"  void-color="black"></el-rate>
            </div>
        </div>
    </slick>
</div>
</template>

<script>
    import Slick from 'vue-slick';
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

    import {getTopBooks} from '../../../services/books/books_api'

    library.add(faChevronRight, faChevronLeft)

    export default {
        name: 'HeaderBooksSlider',
        components: { Slick },
        data: () => {
            return {
                books: [

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
            handleBookDetail(bookId) {
                console.log('hey')
                this.$router.push({name: 'book_detail', params: {id: bookId}})
            }
        },
        async mounted() {
            let data = await getTopBooks()
            console.log(data)
            this.books = data.data.map(book => ({
                id: book.ISBN,
                book_cover: book.book_cover,
                book_title: book.book_title,
                rating: book.rating.length > 0 ? Math.floor(book.rating.reduce((sum, current) => sum + current) / book.rating.length) : 0
            }))
            // this.reInit()
            // this.$refs.slick.reSlick()
        },
        watch: {
            books: function () {

                // let currIndex = this.$refs.slick.currentSlide()

                this.$refs.slick.destroy()
                this.$nextTick(() => {
                    this.$refs.slick.create()
                    // this.$refs.slick.goTo(currIndex, true)
                })
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
                background-image: url('../../../assets/images/angle-right.svg') !important;
            }
        }

        .slick-prev {
            left: -130px;
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
                    min-width: 400px;
                    min-height: 560px;
                    height: 530px;
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
