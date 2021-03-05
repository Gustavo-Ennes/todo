<template>
  <div class="hello container-fluid">
    <Header />
    <div class="mt-4 my-3">
      <div class="row">
        <div class="col-md-8">
            <CreateTodo @createTodo="todoCreate" :isLoading="isLoading"/>
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
            @onDrop="onDrop"
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
            @onDrop="onDrop"
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

export default {
  name: 'Dashboard',
  props:['url'],
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
          numberOfFinishedTodos:0,
          isLoading: false
      }
  },
  methods: {
    async onDrop(payload){
      this.updateTodo(payload.sender);
      this.updateTodo(payload.receiver);
    },
    async markAsDone(data){
      this.isLoading = true;

      let status = data.status === 'todo' ? 'done' : 'todo';
      let url = `${this.url}/?_id=${data.id}`;
      let body = {status: status, order:this.getOrder(status)};
      let res =  await fetch(url, { 
          method: 'PUT', 
          headers: { 
              'Content-type': 'application/json'
          },
          body: JSON.stringify(body)
      });
      console.log(res);
      this.fetchTodos();
      
      this.isLoading = false;
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
      try{
        const response = await fetch(`${this.url}/finished`);
        const json = await response.json();
        this.done = json.todos;
        this.numberOfFinishedTodos = this.done ? this.done.length : 0;
        console.log("Just fetched this finished todos:\n\n" + JSON.stringify(this.done))
      }catch(err){
        console.error(err)
      }
    },
    async fetchUnfinished(){
      try{
        const response = await fetch(`${this.url}/unfinished`);
        const json = await response.json();
        this.todos = json.todos;
        this.numberOfTodos = this.todos ? this.todos.length : 0;
        console.log("Just fetched this todos:\n\n" + JSON.stringify(this.todos))
      }catch(err){
        console.error(err);
      }
    },
    async fetchTodos(){
      this.isLoading = true;

      this.fetchUnfinished();
      this.fetchFinished();

      this.isLoading = false;
    },
    async deleteTodo(todo){
      try{
        this.isLoading = true;

        console.log("todo id sent to api: " + JSON.stringify(todo.id));
        let url = `${this.url}/?_id=${todo.id}`;
        console.log("URl generated: " + url);
        let res =  await fetch(url, { 
            method: 'DELETE', 
            headers: { 
                'Content-type': 'application/json'
            },
        });
        await this.fetchTodos();

        this.isLoading = false;

        return res 
      }catch(err){
        console.error(err);
      }
    },
    async todoCreate(data) {
      this.isLoading =  true;
      
      console.log("Create sent...\nData passed to api:");
      console.log(JSON.stringify(data));
      data.order = this.getOrder(data.status);
      const response = await fetch(this.url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      })
      await this.fetchTodos();

      this.isLoading = false;

      return await response.json();
    },
    getOrder(type){
      let maxOrderTodo = 0;
      let maxOrderDone = 0;
      //if todo have no order number, like the first ones
      //we have to give they an order number before
      //to after get the highest order number to give to our new todo
      this.todos.map(async todo =>{
        if(todo.order > maxOrderTodo){
          maxOrderTodo = todo.order
        }
      });
      this.done.map(async done => {
        if(done.order > maxOrderDone){
          maxOrderDone = done.order
        }
      });
      return type == 'todo' ? ++maxOrderTodo : ++maxOrderDone
    },
    async updateTodo(data){
      this.isLoading = true;

      let url = `${this.url}/?_id=${data.id}`;
      let res =  await fetch(url, { 
          method: 'PUT', 
          headers: { 
              'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
      });
      console.log(res);
      this.fetchTodos();
      
      this.isLoading = false;
    }
  },
  async mounted(){
    await this.fetchTodos();
    console.log("todos fetched by dashboard at mounting:");
    console.log(this.todos);
  }
}
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200&family=Stick&display=swap');
</style>