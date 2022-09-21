<template>
  <div class="container">

    <div  class="filters">
      <div v-for="(breed , index) of breeds" :key="index">
        <div :style="{color: filter === breed ? 'green' : ''}" @click="setActive(breed)" class="filter">{{breed}}</div>
      </div>
    </div>

    <div @click="setActive('')" class="reset-filter-btn">reset</div>

    <div v-if="dogs.length" class="all-dogs-wrapper row">
      <template v-for="dog of filteredDogs" :key="dog.id">
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
  name: 'FilterWiew',
  setup () {
    const dogs = ref([])
    const breeds = ref([])
    const filter = ref('')
    const filteredDogs = ref([])

    const getBreeds = () => {
      const res = dogs.value.map(dog => dog.breed)
      breeds.value = new Set(res)
      console.log(breeds.value)
    }

    const setActive = (breed) => {
      filter.value = breed
      filtered()
    }

    const filtered = () => {
      let res = dogs.value
      if (filter.value) {
        // eslint-disable-next-line no-return-assign
        res = res.filter((dog) => dog.breed === filter.value)
      }
      filteredDogs.value = res
    }

    onMounted(async () => {
      const res = await axios.get(' http://localhost:3000/dogs')
      dogs.value = res.data

      getBreeds()
      filtered()
    })

    return { dogs, breeds, filter, setActive, filteredDogs }
  },
  components: { DogCard }
}
</script>

<style lang="scss" scoped>
  .filters
  {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 0px;
    margin-bottom: 5px;
    font-size: 1em;

    .filter
    {
      font-weight: bold;
      color: rgb(64, 64, 64);
      cursor: pointer;

    }

  }

  .reset-filter-btn
    {
      padding: 10px;
      font-weight: bold;
      color: rgb(225, 0, 0);
      cursor: pointer;
      margin-bottom: 10px;

      &:hover
      {
        background: rgba(170, 170, 170, 0.232);
      }
    }
</style>
