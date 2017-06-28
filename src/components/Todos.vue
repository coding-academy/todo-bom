<template>
  <section>
    <h1>Todos</h1>
    <todos-filter></todos-filter>
    <ul>
      <li v-for="(todo, idx) in todos" :key="todo._id">
        {{idx}}.
        <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo)"> {{todo.txt}}
      </li>
      <form @submit.prevent="addTodo">
        <input type="text" v-model="newTodo.txt">
        <button>Add</button>
      </form>

    </ul>

  </section>
</template>

<script>

import todoService from '../services/todo.service'
import TodosFilter from './TodosFilter'

export default {
  data() {
    return {
      newTodo: todoService.emptyTodo()
    }
  },
  created() {
    this.$store.dispatch({ type: 'TODO_LOAD'});
  },
  computed: {
    todos() {
      return this.$store.getters.filteredTodos
    }
  },
  methods: {
    toggleTodo(todo) {
      this.$store.dispatch({ type: 'TODO_TOGGLE', todo });
    },
    addTodo() {
      this.$store.dispatch({ type: 'TODO_CREATE', todo: this.newTodo });
      this.newTodo = todoService.emptyTodo();
    }
  },
  components:{
    TodosFilter
  }
}
</script>


<style scoped>
section {
  text-align: initial;
}

li {
  list-style: none;
  display: block;
  padding: 10px;
  border-bottom: 1px solid lightgray;
}
</style>
