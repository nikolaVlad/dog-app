<template>
  Potrebno naoraviti timeline
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { onMounted } from '@vue/runtime-core'
import axios from 'axios'
import 'vue3-timeline/dist/style.css'
import { Timeline, TimelineTitle, TimelineItem } from 'vue3-timeline'
export default {
  components: [Timeline, TimelineTitle, TimelineItem],
  setup () {
    const route = useRoute()
    const dogTimeline = ref([])
    const id = ref(null)
    const notFound = ref(false)

    const getDogTimeline = async () => {
      const res = await axios.get(`http://localhost:3000/dogs?id=${id.value}`)
      if (res?.data?.length === 0) {
        notFound.value = true
      }
      dogTimeline.value = res.data[0].timeline
      console.log(dogTimeline.value)
    }

    onMounted(async () => {
      id.value = route.params.id || null
      await getDogTimeline()
    })
  }
}
</script>

<style>

</style>
