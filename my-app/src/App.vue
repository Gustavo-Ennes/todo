<template>
  <div id="app">
    <Dashboard :url='getURL()'/>
    <Footer />
  </div>
</template>

<script>

  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import Dashboard from './components/Dashboard.vue'
  import Footer from './components/footer.vue'

  export default {
    name: 'App',
    data(){
      return {
        debug: true,
      }
    },
    components: {
      Dashboard,
      Footer
    },
    methods: {
      getURL(){
        return this.debug === true ? "http://localhost:5000/api/todos" : "https://kratodo.herokuapp.com/api/todos"
      },
      getLogoURL(){
        return this.debug === true ? "http://localhost:5000/logo.png" : "https://kratodo.herokuapp.com/logo.png"     
      },
      getIndexURL(){
        return this.debug === true ? "http://localhost:5000" : "https://kratodo.herokuapp.com"
      },
    },
    ///SEO////
    metaInfo: {
      title: 'Krato-do',
      titleTemplate: '%s',
      meta:[
        {"http-equiv": "Content-Type", content: 'text/html; charset=utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', content: 'Simple todo app'},
        {property: 'og:title', content: 'Krato-to'},
        {property: 'og:site_name', content: 'kratodo'},
        // The list of types is available here: http://ogp.me/#types
        {property: 'og:type', content: 'website'},
        // Should the the same as your canonical link, see below.
        {property: 'og:url', content: this.getIndexURL()},
        {property: 'og:image', content: this.getLogoURL()},
        // Often the same as your meta description, but not always.
        {property: 'og:description', content: 'A Simple todo app.'},

        // // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: this.getIndexURL()},
        {name: 'twitter:title', content: 'Krato-do'},
        {name: 'twitter:description', content: 'A simple todo app.'},
        // // Your twitter handle, if you have one.
        // {name: 'twitter:creator', content: '@alligatorio'},
        // {name: 'twitter:image:src', content: 'https://www.my-site.com/my-special-image.jpg'},

        // Google / Schema.org markup:
        {itemprop: 'name', content: 'Krato-do'},
        {itemprop: 'description', content: 'A simple todo app.'},
        {itemprop: 'image', content: this.getLogoURL()}
      ],
      link: [
        {rel: 'canonical', href: this.getIndexURL()}
      ]
    }
  }

</script>

<style>
  @import './assets/styles/global.css';
</style>