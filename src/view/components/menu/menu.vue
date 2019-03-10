<template>
  <section>
    <ul class="nav site-nav">
      <li class=flyout>
        <router-link :to="{ name: 'Category', params: { id: 1 }}">Categorías</router-link>
        <ul class="flyout-content nav stacked">
          <li class="flyout-alt">
            <a href=#>Mujer</a>
            <ul class="flyout-content nav stacked panel">
                <div class="flyout-alt columns is-multiline  is-vcentered">
                  <div class="title-subcategory column is-4">
                    <h4 class="title is-5 is-spaced">
                      <router-link :to="{ name: 'Category', params: { id: 2 }}">Pantalón</router-link>
                    </h4>
                    <ul class="title-subcategory-2">
                      <li class="subtitle is-5">Marcas</li>
                      <ul>
                        <li>Mi marca</li>
                        <li>Mi marca</li>
                        <li>Mi marca</li>
                      </ul>
                    </ul>
                  </div>
                  <div class="title-subcategory column is-4">
                    <h4 class="title is-5 is-spaced">Camisa</h4>
                    <ul class="title-subcategory-2">
                      <li class="subtitle is-5">Marcas</li>
                      <ul>
                        <li>Mi marca</li>
                        <li>Mi marca</li>
                        <li>Mi marca</li>
                      </ul>
                    </ul>
                  </div>
                  <div class="title-subcategory column is-4">
                    <h4 class="title is-5 is-spaced">Shorts</h4>
                    <ul class="title-subcategory-2">
                      <li class="subtitle is-5">Marcas</li>
                      <ul>
                        <li>Mi marca</li>
                        <li>Mi marca</li>
                        <li>Mi marca</li>
                      </ul>
                    </ul>
                  </div>
                  <div class="title-subcategory column is-4">
                    <h4 class="title is-5 is-spaced">Zapatos</h4>
                    <ul class="title-subcategory-2">
                      <li class="subtitle is-5">Marcas</li>
                      <ul>
                        <li>Mi marca</li>
                        <li>Mi marca</li>
                        <li>Mi marca</li>
                      </ul>
                    </ul>
                  </div>
                  <div class="title-subcategory column is-4">
                    <h4 class="title is-5 is-spaced">Tenis</h4>
                    <ul class="title-subcategory-2">
                      <li class="subtitle is-5">Marcas</li>
                      <ul>
                        <li>Mi marca</li>
                        <li>Mi marca</li>
                        <li>Mi marca</li>
                      </ul>
                    </ul>
                  </div>
                </div>
            </ul>
          </li>
        </ul>  
      </li>
    </ul>​
  </section>
</template>

<style scoped>
  .tag {
    cursor: pointer;
  }
  .button.category {
    border: 0;
    background-color: transparent;
  }
  a {
    text-decoration:none;
  }
  .nav {
    padding-top: 8px;
    position: relative;
    list-style:none;
    margin-left:0;
    z-index: 999;
  }
  .nav > li, .nav > li > a {
    display:inline-block;
    *display:inline;
  }
  .stacked > li{
    display:list-item;
    margin: 20px 10px;
  }
  .stacked > li > a{
    display:block;
  }

  .flyout,
  .flyout-alt{
    position:relative;
  }
  .flyout-content {
    padding: 10px 14px;
    border-radius: 4px;
    background-color: white;
    position:absolute;
    top:100%;
    left:-99999px;
    height:0;
    overflow:hidden;
  }
  .flyout:hover > .flyout-content{
    left:0;
  }
  .flyout-alt:hover > .flyout-content{
    top:0;
    left:100%;
  }
  .flyout:hover > .flyout-content,
  .flyout-alt:hover > .flyout-content{
    height:auto;
    overflow:visible;
  }
  .site-nav{
    font-size:0.75em;
    font-family:sans-serif;
  }
  .site-nav a{
    line-height:1;
    font-size: 1rem;
    color: #403f3f;
    white-space:nowrap;
  }

  .site-nav .flyout:hover > a,
  .site-nav .flyout-alt:hover > a,
  .site-nav a:hover{
    color:#435704;
  }
  .site-nav a,
  .site-nav .flyout-content{
    border:0 solid #fff;
  }
  .site-nav > li:first-child > a{
    border:none;    
  }
  .panel {
    width: 70vw;
  }
  .title, .subtitle {
    margin-bottom: 5px !important;
  }
</style>