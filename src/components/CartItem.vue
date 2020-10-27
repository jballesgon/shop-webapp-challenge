<template>
  <article class="flex bg-white rounded overflow-hidden">
    <img
      class="w-1/4 object-cover"
      :src="item.product.imageUrl"
      :alt="`${item.product.name} Image`"
    />
    <div class="flex flex-col justify-between flex-auto px-3 py-2 text-sm text-gray-900">
      <h2 class="font-medium">{{ item.product.name }}</h2>
      <span class="self-end text-blue-500">${{ item.totalPrice }}</span>
      <span class="text-xs">{{ item.count }} in cart</span>
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
})
</script>
