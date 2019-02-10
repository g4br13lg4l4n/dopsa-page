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
                    <b-input v-model="name"></b-input>
                  </b-field>

                  <b-field label="Código postal">
                    <b-input v-model="name"></b-input>
                  </b-field>

                  <b-field label="Estado">
                    <b-input v-model="name"></b-input>
                  </b-field>

                  <b-field label="Municipio">
                    <b-input v-model="name"></b-input>
                  </b-field>

                  <b-field label="Colonia">
                    <b-input v-model="name"></b-input>
                  </b-field>

                  <b-field label="Calle">
                    <b-input v-model="name"></b-input>
                  </b-field>

                  <b-field label="Núm. externo">
                    <b-input v-model="name"></b-input>
                  </b-field>

                  <b-field label="Núm. interno (opcional)">
                    <b-input v-model="name"></b-input>
                  </b-field>

                  <b-field label="Entre calle (opcional)">
                    <b-input v-model="name"></b-input>
                  </b-field>

                  <b-field label="Referencias">
                      <b-input maxlength="200" type="textarea"></b-input>
                  </b-field>

                  <b-field label="Teléfono de contacto">
                    <b-input v-model="name"></b-input>
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
            <p class="subtitle is-size-5">Blusa primavera</p>

            <p class="has-text-weight-ligth">cantidad: 2</p>
            <br>
            <div class="columns">
              <div class="column is-6">
                <p class="has-text-weight-normal">Subtotal:</p>
              </div> 
              <div class="column is-6">
                <p class="has-text-weight-normal">$13,99</p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <p class="has-text-weight-normal">Envío:</p>
              </div> 
              <div class="column is-6">
                <p class="has-text-weight-normal">$20,00</p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <p class="has-text-weight-normal">Total:</p>
              </div> 
              <div class="column is-6">
                <p class="has-text-weight-normal">$33,999</p>
              </div>
            </div>            
            <br>
            <div class="columns">
              <div class="column is-6">
                <router-link :to="{ name: 'CheckLogin' }"><p class="button is-info is-fullwidth">Pagar</p></router-link>
              </div>
              <div class="column is-6">
                <router-link :to="{ name: 'CheckLogin' }"><p class="button is-danger is-fullwidth">Cancelar</p></router-link>
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
export default {
  name: 'Checkout',
  components: {
    Head,
    Foot
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>