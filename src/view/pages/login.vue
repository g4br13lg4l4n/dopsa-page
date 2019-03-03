<template>
  <section>
    <header class="header">
      <div class="container">
        <div class="columns is-gapless is-multiline is-mobile margin">
          <div class="column">
            <router-link :to="{ name: 'Home' }"><h1 class="title is-4">DOPSA</h1></router-link>
          </div>
        </div>    
      </div>  
    </header>

    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="column is-half">

          <div class="box">
            <h2 class="title is-4">Ingresar</h2>
            <form>
              <b-field label="Email">
                <b-input placeholder="Email" v-model="form.username" type="email"></b-input>
              </b-field>
              <b-field label="Contraseña">
                <b-input  type="password" v-model="form.password" placeholder="Contraseña" password-reveal></b-input>
              </b-field>
               <a class="button is-info" @click="login">Ingresar</a>
            </form> 
          </div> 
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */ 
import Security from '../../security/security'
import Api from '../../API/api.js'
import CheckCart from '../../checkCart/checkCart'
export default {
  name: 'login',
  data(){
    return {
      form: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      Api.login(this.form)
      .then(resp => {
        if(CheckCart.getProductsCart()){
          this.$router.push({name:'Checkout'})
        }else {
          this.$router.back()
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

}
</script>

<style scoped>
  .header {
    background-color: #fff159; 
    height: 56px;
    margin-bottom: 40px;
  }
  .margin {
    padding-top: 15px;
  }
</style>