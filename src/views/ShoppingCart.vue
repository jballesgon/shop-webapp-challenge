<template>
  <cart-item
    class="mb-4"
    v-for="item in cartContent"
    :key="item.product.id"
    :item="item"
  ></cart-item>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

import CartItem from '@/components/CartItem.vue'

export default defineComponent({
  name: 'ShoppingCart',
  components: { 'cart-item': CartItem },
  computed: {
    ...mapGetters('cart', ['cartContent']),
  },
})
</script>
