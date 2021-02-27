<template>
  <div id="app">
    <Dashboard />
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
    components: {
      Dashboard,
      Footer
    }
  }

</script>

<style>
  @import './assets/styles/global.css';
</style>