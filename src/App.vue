<template>
  <nav-bar></nav-bar>
  <div class="m-4 md:m-8">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'

export default defineComponent({
  components: { 'nav-bar': NavBar },
})
</script>
