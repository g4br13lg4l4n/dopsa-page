<template>
  <div class="hero">
    <Home/>
  </div>
</template>

<script>
import Home from './view/pages/home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
</style>

