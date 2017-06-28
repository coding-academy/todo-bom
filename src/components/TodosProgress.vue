<template>
  <div>
    <h3>Work Done:
    <progress max="100" :value="todosProgress" :title="todosProgress"></progress>
    </h3>
  </div>
</template>

<script>
  export default {
    computed:{
      todosProgress() {
        return this.$store.getters.progress;
      }
    }
  }

</script>
