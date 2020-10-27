<template>
  <div v-if="isLoading" class="mt-8 text-center text-gray-900">
    <i class="fas fa-spinner fa-2x fa-spin"></i>
  </div>
  <p v-else-if="hasError" class=" bg-red-600 text-white px-5 py-4 rounded-md max-w-md mx-auto">
    An error occurred while retrieving the list of groceries, please try again later...
  </p>
  <div
    v-else
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-screen-lg mx-auto"
  >
    <product-card
      v-for="product in productList"
      :key="product.id"
      :product="product"
    ></product-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

import ProductCard from '@/components/ProductCard.vue'
import { parseProductRequest, Product, ProductRequest } from '@/models/product'

export default defineComponent({
  name: 'ProductList',
  components: { 'product-card': ProductCard },
  data() {
    return {
      isLoading: false,
      hasError: false,
      productList: [] as Product[],
    }
  },
  mounted() {
    this.loadGroceries()
  },
  methods: {
    async loadGroceries() {
      this.isLoading = true
      this.hasError = false

      try {
        const groceries = await axios.get<ProductRequest[]>('http://localhost:3000/grocery')
        this.productList = groceries.data.map(parseProductRequest)
      } catch (error) {
        console.log(error)
        this.hasError = true
      } finally {
        this.isLoading = false
      }
    },
  },
})
</script>
