import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import theme
import './plugins/element.js'
import './plugins/bootstrap.js'
import './plugins/font-awesome.js'
import './plugins/theme.js'
import VueSwal from 'vue-swal'

Vue.use(VueSwal)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
