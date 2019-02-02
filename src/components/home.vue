<template>
  <div>
    <section class="section head">
      <div class="container">
        <Head/>
      </div>
    </section>
    <section class="is-centered">
      <Carousel/>
    </section>
    <section>
      <BodyHome/>
    </section>
    <section>
      <Foot/>
    </section>  
  </div>
</template>

<script>
import Head from './head/head'
import Carousel from './carousel/carousel'
import BodyHome from './bodyHome/bodyHome'
import Foot from './foot/foot'
export default {
  name: 'Home',
  components: {
    Head,
    Carousel,
    BodyHome,
    Foot
  }
}
</script>

<style>
  .section.head {
    padding: 1rem 1.5rem .8rem 1.5rem;
    background-color: #fff159;
  }
</style>

