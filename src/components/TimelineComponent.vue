<template>
  <div v-for="(t, index) of timeline"  :key="index" class="timeline-wrapper">
      <div class="item">
        <div class="circle-wrapper">
          <div class="circle">O</div>
          <div class="line">|</div>
        </div>
        <div class="text">{{t}}</div>
      </div>

      <div>ovde</div>
  </div>
</template>

<script>
import { onMounted } from 'vue-demi'
export default {
  props: ['timeline'],

  setup (props) {
    onMounted(() => {
      console.log(props.timeline)
    })
  }
}
</script>

<style lang="scss">

  .item
  {
    display: flex;
    margin-left: auto;
    padding-left: 50%;

    .text
    {
      margin-left: 10px;
    }
  }
</style>
