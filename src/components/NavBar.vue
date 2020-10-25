<template>
  <nav class="p-4 bg-white flex items-center">
    <router-link class="text-orange-600 mr-4" :to="{ name: 'ProductList' }">
      <i class="fas fa-shopping-basket fa-2x"></i>
    </router-link>
    <h1 class="text-2xl">{{ pageTitle }}</h1>
    <router-link
      class="bg-orange-600 hover:bg-orange-500 text-white px-3 py-2 rounded-md ml-auto"
      :to="{ name: 'Cart' }"
    >
      <i class="fas fa-shopping-cart"></i>
    </router-link>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { routeReadableNames } from '../router/mappings'

export default defineComponent({
  name: 'NavBar',
  computed: {
    pageTitle() {
      return routeReadableNames[this.$route.name]
    },
  },
})
</script>
