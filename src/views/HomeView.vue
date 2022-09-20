<template>
  <div class="container">
    <div v-if="dogs.length" class="all-dogs-wrapper row">
      <template v-for="dog of dogs" :key="dog.id">
        <DogCard :dog = "dog" class="col"/>
      </template>

    </div>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import DogCard from '@/components/DogCard.vue'
import axios from 'axios'
export default {
  name: 'HomeView',
  setup () {
    const dogs = ref([])
    onMounted(async () => {
      const res = await axios.get(' http://localhost:3000/dogs')
      dogs.value = res.data
    })

    return { dogs }
  },
  components: { DogCard }
}
</script>

<style scoped>
  .all-dogs-wrapper
  {
    min-height: 100vh;
  }
</style>
