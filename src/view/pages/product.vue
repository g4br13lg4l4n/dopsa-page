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
            v-if="load"
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
                <b-select placeholder="Cantidad 1" v-model="quantity">
                  <option  v-for="n in disponible" :key="n">Cantidad {{ n }}</option>
                </b-select>
              </b-field>  
            </div>
            
            <div class="columns mt-1">
              <div class="column is-6">
                <button @click="toBuy(article.identificador)" class="button is-info">Comprar</button>
              </div>
              <div class="column is-6">

                <button @click="addToCart(article.identificador )" class="button is-info is-outlined">Agregar al carrito</button>
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
export default {
  name: 'Home',
  components: {
    Head,
    Foot
  },
  beforeCreate() {
    if(this.$route.params){
      Api.getProduct(`products/slug?slug=${this.$route.params.slug}`)
      .then(resp => {
        this.article = resp.data
        this.disponible = parseInt(resp.data.disponibles)
        resp.data.imagenes.map( (imagen, key) => {
          this.images.normal_size.push({ id: key, url: 'http://'+imagen.url })
          this.images.large_size.push({ id: key, url: 'http://'+imagen.url })
        })
        this.load = true
      })  
    }
  },
  methods: {
    addToCart(id){
      if(id) {
        this.cart.push(id)
        localStorage.shopping_cart = this.cart
      }
    },
    toBuy(id){
      if(this.$session.exists()){
        const session = this.$session.getAll()
        localStorage.cart =  JSON.stringify({ poduct: id, user: session.user.id, quantity: this.quantity})
        
        this.$router.push({name:'Checkout'})
      }
      else{
         localStorage.cart = JSON.stringify({ poduct: id, quantity: this.quantity})
        this.$router.push({name:'CheckLogin'})
      }
    }
  },
  data () {
    return {
      load: false,
      disponible: 1,
      quantity: 1,
      article: '',
      buyerId: null,
      images: {
        normal_size: [],
        large_size: []
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

