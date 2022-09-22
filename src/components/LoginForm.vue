<template>
  <div v-if="!role" class="form">
    <div class="form-body">
      <input v-model="username" type="text" placeholder="username" />
      <input v-model="password" type="password" placeholder="password" />
      <button :disabled="done" @click="onLogin">Log in</button>
    </div>
    <div v-if="error" class="error-msg"> {{error}}</div>
    <div v-if="done" class="done-msg"> Welcome to Dog Shelter. Enjoy! :)</div>
  </div>
  <div v-else>
    <button class="logout-btn" @click="logOut">Log out </button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {

  setup () {
    const error = ref('')
    const username = ref('')
    const password = ref('')
    const done = ref(false)

    const role = ref('')

    onMounted(() => {
      role.value = localStorage.getItem('role') || ''
    })

    const errors = {
      username: 'Please insert valid username - More than 2 characters.',
      password: 'Please insert valid password - More than 6 characters.',
      notFound: 'User not found.',
      incorrect: 'Incorrect password for this user.'

    }

    const onLogin = async () => {
      error.value = null
      if (!username.value || username.value.length < 3) {
        error.value = errors.username
        return
      }
      if (!password.value || password.value.length < 6) {
        error.value = errors.password
      }

      const user = await axios.get(`http://localhost:3000/users?username=${username.value}`)
      console.log(user.data)
      if (user.data.length === 0) {
        error.value = errors.notFound
        return
      }

      if (user.data[0].password !== password.value) {
        error.value = errors.incorrect
        return
      }

      done.value = true
      setTimeout(() => {
        done.value = false
        localStorage.setItem('role', user.data[0].role)
        role.value = localStorage.getItem('role')
        location.reload()
      }, 2000)
    }

    const logOut = () => {
      localStorage.removeItem('role')
      role.value = ''
      location.reload()
    }

    return { error, username, password, onLogin, done, role, logOut }
  }

}
</script>

<style lang="scss">
  .form
  {
    padding: 8px;
    width: 100%;

    .form-body
    {
      width: 100%;

    }

    input
    {
      margin: 5px;
      border: none;
      font-size: 0.9em;
      padding: 7px;
      background: transparent;
      border-bottom: 1px solid rgba(90, 90, 90, 0.745);
    }

    button
    {
      border-radius: 5px;
      outline: none;
      border: none;
      padding: 6px;
      cursor: pointer;
      background-color: rgba(104, 104, 104, 0.228);
    }

    .error-msg
    {
      font-family: Arial, Helvetica, sans-serif;
      font-size: small;
      color: rgba(255, 0, 0, 0.775);
    }

    .done-msg
    {
      color: orange;
    }

  }

  .logout-btn{
    margin: 10px;
    background: rgba(255, 0, 0, 0.8);
    border: none;
    border-radius: 5px;
    padding: 5px;
    color: white;
}
</style>
