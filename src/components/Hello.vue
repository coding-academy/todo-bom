<template>
  <div class="hello">
      <img src="../assets/logo.png">

      <h1>Hello</h1>
      <h2><router-link to="/todos">Todos</router-link></h2>
      <h2><router-link to="/contacts">Contacts</router-link></h2>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
