<template>
  <nav class="p-4 bg-white flex items-center justify-between">
    <router-link class="text-orange-600" :to="{ name: 'ProductList' }">
      <i class="fas fa-shopping-basket fa-2x"></i>
    </router-link>
    <h1 class="text-2xl">{{ pageTitle }}</h1>
    <router-link class="button" :to="{ name: 'Cart' }">
      <i class="fas fa-shopping-cart"></i> ({{ cartNumItems }})
    </router-link>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

import { routeReadableNames } from '../router/mappings'

export default defineComponent({
  name: 'NavBar',
  computed: {
    pageTitle() {
      return routeReadableNames[this.$route.name]
    },
    ...mapGetters('cart', ['cartNumItems']),
  },
})
</script>
