<template>
  <div class="menu">
    <div class="menu-card">
      <router-link to="/">All dogs</router-link>
    </div>

    <div class="menu-card">
      <router-link to="/filter">Filters</router-link>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .menu{
    height: 90px;
    background: rgba(81, 81, 81, 0.177);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Verdana;
    font-weight: 500;

    .menu-card {
      margin: 40px;
      padding: 10px;
      *{
        text-decoration: none ;
        color: rgba(137, 0, 0, 0.688);

      }

      &:hover{
        border-bottom: 2px solid white;
      }
    }
  }

</style>
