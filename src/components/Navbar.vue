<template>
  


    <nav  class="navbar navbar-expand-lg navbar-dark bg-dark" style="margin-bottom: 50px;">
      <router-link class="navbar-brand" to="/products">Dashboard for Products</router-link>
    
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

      
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-if="!loggedIn">
              <router-link to="/login" class="btn btn-primary my-1 btn-block" >Login</router-link>
            </li>
            <li class="nav-item" v-if="!loggedIn">
              <router-link
                to="/register" class="btn btn-success my-1 ml-1 btn-block"
               
                aria-disabled="true"
              >Register</router-link>
            </li>
    
            <li class="nav-item" v-if="loggedIn">
              <button class="btn btn-warning" @click.prevent="performLogout">Logout</button>
            </li>
          </ul>
        </div>
      </nav>

      
  
</template>

<style>


</style>
<script>

  export default {

    data: {
      token: null
    },

   
    computed: {
      loggedIn() {

        if(localStorage.getItem('token') == null) {
          return false

        } else {
          return true

        }
        //return this.$store.getters.get_loggedIn
      }
    },

    mounted() {
      this.checkUserStatus();
    },


    methods: {
      checkUserStatus() {
        if (localStorage.getItem("token") != null) {
          this.token = localStorage.getItem("token");
        }
      },

      performLogout() {

        localStorage.removeItem('token'); 
        localStorage.removeItem('user');
        
        this.token = null;

        this.$router.push('/login');
      }
    }

  }
</script>