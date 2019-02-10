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
            <h2 class="title is-4">Registra tus datos</h2>
            <form>
              <b-field label="Nombre">
                <b-input placeholder="Nombre"></b-input>
              </b-field>
              <b-field label="Apellido">
                <b-input placeholder="Apellido"></b-input>
              </b-field>
              <b-field label="Email">
                <b-input placeholder="Email" type="email"></b-input>
              </b-field>
              <b-field label="Contraseña">
                <b-input type="password" password-reveal placeholder="Contraseña"></b-input>
              </b-field>
              <a class="button is-info">Guardar</a>
            </form> 
          </div> 
          
        </div>
      </div>
    </div>
  </section>
</template>

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
