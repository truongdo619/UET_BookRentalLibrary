import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStream, faSearch } from '@fortawesome/free-solid-svg-icons'
import {faUser, faHeart} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faStream,
    faSearch,
    faUser,
    faHeart
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
