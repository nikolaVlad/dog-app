<template>
  <div   class="timeline-wrapper">
  <Timeline  linecolor="red">
    <TimelineItem v-for="(t, index) of timeline" :key="index"   line-color="green">{{t}}</TimelineItem>
  </Timeline>
  </div>

</template>

<script>
import 'vue3-timeline/dist/style.css'
import { Timeline, TimelineItem } from 'vue3-timeline'
export default {
  props: ['timeline'],
  components: { Timeline, TimelineItem },
  setup (props) {

  }
}
</script>

<style scoped lang="scss">
  .timeline-wrapper
  {
    height: 50vh;
    // display: flex;
    padding: 90px 50px;
  }
  .timeline
  {
    margin-left: 50% !important;

    &::after
    {
      background: rgb(0, 0, 0);

    }
  }

  .timeline-circle
    {
      background: red !important;
    }
</style>
