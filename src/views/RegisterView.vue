<template>

    <div class="container-fluid"> 
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title mt-5">Register</h5>
                <form class="p-auto" action="">

                    <div class="form-outline mb-4">
                        <input type="email" name="name" id="name"  v-model="name" class="form-control" placeholder="name" />
                       
                    </div>
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input type="email" name="email" id="email" class="form-control" v-model="email" placeholder="Email" />
                     
                    </div>

                    
  
                    
                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <input type="password" name="password" id="password"  v-model="password" placeholder="Password" class="form-control" />
                      
                    </div>
  
  
  
                    <!-- Submit button -->
                    <button type="submit" name="submit" class="btn btn-primary  mb-4 text-center" @click.prevent="performRegister()">Register</button>
  
                   
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
        name: 'register',
         data() {

            return {

                name: '',
                email: '',
                password: '',

            }
            
        },
        
        methods: {

            performRegister() {
               // alert('hello');


                axios.post('http://127.0.0.1:8000/api/auth/register', {


                name : this.name,

                email : this.email,
                password : this.password,


                }). then (res => {
                console.log(res.data)

                const token = localStorage.setItem('token', res.data.access_token);
                const user = localStorage.setItem('user', res.data.user);

                this.$router.push('/products');

                }). catch (err => {

                  if (err.response.status === 400) {
                      alert('one or more inputs are empty');

                  } 

                });


            }
        }

    }
</script>

<style>


</style>