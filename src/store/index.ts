import { createStore } from 'vuex'

import productModule from './modules/product'
import cartModule from './modules/cart'

const store = createStore({
  modules: {
    product: productModule,
    cart: cartModule,
  },
})

export default store
