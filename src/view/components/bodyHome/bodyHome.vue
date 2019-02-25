<template>
  <div class="container">
    <h3 class="subtitle is-3">Ofertas</h3>
    <div class="columns is-variable is-3 is-multiline">

      <div v-for="product in products" :key="product.identificador" class="column is-3"> 
        <div class="card" >
          <router-link :to="{ name: 'Product', params: { id: product.identificador }}">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <div class="columns is-multiline">
                  <div class="column is-6">
                    <p class="has-text-centered has-text-weight-light line-text">$ {{ product.precio_venta }}</p>
                  </div>
                  <div class="column is-6">
                    <p class="has-text-centered has-text-weight-semibold">$ {{ product.precio_oferta }}</p> 
                  </div>
                  <div class="column is-12">
                  <p class="has-text-weight-normal">{{ product.nombre_corto }}</p>
                  </div>
                </div>  
              </div>
            </div>
          </router-link>  
        </div>
      </div>
    </div>
  </div>
  
    
</template>

<script>

import Api from '../../../API/api.js'

export default {
  name: 'bodyHome',
  data () {
    return {
      products: ''
    }
  },
  mounted() {
    Api.getProducts()
    .then(resp => {
      this.products = resp.data
    })
  }
}
</script>

<style scoped>
  .line-text {
    text-decoration: line-through;
  }
</style>

