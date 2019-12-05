<template>
    <div>
        <span>{{responseApi}}</span>
    </div>
</template>

<script>
    import {test_api} from '../../services/auth_services'

    export default {
        name: 'TestApi',
        data: () => {
            return {
                responseApi: 'Requesting....'
            }
        },
        async mounted() {
            let res = await test_api()
            if (!res) {
                this.responseApi = 'Error!!!'
            } else {
                this.responseApi = JSON.stringify(res)
            }
        }
    }
</script>

<style scoped>

</style>
