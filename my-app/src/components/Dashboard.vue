<template>
  <div class="hello container-fluid">
    <Header />
    <div class="mt-4 my-3">
      <div class="row">
        <div class="col-md-8">
            <CreateTodo @createTodo="todoCreate" />
        </div>
        <div class="col-md-4 my-3 my-md-0 mt-md-4">
            <DisplayBoard :numberOfTodos="numberOfTodos" :numberOfFinishedTodos="numberOfFinishedTodos"/>
        </div>
      </div>
    </div>
    <div class="row mr-3">
        <div class='col-8'>
          <TodoList 
            @deleteTodo="deleteTodo" 
            :todos='todos' 
            :title="'Todos'"
            :showDeleteButton="true"
            @changeList='changeList'
            @markAsDone='markAsDone'
          />
        </div>
        <div class='col-4'>
          <TodoList 
            @deleteTodo="deleteTodo" 
            :todos='done' 
            :title="'Dones'"
            :showDeleteButton='false'
            @changeList='changeList'
            @markAsDone='markAsDone'
          />
        </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateTodo from './CreateTodo.vue'
import DisplayBoard from './DisplayBoard.vue'
import TodoList from './TodoList.vue'
import { createTodo } from '../services/UserService'

export default {
  name: 'Dashboard',
  components: {
    Header,
    CreateTodo,
    DisplayBoard,
    TodoList
  },
  data() {
      return {
          todos: [],
          done:[],
          numberOfTodos: 0,
          numberOfFinishedTodos:0
      }
  },
  methods: {
    async markAsDone(data){
      let status = data.status === 'todo' ? 'done' : 'todo';
      let url = `http://localhost:5000/api/todos/?_id=${data.id}`;
      let body = {status: status};
      let res =  await fetch(url, { 
          method: 'PUT', 
          headers: { 
              'Content-type': 'application/json'
          },
          body: JSON.stringify(body)
      });
      console.log(res);
      this.fetchTodos();
    },
    async changeList(){
      await this.fetchTodos();
    },
    letMeSee(){
      console.log(
        "this is my data:\n\ntodos:\n"
        + JSON.stringify(this.todos) 
        + "\ndone:\n" 
        + JSON.stringify(this.done)
        + "\nnumber of Todo's: \n" 
        + this.numberOfTodos
        + "\nnumber of Done Todo's: \n"
        + this.numberOfFinishedTodos
      );
    },
    async fetchFinished(){
      const response = await fetch('http://localhost:5000/api/todos/finished');
      const json = await response.json();
      this.done = json.todos;
      this.numberOfFinishedTodos = this.done ? this.done.length : 0;
      console.log("Just fetched this finished todos:\n\n" + JSON.stringify(this.done))
    },
    async fetchUnfinished(){
      const response = await fetch('http://localhost:5000/api/todos/unfinished');
      const json = await response.json();
      this.todos = json.todos;
      this.numberOfTodos = this.todos ? this.todos.length : 0;
      console.log("Just fetched this todos:\n\n" + JSON.stringify(this.todos))
    },
    async fetchTodos(){
      this.fetchUnfinished();
      this.fetchFinished();
    },
    async deleteTodo(todo){

      console.log("todo id sent to api: " + JSON.stringify(todo.id));
      let url = "http://localhost:5000/api/todos/?_id=" + todo.id;
      console.log("URl generated: " + url);
      let res =  await fetch(url, { 
          method: 'DELETE', 
          headers: { 
              'Content-type': 'application/json'
          },
      });
      await this.fetchTodos();
      return res 
    },
    todoCreate(data) {
      console.log('data:::', data)
      createTodo(data).then(async response => {
        console.log(response);
        await this.fetchTodos();
      });
    }
  },
  async mounted(){
    await this.fetchTodos();
    console.log("todos fetched by dashboard at mounting:");
    console.log(this.todos);
  }
}
</script>