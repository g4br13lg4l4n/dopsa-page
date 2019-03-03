<template>
  <div>
    <section class="section head">
      <div class="container">
        <Head/>
      </div>
    </section>
    <div class="container">
      <br/>
      <div class="columns">
        <div class="column is-8">
          <b-collapse class="card">
            <div slot="trigger" slot-scope="props" class="card-header">
              <p class="card-header-title">Registrar domicilio</p>
              <a class="card-header-icon">
                <b-icon
                  :icon="props.open ? 'menu-down' : 'menu-up'">
                </b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                <form action="">

                  <b-field label="Nombre y Apellido">
                    <b-input v-model="buy.name"></b-input>
                  </b-field>

                  <b-field label="Código postal">
                    <b-input v-model="buy.zip_code"></b-input>
                  </b-field>

                  <b-field label="Estado">
                    <b-input v-model="buy.state"></b-input>
                  </b-field>

                  <b-field label="Ciudad">
                    <b-input v-model="buy.city"></b-input>
                  </b-field>

                  <b-field label="Colonia">
                    <b-input v-model="buy.colony"></b-input>
                  </b-field>

                  <b-field label="Calle">
                    <b-input v-model="buy.street"></b-input>
                  </b-field>

                  <b-field label="Núm. externo">
                    <b-input v-model="buy.number_external"></b-input>
                  </b-field>

                  <b-field label="Núm. interno (opcional)">
                    <b-input v-model="buy.number_internal"></b-input>
                  </b-field>

                  <b-field label="Entre calle (opcional)">
                    <b-input v-model="buy.between_street"></b-input>
                  </b-field>

                  <b-field label="Referencias">
                      <b-input maxlength="200"  v-model="buy.reference" type="textarea"></b-input>
                  </b-field>

                  <b-field label="Teléfono de contacto">
                    <b-input v-model="buy.phone"></b-input>
                  </b-field>
                </form>
              </div>
            </div>
          </b-collapse>
          <br/>
          <b-collapse class="card">
            <div slot="trigger" slot-scope="props" class="card-header">
              <p class="card-header-title">Registrar pago</p>
              <a class="card-header-icon">
                <b-icon
                  :icon="props.open ? 'menu-down' : 'menu-up'">
                </b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                <form action="">

                
                </form>
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="column is-4">
          <article class="tile is-child box">
            <p class="title is-size-5">Producto</p>
            <p class="subtitle is-size-5">{{product.nombre}}</p>

            <p class="has-text-weight-ligth">cantidad: 2</p>
            <br>
            <div class="columns">
              <div class="column is-6">
                <p class="has-text-weight-normal">Subtotal:</p>
              </div> 
              <div class="column is-6">
                <p class="has-text-weight-normal"> $ {{product.precio_oferta}}</p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <p class="has-text-weight-normal">Envío:</p>
              </div> 
              <div class="column is-6">
                <p class="has-text-weight-normal">$ {{priceSend}}</p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <p class="has-text-weight-normal">Total:</p>
              </div> 
              <div class="column is-6">
                <p class="has-text-weight-normal">$ {{total}}</p>
              </div>
            </div>            
            <br>
            <div class="columns">
              <div class="column is-6">
                <p class="button is-info is-fullwidth">Pagar</p>
              </div>
              <div class="column is-6">
                <p class="button is-danger is-fullwidth">Cancelar</p>
              </div>
            </div> 
          </article> 

        </div>
      </div>
    </div>  
    <section>
      <Foot/>
    </section>  
  </div>
</template>

<script>
import Head from '../components/head/head'
import Foot from '../components/foot/foot'
import CheckCart from '../../checkCart/checkCart'
import Api from '../../API/api'

export default {
  name: 'Checkout',
  components: {
    Head,
    Foot
  },
  data () {
    return {
      product: [],
      priceSend: 20,
      buy: {
        name: '',
        zip_code: '',
        state: '',
        city: '',
        colony: '',
        street: '',
        number_external: '',
        number_internal:'',
        between_street:'',
        reference:'',
        phone:''
      }
    }
  },
  beforeMount() {
    if(CheckCart.getProductsCart()){
      Api.getProduct(CheckCart.getProductsCart())
      .then(resp => {
        this.product = resp.data
      })
    }
  },
  computed: {
    total: function () {
      return Number(this.product.precio_oferta) + this.priceSend
    }
  }
}
</script>