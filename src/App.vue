<template>
  <div id="app">
    <base-navbar />
    <router-view/>
  </div>
</template>

<script>
import BaseNavbar from './components/BaseNavbar.vue'
export default {
  name: 'app',
  data () {
    return {
      currentRoute: window.location.pathname
    }
  },
  components: {
    BaseNavbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
