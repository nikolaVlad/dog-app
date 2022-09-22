<template>
  <div class="wrapper">
    <div class="head-line">
      <div class="logo">Dog Shelter</div>
      <LoginForm/>
    </div>

    <div class="hero"></div>
  </div>
</template>

<script>
import dog from '../assets/dog.jpg'
import LoginForm from './LoginForm.vue'
export default {
  setup () {
    return { dog }
  },
  components: { LoginForm }
}
</script>

<style lang="scss" >
.wrapper {
  min-height: 30vh;

  .head-line
  {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .hero {
    background-image: url("http://www.zooberza.com/oglasi_slike/77f02e5d-f41c-482d-9a7f-5b16d0325856.jpg");
    height: 35vh;
    background-position: center
    ;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }

  .logo {
    color: green;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
    font-weight: 300;
    font-size: 39px;
    line-height: 1.3;
    display: inline-block;
    line-height: 1.8;
    padding: 0 16px;
  }
}
</style>
