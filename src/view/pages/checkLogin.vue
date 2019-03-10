<template>
  <section class="hero is-pink is-full">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
              <router-link :to="{ name: 'Home' }"><h1 class="title is-4 navbar-item">DOPSA</h1></router-link>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="subtitle">
          Ingresa a tu cuenta para comprar
        </h2>
      </div>
    </div>
    <div class="float-form">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-half">

            <div class="box">
              <div class="columns is-mobile is-centered is-multiline">
                <div class="column is-12 is-text-center">
                   <router-link :to="{ name: 'Login' }"><p class="button is-info">Ingresar con mi cuenta</p></router-link>
                </div>
                <div class="column is-12 is-text-center">
                  <router-link :to="{ name: 'Register' }"><p class="button is-outlined">Registrarme</p></router-link>
                </div>
              </div>                
            </div> 

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CheckLogin',
}
</script>

<style scoped>
  .hero.is-pink {
    background-color: #fff159;
  }
  .is-text-center {
    text-align: center;
  }
  .float-form {
    position: relative;
    bottom: -65px;
  }
</style>

