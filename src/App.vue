<template>
  <div id="app">
    <nav>
     <navbar :key="$route.fullPath"></navbar>
    </nav>
    <router-view />
  </div>
</template>


<script>

  import Navbar from './components/Navbar';

  export default {

    components: {
      navbar : Navbar
    },


  }
</script>
<style>
</style>
