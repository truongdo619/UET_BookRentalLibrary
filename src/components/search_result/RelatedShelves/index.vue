<template>
    <div>
        <h6>RELATED SHELVES</h6>
        <div v-if="shelvesInfo.length === 0" style="color: gray; font-style: italic;">
            No results
        </div>
        <div v-for="shelve in shelvesInfo" :key="shelve.id">
            <span style="font-size:13px"><a href="#!" style="color: #30688d; font-weight: 600">{{shelve.name}}</a>   ({{shelve.nums}})</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RelatedShelves",
        props: ['shelvesInfo'],
        data: () => {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>