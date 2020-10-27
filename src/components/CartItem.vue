<template>
  <article class="flex bg-white rounded overflow-hidden">
    <img
      class="w-1/4 object-cover"
      :src="item.product.imageUrl"
      :alt="`${item.product.name} Image`"
    />
    <div
      class="flex flex-col justify-between items-start flex-auto px-3 py-2 text-sm text-gray-900"
    >
      <h2 class="font-medium">{{ item.product.name }}</h2>
      <span class="self-end text-blue-500">${{ item.totalPrice }}</span>
      <div class="flex items-end border rounded px-2">
        <button @click="$emit('decrease', item.product)">-</button>
        <span class="text-xs mx-3">{{ item.count }}</span>
        <button @click="$emit('increase', item.product)">+</button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { CartItem } from '@/models/cart'

export default defineComponent({
  name: 'CartItem',
  props: {
    item: {
      type: Object as PropType<CartItem>,
      required: true,
    },
  },
  emits: ['increase', 'decrease'],
})
</script>
