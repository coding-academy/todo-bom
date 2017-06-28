<template>
  <div id="app">
    <todos-progress></todos-progress>

    <router-view></router-view>
  </div>
</template>

<script>

import TodosProgress from './components/TodosProgress'

export default {
  name: 'app',
  created() {
    window.theStore = this.$store
  },
  components: {
    TodosProgress
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
