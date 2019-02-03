<template>
  <section class="container category">
    <div class="columns is-gapless">
      <div class="column is-one-quarter options">
        <div class="padding">
          <div class="columns is-gapless is-multiline is-3">
            <div class="column is-full">
              <div class="tile">
                <h2 class="subtitle is-5">Categoría</h2>
              </div>  
            </div>
            <div class="column is-full filters">
              <b-field label="Ordenar">
                  <b-select placeholder="Seleccionar" expanded>
                    <!--  <option
                          v-for="option in data"
                          :value="option.id"
                          :key="option.id">
                          {{ option.user.first_name }}
                      </option> -->
                  </b-select>
                </b-field>
            </div>
            <div class="column is-full filters">
              <label class="label">
                  Marca
              </label>
              <div class="field">
                <b-checkbox>Basic</b-checkbox>
              </div>
              <div class="field">
                <b-checkbox>Basic</b-checkbox>
              </div>
              <div class="field">
                <b-checkbox>Basic</b-checkbox>
              </div>
              <div class="field">
                <b-checkbox>Basic</b-checkbox>
              </div>
            </div>
          </div>

        </div>
        
      </div>
      <div class="column options">


        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p class="data-margin">
                  <strong>Nombre de producto</strong>
                </p>
                <p>
                  <strong>$12.00</strong>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. 
                  Nullam condimentum luctus turpis.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p class="data-margin">
                  <strong>Nombre de producto</strong>
                </p>
                <p>
                  <strong>$12.00</strong>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. 
                  Nullam condimentum luctus turpis.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p class="data-margin">
                  <strong>Nombre de producto</strong>
                </p>
                <p>
                  <strong>$12.00</strong>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. 
                  Nullam condimentum luctus turpis.
                </p>
              </div>
            </div>
          </article>
        </div>




      </div>
    </div>  
  </section>
</template>

<script>
export default {
  name: 'BodyCategory'
}
</script>
<style scoped>
  .container.category {
    margin-top: 40px;
  }
  .subtitle {
    padding: 0 !important;
    padding-bottom: .8em !important;
  }
  .options .padding {
    background-color: #f3f3f3;
    box-sizing: border-box;
    padding: 14px 16px !important;
    border-radius: 4px;
  }
  .options .box {
    margin-left: 20px;
  }
  .options .tile .subtitle {
    padding: 10px 12px;
  }
  .filters {
    margin: 10px 0 !important
  }
  .data-margin {
    margin-bottom: .1em !important;
  }
</style>

