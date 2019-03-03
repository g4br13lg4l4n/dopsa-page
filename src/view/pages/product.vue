<template>
  <div>
    <section class="section head">
      <div class="container">
        <Head/>
      </div>
    </section> 

    <section class="container mt-2">
      <div class="columns">
        <div class="column is-two-thirds h-image">
          <ProductZoomer
            :base-images="images"
            :base-zoomer-options="zoomerOptions"
          />
        </div>
        <div class="column">
          <article class="tile is-child box">
            <p class="title is-size-4">{{article.nombre}}</p>
            <p class="subtitle is-size-6">{{article.descripcion}}</p>
            <p class="has-text-weight-light is-primary line-text">$ {{article.precio_venta}}</p>
            <p class="has-text-weight-semibold">$ {{article.precio_oferta}}</p>
            <div class="columns mt-1 cont-select">
              <b-field label="Cantidad">
                <b-select placeholder="Cantidad 1" >
                  <option v-for="n in article.disponibles" :key="n" >Cantidad {{ n }}</option>
                </b-select>
              </b-field>  
            </div>
            
            <div class="columns mt-1">
              <div class="column is-6">
                <button @click="toBuy(article.identificador)" class="button is-info">Comprar</button>
              </div>
              <div class="column is-6">

                <button @click="addToCart(article.identificador)" class="button is-info is-outlined">Agregar al carrito</button>
              </div>
            </div>  

          </article> 
        </div>
      </div>    
    </section>

    <section>
      <Foot/>
    </section>  
  </div>  
</template>

<script>
import Api from '../../API/api.js'
import Head from '../components/head/head'
import Foot from '../components/foot/foot'
import Security from '../../security/security'
export default {
  name: 'Home',
  components: {
    Head,
    Foot
  },
  mounted(){
    if(this.$route.params){
      Api.getProduct(this.$route.params.id)
      .then(resp => {
        this.article = resp.data
        this.disponible = parseInt(resp.data.disponible) 
      })  
    }
  },
  methods: {
    addToCart(id){
      if(id){
        this.cart.push(id)
        localStorage.cart = this.cart
      }
    },
    toBuy(id){
      this.cart.push(id)
      localStorage.cart = this.cart
      if(Security.getStorageBuyerToken()){
        this.$router.push({name:'Checkout'})
      }
      else{
        this.$router.push({name:'CheckLogin'})
      }
    }
  },
  data () {
    return {
      cart: [],
      disponible: 0,
      article: '',
      'images': {
        'thumbs': [
          {
            'id': 1,
            'url': 'https://bulma.io/images/placeholders/128x128.png'
          },
          {
            'id': 2,
            'url': 'https://bulma.io/images/placeholders/128x128.png'
          },
          {
            'id': 3,
            'url': 'https://bulma.io/images/placeholders/128x128.png'
          },
          {
            'id': 4,
            'url': 'https://bulma.io/images/placeholders/128x128.png'
          }
        ],
        'normal_size': [
          {
            'id': 1,
            'url': 'https://bulma.io/images/placeholders/256x256.png'
          },
          {
            'id': 2,
            'url': 'https://bulma.io/images/placeholders/256x256.png'
          },
          {
            'id': 3,
            'url': 'https://bulma.io/images/placeholders/256x256.png'
          },
          {
            'id': 4,
            'url': 'https://bulma.io/images/placeholders/256x256.png'
          }
        ],
        'large_size': [
          {
            'id': 1,
            'url': 'https://bulma.io/images/placeholders/480x480.png'
          },
          {
            'id': 2,
            'url': 'https://bulma.io/images/placeholders/480x480.png'
          },
          {
            'id': 3,
            'url': 'https://bulma.io/images/placeholders/480x480.png'
          },
          {
            'id': 4,
            'url': 'https://bulma.io/images/placeholders/480x480.png'
          }
        ]
      },
      'zoomerOptions': {
        'zoomFactor': 3, // numero del zoom
        'pane': 'container-round',
        'hoverDelay': 100,
        'namespace': 'zoomer',
        'move_by_click':false,
        'scroll_items': 4, // cuantos imprimimos en el carrousel
        'choosed_thumb_border_color': "#ff3d00"
      }
    }
  }
}
</script>

<style scope>
  #container-zoomer-pane-container {
    overflow: hidden;
    top: 0 !important;
    left: 0 !important;
  }
  .mt-2 {
    margin-top: 2em;
  }
  .mt-1{
    margin-top: 1em;
  }
  .h-image {
    height: 680px;
  }
  .preview-box img.responsive-image {
    height: 460px !important;
  }
  .select select{
    font-size: .6em;
  }
  .cont-select .field{
    width: 50%;
  }
  .cont-select .field select{
    width: 100%;
  }
  .select:not(.is-multiple):not(.is-loading)::after{
        top: 31%;
  }
  .line-text {
    text-decoration: line-through;
  }
</style>

