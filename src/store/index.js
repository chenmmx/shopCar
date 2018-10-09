import Vue from 'vue'
import vuex from 'vuex'

import Cart from './modules/cart'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    Cart
  }
})
