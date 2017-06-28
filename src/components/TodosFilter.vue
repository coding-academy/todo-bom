<template>
  <section>
    <h2>Filter</h2>
    <input type="text" v-model="localFilter.txt" placeholder="Start Typing to filter Todos">
    <ul>
      <li>
        <input type="radio" v-model="localFilter.status" value="all" > All
      </li>
      <li>
        <input type="radio" v-model="localFilter.status" value="completed" > Completed
      </li>
    </ul>

    {{localFilter}}
  </section>
</template>

<script>
export default {
  data() {
    return {
      localFilter: Object.assign({}, this.$store.state.filterBy)
    }
  },
  watch: {
    localFilter: {
      handler()  {
        console.log('CHANGED!');
        this.$store.commit({type: 'SET_FILTER',
                           filter:this.localFilter});
      },
      deep: true
    }
  }
}
</script>

<style scoped>
section {
  background-color: lightpink;
  padding: 10px;
}
</style>
