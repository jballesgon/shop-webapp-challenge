import { Module } from 'vuex'
import axios from 'axios'

import { parseProductRequest, Product, ProductRequest } from '@/models/product'

interface ProductState {
  products: Product[]
  isLoading: boolean
  requestError?: any
}

const productModule: Module<ProductState, {}> = {
  namespaced: true,
  state: () => ({
    products: [],
    isLoading: false,
  }),
  getters: {
    products: state => state.products,
    isLoading: state => state.isLoading,
    requestError: state => state.requestError,
  },
  mutations: {
    setProducts(state, products: Product[]) {
      state.products = Object.freeze(products) as Product[]
    },
    setLoadingState(state, isLoading: boolean) {
      state.isLoading = isLoading
    },
    setRequestError(state, error: any) {
      state.requestError = error
    },
  },
  actions: {
    async fetchProducts(context) {
      context.commit('setLoadingState', true)
      context.commit('setRequestError', undefined)

      try {
        const groceries = await axios.get<ProductRequest[]>('http://localhost:3000/grocery')
        const products = groceries.data.map(parseProductRequest)
        context.commit('setProducts', products)
      } catch (error) {
        console.log(error)
        context.commit('setRequestError', error)
      } finally {
        context.commit('setLoadingState', false)
      }
    },
  },
}

export default productModule
