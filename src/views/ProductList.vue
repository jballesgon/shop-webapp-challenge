<template>
  <product-card class="m-4" :product="product"></product-card>
</template>

<script>
import { defineComponent } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

export default defineComponent({
  name: 'ProductList',
  components: { 'product-card': ProductCard },
  data() {
    return {
      product: {
        name: 'Unbranded Metal Chair',
        description:
          'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
        imageUrl:
          'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
        price: 43,
        stock: 8,
      },
    }
  },
})
</script>
