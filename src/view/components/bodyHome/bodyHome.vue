<template>
  <div class="container">
    <h3 class="subtitle is-3">Ofertas</h3>
    <div class="columns is-variable is-3 is-multiline">

      <div v-for="article in articles" :key="article.id" class="column is-3"> 
        <div class="card" >
          <router-link :to="{ name: 'Product', params: { id: article.id }}">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <div class="columns is-multiline">
                  <div class="column is-6">
                    <p class="has-text-centered has-text-weight-light line-text">$ {{ article.salePrice }}</p>
                  </div>
                  <div class="column is-6">
                    <p class="has-text-centered has-text-weight-semibold">$ {{ article.offerPrice }}</p> 
                  </div>
                  <div class="column is-12">
                  <p class="has-text-weight-normal">{{ article.name }}</p>
                  </div>
                </div>  
              </div>
            </div>
          </router-link>  
        </div>
      </div>

      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <p class="has-text-centered has-text-weight-light line-text">$ 12,999</p>
                </div>
                <div class="column is-6">
                  <p class="has-text-centered has-text-weight-semibold">$ 13,999</p>
                </div>
                <div class="column is-12">
                 <p class="has-text-weight-normal">Lorem ipsom de texto de ejemplo para el producto</p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <p class="has-text-centered has-text-weight-light line-text">$ 12,999</p>
                </div>
                <div class="column is-6">
                  <p class="has-text-centered has-text-weight-semibold">$ 13,999</p>
                </div>
                <div class="column is-12">
                 <p class="has-text-weight-normal">Lorem ipsom de texto de ejemplo para el producto</p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">   
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <p class="has-text-centered has-text-weight-light line-text">$ 12,999</p>
                </div>
                <div class="column is-6">
                  <p class="has-text-centered has-text-weight-semibold">$ 13,999</p>
                </div>
                <div class="column is-12">
                 <p class="has-text-weight-normal">Lorem ipsom de texto de ejemplo para el producto</p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">   
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <p class="has-text-centered has-text-weight-light line-text">$ 12,999</p>
                </div>
                <div class="column is-6">
                  <p class="has-text-centered has-text-weight-semibold">$ 13,999</p>
                </div>
                <div class="column is-12">
                 <p class="has-text-weight-normal">Lorem ipsom de texto de ejemplo para el producto</p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">   
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <p class="has-text-centered has-text-weight-light line-text">$ 12,999</p>
                </div>
                <div class="column is-6">
                  <p class="has-text-centered has-text-weight-semibold">$ 13,999</p>
                </div>
                <div class="column is-12">
                 <p class="has-text-weight-normal">Lorem ipsom de texto de ejemplo para el producto</p>
                </div>
              </div>  
            </div>
          </div>
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
      articles: ''
    }
  },
  mounted() {
    Api.getArticles()
    .then(resp => {
      this.articles = resp.data
    })
  }
}
</script>

<style scoped>
  .line-text {
    text-decoration: line-through;
  }
</style>

