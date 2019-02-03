<template>
  <div>
    <section class="section head">
      <div class="container">
        <Head/>
      </div>
    </section>

    <section>
      <BodyCategory/>
    </section>
    
    <section>
      <Foot/>
    </section>  
  </div>
</template>

<script>
import Head from '../components/head/head'
import BodyCategory from '../components/bodyCategory/bodyCategory'
import Foot from '../components/foot/foot'
export default {
  name: 'Home',
  components: {
    Head,
    BodyCategory,
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

