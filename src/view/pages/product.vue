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
            <p class="title is-size-4">Blusa primavera</p>
            <p class="subtitle is-size-6">Blusa de primera para todo tiempo</p>
            <p class="has-text-weight-light is-primary line-text">$ 12,999</p>
            <p class="has-text-weight-semibold">$ 13,999</p>

            <div class="columns mt-1 cont-select">
              <b-field label="Cantidad">
              <b-select placeholder="Cantidad 1">
                  <option value="1">Cantidad 1</option>
                  <option value="2">Cantidad 2</option>
                  <option value="3">Cantidad 3</option>
                  <option value="4">Cantidad 4</option>
                  <option value="5">Cantidad 5</option>
                  <option value="6">Cantidad 6</option>
                  </b-select>
              </b-field>  
            </div>
            
            <div class="columns mt-1">
              <div class="column is-6">
                <router-link :to="{ name: 'CheckLogin' }"><p class="button is-info">Comprar</p></router-link>
              </div>
              <div class="column is-6">
                <router-link :to="{ name: 'Home' }"><p class="button is-info is-outlined">Agregar al carrito</p></router-link>
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
import Head from '../components/head/head'
import Foot from '../components/foot/foot'
export default {
  name: 'Home',
  components: {
    Head,
    Foot
  },
  data () {
    return {
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

