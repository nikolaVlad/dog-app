<template>
  <div :class="['card', {'mini' : isMini}]">
    <div class="title"><div class="txt">
      <router-link :to="`/dog/${dog.id}`" > {{dog.name}}  </router-link>
    </div>
    <div @click="onClickMini" class="btn">  {{isMini ? 'Card': 'Mini Card'}}</div></div>
    <div class="body">
      <img :src="dog.image" />
      <div class="info">
        <div class="breed">Breed: {{dog.breed}}</div>
        <div class="registration">Registration: {{dog.registration}}</div>
        <div class="birth">Birth date: {{dog.birthdate}}</div>
        <div class="timeline">Latest timeline activity: {{dog.timeline[dog.timeline.length - 1]}}</div>

        <div class="show-timeline">   <router-link  :to="`/dog-timeline/${dog.id}`" > Show timeline... </router-link> </div>
      </div>

    </div>

  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: ['dog'],

  setup () {
    const isMini = ref(false)
    const onClickMini = () => {
      isMini.value = !isMini.value
    }

    return { isMini, onClickMini }
  }
}
</script>

<style lang="scss" scoped>
  .card{
    &.mini
    {
      background: rgb(63, 125, 186);
      height: 220px;
      min-width: 125px;
      font-size: 13px;
      img {
        height: 130px;
      }
      .info
      {
        display: none;

      }
    }

    margin: 10px 20px;
    height: 390px;
    background: rgb(85, 133, 13);
    border-radius: 25px;

    color:black;
    font-weight: 500;
    text-align: left;
    padding: 20px;
    min-width: 250px;

    img{
      width:100%;
      height:180px
    }

    .title
    {
      text-align: center;
      margin-bottom: 15px;
      font-weight: 700;
      display: flex;
      align-items: center;

      .txt
      {
        width: 100%;
        color: green !important;
        font-size: 1.1em;
        * {
          text-decoration: none !important;
          color: rgba(0, 0, 0, 0.873);
        }

      }
      .btn{
        margin-left: auto;
        background: rgba(128, 128, 128, 0.48);
        color: white;
        padding: 10px;
        border-radius: 9px;
        cursor: pointer;
      }
    }

    .info
    {
      font-size: 0.9em;

    }

    .body
    {
      .image
      {
        margin-bottom: 15px;
      }
      .show-timeline
      {
        margin-top: 10px;
        *{
          color: rgba(255, 255, 255, 0.704);
        }

        cursor: pointer;

        &:hover
        {
          color: rgba(0, 242, 255, 0.543) !important;
        }

      }
    }
  }
</style>
