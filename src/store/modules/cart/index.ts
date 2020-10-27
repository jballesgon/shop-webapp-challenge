import { Module } from 'vuex'

import { CartItem } from '@/models/cart'
import { Product } from '@/models/product'

interface CartState {
  cartContent: CartItem[]
}

const cartModule: Module<CartState, {}> = {
  namespaced: true,
  state: () => ({
    cartContent: [],
  }),
  getters: {
    cartContent: state => state.cartContent,
    cartNumItems: state =>
      state.cartContent.reduce((numItems, currentItem) => {
        return numItems + currentItem.count
      }, 0),
  },
  mutations: {
    addToCart(state, product: Product) {
      if (product.stock <= 0) return

      const itemFound = state.cartContent.find(item => item.product.id === product.id)

      if (itemFound) {
        itemFound.count++
        itemFound.totalPrice = product.price * itemFound.count
      } else {
        state.cartContent.push({
          product,
          count: 1,
          totalPrice: product.price,
        })
      }

      product.stock--
    },
    removeFromCart(state, product: Product) {
      const itemFound = state.cartContent.find(item => item.product.id === product.id)

      if (!itemFound) return

      itemFound.count--

      if (itemFound.count <= 0) {
        state.cartContent = state.cartContent.filter(item => item.product.id !== product.id)
        return
      }

      itemFound.totalPrice = product.price * itemFound.count
      product.stock++
    },
  },
}

export default cartModule
