import { createStore } from 'vuex'

import productModule from './modules/product'

const store = createStore({
  modules: {
    product: productModule,
  },
})

export default store
