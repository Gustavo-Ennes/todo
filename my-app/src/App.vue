<template>
  <div id="app">
    <Dashboard :url='getURL()'/>
    <Footer />
  </div>
</template>

<script>

  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';

  import Dashboard from './components/Dashboard.vue';
  import Footer from './components/footer.vue';

  export default {
    name: 'App',
    data(){
      return {
        debug: false,
      }
    },
    components: {
      Dashboard,
      Footer
    },
    methods: {
      getURL(){
        return this.debug === true ? "http://localhost:5000/api/todos" : "https://kratodo.herokuapp.com/api/todos"
      }
    }
  }

</script>

<style>
  @import './assets/styles/global.css';
</style>