<template>
  <article class="bg-white rounded-lg overflow-hidden shadow">
    <div class="relative pb-full sm:pb-2/3 bg-gray-600">
      <img
        class="absolute h-full w-full object-cover"
        :src="product.imageUrl"
        :alt="`${product.name} Image`"
      />
    </div>
    <div class="p-2 text-gray-900">
      <h2 class="font-medium truncate">{{ product.name }}</h2>
      <span class="text-blue-500 tracking-wider">${{ product.price }}</span>
      <p class="mt-2 h-16 overflow-hidden text-gray-600 text-sm clamp-3">
        {{ product.description }}
      </p>
      <div class="flex items-end mt-4">
        <span>{{ product.stock }} left</span>
        <button class="ml-auto button leading-none">+</button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Product } from '../models/product'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: { type: Object as PropType<Product>, required: true },
  },
})
</script>

<style lang="scss" scoped>
.clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
