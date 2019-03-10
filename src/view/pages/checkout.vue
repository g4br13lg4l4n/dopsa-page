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
                    <b-input v-model="transaction.buyer_address.name"></b-input>
                  </b-field>

                  <b-field label="Código postal">
                    <b-input v-model="transaction.buyer_address.zip_code"></b-input>
                  </b-field>

                  <b-field label="Estado">
                    <b-input v-model="transaction.buyer_address.state"></b-input>
                  </b-field>

                  <b-field label="Ciudad">
                    <b-input v-model="transaction.buyer_address.city"></b-input>
                  </b-field>

                  <b-field label="Colonia">
                    <b-input v-model="transaction.buyer_address.colony"></b-input>
                  </b-field>

                  <b-field label="Calle">
                    <b-input v-model="transaction.buyer_address.street"></b-input>
                  </b-field>

                  <b-field label="Núm. externo">
                    <b-input v-model="transaction.buyer_address.number_external"></b-input>
                  </b-field>

                  <b-field label="Núm. interno (opcional)">
                    <b-input v-model="transaction.buyer_address.number_internal"></b-input>
                  </b-field>

                  <b-field label="Entre calle (opcional)">
                    <b-input v-model="transaction.buyer_address.between_street"></b-input>
                  </b-field>

                  <b-field label="Referencias">
                      <b-input maxlength="200"  v-model="transaction.buyer_address.reference" type="textarea"></b-input>
                  </b-field>

                  <b-field label="Teléfono de contacto">
                    <b-input v-model="transaction.buyer_address.phone"></b-input>
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
            <p class="subtitle is-size-5">{{ product.nombre }}</p>

            <p class="has-text-weight-ligth">cantidad: {{ transaction.quantity }}</p>
            <br>
            <div class="columns">
              <div class="column is-6">
                <p class="has-text-weight-normal">Subtotal:</p>
              </div> 
              <div class="column is-6">
                <p class="has-text-weight-normal"> $ {{ product.precio_oferta }}</p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <p class="has-text-weight-normal">Envío:</p>
              </div> 
              <div class="column is-6">
                <p class="has-text-weight-normal">$ {{ priceSend }}</p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <p class="has-text-weight-normal">Total:</p>
              </div> 
              <div class="column is-6">
                <p class="has-text-weight-normal">$ {{ total }}</p>
              </div>
            </div>            
            <br>
            <div class="columns">
              <div class="column is-6">
                <p class="button is-info is-fullwidth" @click="pay(product.id)">Pagar</p>
              </div>
              <div class="column is-6">
                <p class="button is-danger is-fullwidth" @click="cancel()">Cancelar</p>
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
      transaction: {
        quantity: null,
        buyer_id: null,
        product_id: null,
        buyer_address: {
          buyer_id: null,
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
        },
      },
      product: [],
      priceSend: 20,
    }
  },
  beforeMount() {
    if(!this.$session.exists()){
       this.$router.push({name:'Home'})
    }
    const session = this.$session.getAll()
    const cart = JSON.parse(CheckCart.getProductsCart())
    const quantity = cart.quantity.split('Cantidad ')
    this.transaction.product_id = cart.poduct
    this.transaction.buyer_id = session.user.id
    this.transaction.buyer_address.buyer_id = session.user.id
    this.transaction.quantity = quantity[1]

    if(cart){
      Api.getProduct('products/'+cart.poduct)
      .then(resp => {
        this.product = resp.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  methods: {
     pay(){
       console.log(this.transaction)
      Api.postTransaction('transactions', this.transaction)
        .then(resp => {
          console.log(resp)
        })
        .catch(err => {
          console.log(err)
        })
    },
    cancel() {
      CheckCart.deleteCart()
      this.$router.push({name:'Home'})
    },
  },
  computed: {
    total: function () {
      return Number(this.product.precio_oferta) + this.priceSend
    }
  }
}
</script>