<template>
  <article class="bg-white rounded-lg overflow-hidden shadow">
    <img :src="product.imageUrl" :alt="`${product.name} Image`" />
    <div class="p-2 text-gray-900">
      <h2 class="font-medium">{{ product.name }}</h2>
      <span class="text-blue-500 tracking-wider">${{ product.price }}</span>
      <p class="mt-2 text-gray-600 text-sm">{{ product.description }}</p>
      <div class="flex mt-4 items-end">
        <span>{{ product.stock }} left</span>
        <button class="ml-auto button leading-none">+</button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Product {
  name: string
  description: string
  imageUrl: string
  price: number
  stock: number
}

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: { type: Object as PropType<Product>, required: true },
  },
})
</script>
