<template>
  <div class="wrapper">
    <div class="logo">Dog Shelter</div>
    <div class="hero"></div>
  </div>
</template>

<script>
import dog from '../assets/dog.jpg'
export default {
  setup () {
    return { dog }
  }
}
</script>

<style lang="scss" >
.wrapper {
  min-height: 30vh;

  .hero {
    background-image: url("https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    height: 30vh;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }

  .logo {
    color: #e74c3c;
    color: #e74c3c;
    font-family: "Cinzel", serif;
    font-weight: 300;
    font-size: 39px;
    line-height: 1.3;
    color: red;
    display: inline-block;
    line-height: 1.8;
    padding: 0 16px;
  }
}
</style>
