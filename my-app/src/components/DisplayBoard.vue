<template>
    <div class="display-board border-effect">
        <h4>Todos Created</h4>
        <div class="number">
        {{numberOfTodos}}
        </div>
        <div class="btn">
            <button @click='getAllTodos()' type="button" class="btn btn-warning text-light">Get all To-do's</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfTodos'],
        methods: {
            getAllTodos() {
                this.$emit('getAllTodos');
            }
        }
    }
</script>