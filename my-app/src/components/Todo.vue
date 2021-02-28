<template>
    <div class='row'>
        <div class='col-12 col-sm-4 col-lg-2'>
            <div>
                <i class="far fa-thumbs-up text-secondary" v-if="!isDone()" @click="$emit('markAsDone', doneData())"></i>
                <i class="fas fa-check text-success" v-if="isDone()" @click="$emit('markAsDone', doneData())"></i>
            </div>
        </div>
        <div class='col-12 col-sm-8 col-lg-8'>
            <div class='mt-1'>
                <p v-bind:class='{isToogled: isDone()}'>
                    {{ todo.title }} - {{ todo.status }}
                </p>
            </div>
        </div>
        <div class='col-lg-2' v-if='showDeleteButton'>                
            <b-button @click="$emit('deleteTodo', $data)" variant="danger" block>X</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Todo',
    props: [
        'todo',
        'buttonName',
        'showDeleteButton'
    ],
    data(){
        return{
            title: this.todo.title,
            description: this.todo.description,
            status: this.todo.status,
            id: this.todo._id
        };
    },
    methods:{
        doneData(){
            return {
                id: this.id,
                status: this.status
            }
        },
        isDone(){
            return this.status === 'done' ? true : false;
        }
    }
    
}
</script>

<style scoped>
    .isToogled{
        text-decoration: line-through;
    }
</style>