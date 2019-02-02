<template>
  <section>
    <b-dropdown hoverable>
      <button class="button category" slot="trigger">
        <span>Categorías</span>
        <b-icon icon="menu-down"></b-icon>
      </button>
      <p class="menu-label">
        mujer
      </p>
      <p class="menu-label">
        mujer
      </p>
    </b-dropdown>
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
</style>