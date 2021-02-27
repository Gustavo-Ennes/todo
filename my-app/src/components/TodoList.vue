<template>
    <div class="border p-2">
        <h2 class='mb-2'>{{this.title}}</h2> 
        <div v-if='todos.length > 0'>       
            <div v-for="item in todos" :key="item._id">
                <Todo 
                    :todo="item"
                    :buttonName="item.status === 'todo' ? 'Done' : '<'"
                    :showDeleteButton="showDeleteButton"
                    @deleteTodo="deleteTodo" 
                    @changeList='changeList'
                    @markAsDone='markAsDone'   
                />
            </div>
        </div>
        <div v-else>
            <small> There's nothing in {{ this.title }}.</small>
        </div>
    </div>
</template>

<script>    
    import Todo from './Todo.vue';

    export default {
        name: 'TodoList',
        props: ['todos', 'title', 'showDeleteButton'],
        components:{
            Todo
        },
        methods:{
            markAsDone(data){
                this.$emit('markAsDone', data)
            },
            changeList(){
                this.$emit('changeList');
            },
            async deleteTodo(todo){
                this.$emit('deleteTodo', todo);
            }
        }
    }
</script>