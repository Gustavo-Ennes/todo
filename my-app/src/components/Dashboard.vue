<template>
  <div class="hello container-fluid">
    <Header />
    <div class="mt-4">
      <div class="row">
        <div class="col-md-8">
            <CreateTodo @createTodo="todoCreate($event)" />
        </div>
        <div class="col-md-4 my-3 my-md-0 mt-md-4">
            <DisplayBoard :numberOfTodos="numberOfTodos" @getAllTodos="getAllTodos()" />
        </div>
      </div>
    </div>
    <div class="row">
        <div class='col mt-4'>
          <Todos v-if="todos.length > 0" :todos="todos" />
        </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateTodo from './CreateTodo.vue'
import DisplayBoard from './DisplayBoard.vue'
import Todos from './Todos.vue'
import { getAllTodos, createTodo } from '../services/UserService'

export default {
  name: 'Dashboard',
  components: {
    Header,
    CreateTodo,
    DisplayBoard,
    Todos
  },
  data() {
      return {
          todos: [],
          numberOfTodos: 0
      }
  },
  methods: {
    getAllTodos() {
      getAllTodos().then(response => {
        console.log(response)
        this.todos = response
        this.numberOfTodos = this.todos.length
      })
    },
    todoCreate(data) {
      console.log('data:::', data)
      createTodo(data).then(response => {
        console.log(response);
        this.getAllTodos();
      });
    }
  },
  mounted () {
    this.getAllTodos();
  }
}
</script>