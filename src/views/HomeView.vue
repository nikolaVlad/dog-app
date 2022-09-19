<template>
  <div>radi</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import axios from 'axios'
export default {
  name: 'HomeView',
  setup () {
    // const apiKey = '?api_key=live_rvw1WL8fCnFzHWM3cPuSNLzAJfIJOAhCRaEpvQNiXRXpLRbpelhhnNTdsZ0CKad4'
    const url = 'https://thedogapi.com/v1/images'

    onMounted(() => {
      axios.get(url).then((res) => {
        console.log(res)
      })
    })
  }
}
</script>
