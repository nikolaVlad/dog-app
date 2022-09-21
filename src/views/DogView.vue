<template>
<div class="not-found" v-if="notFound">Oops error 404: Not found information about this dog :(</div>
 <div v-else-if="dog" class="dog-view">
  <div class="dog-image row">
    <img class="col" :src ="dog.image"/>
  </div>
  <div class="dog-name">{{dog.name}}</div>
  <div class="dog-info">
    <div class="info-row">
      <div class="property-name">Breed</div>
      <div class="property-value"> {{dog.breed}} </div>
    </div>
    <div class="info-row">
      <div class="property-name">Registration</div>
      <div class="property-value"> {{dog.registration}} </div>
    </div>
    <div class="info-row">
      <div class="property-name">Birth Date</div>
      <div class="property-value"> {{dog.birthdate}} </div>
    </div>

  </div>
 </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup () {
    const route = useRoute()

    const id = ref(null)
    const notFound = ref(false)
    const dog = ref({})

    const getOneDog = async () => {
      const res = await axios.get(`http://localhost:3000/dogs?id=${id.value}`)
      if (res?.data?.length === 0) {
        notFound.value = true
      }
      dog.value = res.data[0]
    }

    onMounted(async () => {
      id.value = route.params.id || null
      await getOneDog()
    })

    return { notFound, dog }
  }
}
</script>

<style lang="scss">

  .not-found
  {
    background: white;
    padding: 30px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.559);
  }
  .dog-view
  {
    background: rgba(152, 152, 152, 0.134);
    padding: 20px;
    min-height: 45vh;
    font-size: 0.9rem;
  }

  .dog-name
  {
    margin-top: 10px;
  }

  .dog-info
  {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .info-row
    {
      padding: 20px;
      padding-top: 10px;

      .property-name
      {
        font-weight: bold;
      }

      .property-value
      {
        // font-weight: bold;
        color: rgba(0, 0, 0, 0.652);
      }
    }
  }

</style>
