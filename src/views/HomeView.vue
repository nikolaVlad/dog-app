<template>
  <div class="container">
    <div v-if="paginateDogs.length > 0" class="all-dogs-wrapper row">
      <template v-for="dog of paginateDogs" :key="dog.id">
        <DogCard :dog = "dog" class="col"/>
      </template>
    </div>
  </div>
  <Paginate class="paginate" v-model="page" :page-count="dogCount" />
</template>

<script>
import { onMounted, ref, watch } from '@vue/runtime-core'
import DogCard from '@/components/DogCard.vue'
import axios from 'axios'
import Paginate from 'vuejs-paginate-next'
export default {
  name: 'HomeView',
  setup () {
    const dogs = ref([])
    const page = ref(1)
    const offset = 8
    const paginateDogs = ref([])
    const dogCount = ref(0)

    onMounted(async () => {
      const res = await axios.get(' http://localhost:3000/dogs')
      dogs.value = res.data
      setPagination()
      dogCount.value = Math.ceil(dogs.value.length / offset)
    })

    const setPagination = () => {
      paginateDogs.value = dogs.value.slice((page.value - 1) * offset, offset * page.value)
    }

    watch(page, () => {
      setPagination()
    })

    return { dogs, page, paginateDogs, dogCount }
  },
  components: { DogCard, Paginate }
}
</script>

<style scoped>
 @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

  .paginate
  {
    padding: 10px;
    display: flex;
    justify-content: center;
  }
</style>
