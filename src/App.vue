<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        metaInfo: {
            title: 'Online Book Rental Library',
            titleTemplate:
                '%s | Online Book Rental Library',
        }
    }
</script>

<style lang="scss">
    * {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
    }
</style>
