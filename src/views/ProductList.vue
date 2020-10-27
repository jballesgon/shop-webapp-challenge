<template>
  <div v-if="isLoading" class="mt-8 text-center text-gray-900">
    <i class="fas fa-spinner fa-2x fa-spin"></i>
  </div>
  <p v-else-if="requestError" class=" bg-red-600 text-white px-5 py-4 rounded-md max-w-md mx-auto">
    An error occurred while retrieving the list of products, please try again later...
  </p>
  <div
    v-else
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-screen-lg mx-auto"
  >
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-click="addToCart"
    ></product-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

import ProductCard from '@/components/ProductCard.vue'

export default defineComponent({
  name: 'ProductList',
  components: { 'product-card': ProductCard },
  computed: {
    ...mapGetters('product', ['products', 'isLoading', 'requestError']),
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    ...mapMutations('cart', ['addToCart']),
    ...mapActions('product', ['fetchProducts']),
  },
})
</script>
