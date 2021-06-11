import Vue from 'vue'
import Vuex from 'vuex'

import exchanges from './modules/exchanges'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        exchanges
    }
})