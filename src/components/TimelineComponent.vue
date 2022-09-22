<template>
  <div v-for="(t, index) of timeline"  :key="index" class="timeline-wrapper">

     <span>{{t}}</span>
  </div>
</template>

<script>
export default {
  props: ['timeline'],
  setup (props) {

  }
}
</script>

<style scoped lang="scss">

</style>
