<template>
  <div class="container">
    <h3 class="subtitle is-3">Ofertas</h3>
    <div class="columns is-variable is-3 is-multiline">

      <div v-for="product in paginatedItems" :key="product.identificador" class="column is-3"> 
        <div class="card" >
          <router-link :to="{ name: 'Product', params: { slug: product.slug }}">
            <div class="card-image">
              <figure class="image is-4by3">
                <img v-if="product.imagen" :src="product.imagen"  alt="Placeholder image">
                <img v-else src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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
      <b-pagination
        :total="total"
        :current.sync="current"
        :order="order"
        :size="size"
        :simple="isSimple"
        :rounded="isRounded"
        :per-page="perPage">
      </b-pagination>
    </div>
  </div>
  
    
</template>

<script>

import Api from '../../../API/api.js'

export default {
  name: 'bodyHome',
  data () {
    return {
      items: [],
      total: 0,
      current: 1,
      perPage: 20,
      order: '',
      size: '',
      isSimple: false,
      isRounded: true
    }
  },
  created() {
    for(var i = 1; i <= 100; i++){
      this.items.push(i)
    }
  },
  computed: {
    paginatedItems() {
      let page_number = this.current-1
      return this.items.slice(page_number * this.perPage, (page_number + 1) * this.perPage);
    }
  },
  mounted() {
    Api.getProducts()
    .then(resp => {
      this.items = resp.data
      this.total = resp.data.length
    })
  }
}
</script>

<style scoped>
  .line-text {
    text-decoration: line-through;
  }
  .pagination {
    margin-top: 10px;
  }
</style>

