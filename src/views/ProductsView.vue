<template>
    <div class="container-fluid">

    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4 d-inline">Products</h5>
            <router-link to="/create-products" class="btn btn-primary mb-4 text-center float-right">Create Products</router-link>
          
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">price in $$</th>
                  <th scope="col">quantity</th>
                  <th scope="col">image</th>
                  <th scope="col">update</th>
                  <th scope="col">delete</th>
                </tr>
              </thead>
              <tbody>

                <tr v-for="product in products" :key="product.id">
                  <th scope="row">{{ product.id }}</th>
                  <td>{{product.name}}</td>
                  <td>{{product.price}}</td>
                  <td>{{product.quantity}}</td>
                   <td><img width="50" height="50" src="https://www.cnet.com/a/img/resize/592e5101f4fee1caf72f9e0169c8784ddf9eb12a/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&fit=crop&height=576&width=768" alt=""></td>
                   <td><router-link :to="{'path': product.id+'/edit'}" class="btn btn-warning text-white text-center ">update</router-link></td>
                   <td><button class="btn btn-danger  text-center " @click="deleteProduct(product.id)">delete</button></td>
                </tr>
               
              </tbody>
            </table> 
          </div>
        </div>
      </div>
    </div>
    </div>
</template>


<script>

    import axios from 'axios';
    const token = localStorage.getItem('token');
     export default {
        name: 'products',

         data() {

            return {

                products: []

            }
            
        },

        mounted() {
            this.checkUser();

            this.allProducts();
        },

        
        methods: {


          checkUser() {
            if(!localStorage.getItem('token')) {
              this.$router.push('/');
            }
          },

            allProducts() {
               
//?token='+localStorage.getItem('token')

                axios.get('http://127.0.0.1:8000/api/all-products').then(res => {

                    this.products = res.data.data;
                    //alert(this.products)
                    // console.log(res.data.data.products);
                });

               


            },

            deleteProduct(productId) {


              axios.get('http://127.0.0.1:8000/api/delete-products/'+productId).then(res => {

                alert('product deleted successfully');
                this.allProducts();
              
              });

             // console.log(productId);
            }
        },

    };
</script>