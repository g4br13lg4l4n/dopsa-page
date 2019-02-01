<template>
  <div class="head-container nav-header">
    <div class="nav-bounds">
      <a class="nav-logo" href="#">DOPSA</a>
      <form action="" class="form-search-head">
        <input type="text" class="search-head" placeholder="Buscar productos" autocomplete="off" autocorrect="off" autofocus>
      </form>
      <div class="login-up">
        <a href="#">Crear cuenta</a>
        <a href="#">Ingresar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
}
</script>

<style>
  .head-container {
    background-color: #fff159;
    border: 0;
    position: relative;
  }
  .nav-header {
    height: auto;
    font-size: 13px;
    font-weight: 400;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100px;
  }
  .nav-bounds {
    max-width: 1200px;
    padding: 12px 0;
    margin: 0 auto;
  }
  .nav-logo {
    color: #333;
    text-decoration: none;
    font-size: 2em;
    font-family: 'Helvetica';
  }
  .form-search-head{
    width: 50%;
    display: inline-block;
    margin-left: 20px;
  }
  .search-head{
    -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    height: 28px;
    border: 0;
    padding: 7px 60px 7px 15px;
    border-radius: 2px;
    background-color: #fff;
    border: 0 rgba(0,0,0,.2);
    color: #333;
    font-size: 16px;
    width: 100%;
  }
  .login-up {
    width: 20%;
    display: inline-block;
  }

</style>


