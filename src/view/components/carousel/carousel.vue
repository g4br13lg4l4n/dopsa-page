<template>
   <carousel :per-page="1" :mouse-drag="true" :loop="true" :autoplay="true" paginationPosition="bottom-overlay">
      <slide>
        <img src="../../../imgs/1.png" alt="Img 1">
      </slide>
      <slide>
        <img src="../../../imgs/2.png" alt="Img 2">
      </slide>
      <slide>
        <img src="../../../imgs/3.png" alt="Img 3">
      </slide>
    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

