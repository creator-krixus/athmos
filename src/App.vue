<template>
  <div id="app">
    <NavBar v-if="route !== '/task'"/>
    <router-view />
  </div>
</template>
<script>
  import NavBar from './components/Nav.vue'
  // import Home from './views/Home/Home.vue'
  export default {
    computed:{
      route(){
    return this.$route.path
      }
    },
    components: {
      NavBar,
    }

  }
</script>
<style lang="scss">
  #app {
    font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // background: url('https://static.americadigital.com/wp-content/uploads/2019/10/adnoticias-Internet-1100x570.jpg');
    // background-image: url('https://thumbs.dreamstime.com/b/task-concept-people-letters-icons-flat-vector-illustration-isolated-white-background-task-concept-people-letters-139612201.jpg');
    background-color: #b3e5fc;
    background-size: cover;
  }
</style>