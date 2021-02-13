<template>
    <div class="container">
        <h2>To-do's</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in todos" :key="item.id">
                  <td>{{ item.title }}</td>
                  <td>{{ item.description }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Todos',
        props: ['todos']
     }
</script>