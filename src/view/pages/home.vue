<template>
  <div>
    <section class="section head">
      <div class="container">
        <Head :data="items"/>
      </div>
    </section>

    <section>
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
import Head from '../components/head/head'
import Carousel from '../components/carousel/carousel'
import BodyHome from '../components/bodyHome/bodyHome'
import Foot from '../components/foot/foot'
export default {
  name: 'Home',
  components: {
    Head,
    Carousel,
    BodyHome,
    Foot
  },
  data () {
    return {
      items: [{hola: 'mundo'}]
    }
  }
}
</script>

<style>
  .section.head {
    padding: 1rem 1.5rem .8rem 1.5rem;
    background-color: #fff159;
    height: 90px;
  }
</style>

