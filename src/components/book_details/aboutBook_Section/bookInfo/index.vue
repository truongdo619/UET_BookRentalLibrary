<template>
    <el-row>
                    <el-row>
                        <h1>{{book_detail.title}}</h1>
                        <h5>by: {{book_detail.author}}</h5>
                        <el-rate
                                v-model="book_detail.rating"
                                disabled
                                show-score
                                :disabled-void-color = "disabled_color"
                                score-template="{value} points">
                        </el-rate>
                        <el-breadcrumb separator=".">
                            <el-breadcrumb-item><el-link icon="el-icon-data-analysis">Rating details</el-link></el-breadcrumb-item>
                            <el-breadcrumb-item><el-link>8 Ratings</el-link></el-breadcrumb-item>
                            <el-breadcrumb-item><el-link><b>1 Review</b></el-link></el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <h4>About the book</h4>
                        <div class="description">
                            <div>
                                {{book_detail.description[short_long]}}
                            </div>
                        </div>

                        <el-link class="tx-blue" @click="see_more"><b>{{more_less}}</b></el-link>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-button type="primary" :style="{marginRight : '20px', marginBottom: '20px'}">Get this book</el-button>
                        <a href="" onclick="return false;">Look inside</a>
                        <div class="tag_list">
                            <el-tag type="success">Paperback</el-tag>
                            <el-tag type="info">Hardcover</el-tag>
                            <el-tag type="warning">Ebook</el-tag>
                            <el-tag type="danger">Audio</el-tag>
                        </div>
                    </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "bookInfo",
        data (){
            return{
                book_detail : {
                    "title" : "Must Love Murder",
                    "author" : "Etta Faire",
                    "rating" : 4,
                    "description" : {
                        "short" : "Harriet Vanger, a scion of one of Sweden’s wealthiest families disappeared over forty years ago. All these years later, her aged uncle continues to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently trapped by a libel conviction, to investigate. He is aided by the pierced and tattooed punk prodigy Lisbeth Salander. Together they tap into a vein",
                        "long" : "Harriet Vanger, a scion of one of Sweden’s wealthiest families disappeared over forty years ago. All these years later, her aged uncle continues to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently trapped by a libel conviction, to investigate. He is aided by the pierced and tattooed punk prodigy Lisbeth Salander. Together they tap into a vein of unfathomable iniquity and astonishing corruption.\n" +
                            "\n" +
                            "An international publishing sensation, Stieg Larsson’s The Girl with the Dragon Tattoo combines murder mystery, family saga, love story, and financial intrigue into one satisfyingly complex and entertainingly atmospheric novel.\n" +
                            "\n" +
                            "Alternate Cover Edition ISBN 0307269752 (ISBN13: 9780307269751)"
                    } },
                disabled_color: '#C6D1DE',
                more_less : 'See more',
                short_long: 'short'
            }
        },
        methods:{
            see_more(){

                if (this.more_less == 'Less')
                {
                    this.more_less = 'See more'
                    this.short_long = "short"
                }
                else{
                    this.more_less = 'Less'
                    this.short_long = "long"
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-breadcrumb{
        padding-top: 10px;
    }
    .description{
        overflow: hidden;
    }
    .tx-blue{
        color: dodgerblue!important;
    }
    .tag_list .el-tag{
        margin-right: 10px;
    }
</style>