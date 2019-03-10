<template>
  <section>
    <div class="columns is-gapless is-multiline is-mobile is-centered is-vcentered">
      <div class="column">
        <router-link :to="{ name: 'Home' }"><h1 class="title is-4">DOPSA</h1></router-link>
      </div>  
      <div class="column is-two-thirds is-centered">
        <b-field>
          <b-autocomplete
              v-model="name"
              ref="autocomplete"
              :data="filteredDataArray"
              placeholder="Buscar producto"
              @select="option => selected = option">
              <template slot="header">
                  <a @click="showAddFruit"> </a> 
              </template>
              <template slot="empty">No results for {{ name }}</template>
          </b-autocomplete>
          <p class="control">
            <button class="button is-info">Search</button>
          </p>
        </b-field>
      </div>
      <div class="column is-one-quarter">
        <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul v-if="!login">
            <li><router-link :to="{ name: 'Register' }">Crear cuenta</router-link></li>
            <li><router-link :to="{ name: 'Login' }">Ingresar</router-link></li>
          </ul>
          <ul v-else>
            <li> <a>{{ username }} </a></li>
            <li> <a @click="exit">Salir</a></li>
          </ul>
        </nav>
      </div> 
    </div>
    <Menu/>
  </section>
</template>

<script>
import Menu from '../menu/menu'
import security from '../../../security/security'
import 'buefy/dist/buefy.css'

export default {
  name: 'Head',
  components: {
    Menu
  },
  data() {
    return {
      data: [
        'Orange',
        'Apple',
        'Banana',
        'Pear',
        'Lemon',
        'Strawberry',
        'Kiwi'
      ],
      name: '',
      username: '',
      selected: null,
      login: false
    }
  },
  beforeMount(){
    if(this.$session.exists()){
      const session = this.$session.getAll()
      this.username = session.user.nombre
      this.login = true 
    }else {
      this.login = false
    }
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0
      })
    }
  },
  methods: {
    exit() {
      security.deleteSession(this)
      this.$router.push({name:'Home'})
      this.login = false
      this.username = ''
    },
    showAddFruit() {
      this.$dialog.prompt({
        message: `Fruit`,
        inputAttrs: {
          placeholder: 'e.g. Watermelon',
          maxlength: 20,
          value: this.name
        },
        confirmText: 'Add',
        onConfirm: (value) => {
          this.data.push(value)
          this.$refs.autocomplete.setSelected(value)
        }
      })
    }
  }
}
</script>

<style scoped>
  .navbar-item:hover {
    background-color: transparent !important;
  }
  .autocomplete.control{
    width: 100%;
  }
  .columns.is-gapless:not(:last-child){
    margin-bottom: 0;
  }
</style>


