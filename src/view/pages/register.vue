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

    <div>
      <h2 v-if="registed" class="has-text-centered is-size-4 hero is-info is-medium confirm_email"> Favor de revisar su correo para confirmar su cuenta </h2>
    </div>  
    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="column is-half">

          <div class="box">
            <h2 class="title is-4">Registra tus datos</h2>
            <form>
              <b-field label="Nombre">
                <b-input v-model="form.name" placeholder="Nombre"></b-input>
              </b-field>
              <b-field label="Apellido">
                <b-input v-model="form.last_name"  placeholder="Apellido"></b-input>
              </b-field>
              <b-field label="Email">
                <b-input placeholder="Email" v-model="form.correo"  type="email"></b-input>
              </b-field>
              <b-field label="Contraseña">
                <b-input type="password" v-model="form.password"  password-reveal placeholder="Contraseña"></b-input>
              </b-field>
              <a class="button is-info" @click="save">Guardar</a>
            </form> 
          </div> 
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */ 
import Api from '../../API/api.js'
export default {
  name: 'register',
  data(){
    return {
      form: {
        last_name: '',
        name: '',
        nombre: '',
        correo: '',
        password: ''
      },
      registed: false
    }
  },
  methods: {
    save () {
      this.form.nombre = this.form.name + ' ' + this.form.last_name
      Api.createAccount(this.form)
        .then(resp => {
          this.registed = true
        })
        .catch(err => {
          console.log(err)
        })
    }
  },

}
</script>

<style scoped>
  .confirm_email {
    margin-top: -40px;
    margin-bottom: 20px;
  }
  .header {
    background-color: #fff159; 
    height: 56px;
    margin-bottom: 40px;
  }
  .margin {
    padding-top: 15px;
  }
</style>
