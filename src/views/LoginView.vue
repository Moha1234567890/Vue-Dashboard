<template>

    <div class="container-fluid"> 
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title mt-5">Login</h5>
                <form  class="p-auto" action="">
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input type="email" name="email" id="email" v-model="email" class="form-control" placeholder="Email" />
                     
                    </div>
  
                    
                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <input type="password" name="password" id="password"  v-model="password" placeholder="Password" class="form-control" />
                      
                    </div>
  
  
  
                    <!-- Submit button -->
                    <button type="submit" name="submit" class="btn btn-primary  mb-4 text-center" @click.prevent="performLogin()">Login</button>
                    <div style="color: red" v-if="error">{{error}}</div>
                   
                  </form>
  
              </div>
         </div>
       </div>
      </div>
    </div>
</template>


<script>

    import axios from 'axios';

     export default {
        name: 'login',
         data() {

            return {

                email: '',
                password: '',
                error: ''

            }
            
        },
        
        methods: {

            performLogin() {

                axios.post('http://127.0.0.1:8000/api/auth/login', {

                    email : this.email,
                    password : this.password,


                }). then (res => {
                    //console.log(res.data)

                    const token = localStorage.setItem('token', res.data.access_token);
                    const user = localStorage.setItem('user', res.data.user);

                    this.$router.push('/products');

                }). catch (err => {

                  if (err.response.status === 422) {
                      alert('one or more inputs are empty');

                  } else(err.response.status === 422); {

                    alert('password or email is wrong');

                  }
 
                });


                //alert('hello');

            }
        }

    }
</script>

<style>


</style>