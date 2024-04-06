<template>

  
    <div class="container-fluid">
        <div class="row">
         <div class="col">
           <div class="card">
            
             <div class="card-body">

            
              
            

              
               <h5 class="card-title mb-5 d-inline">Create Products</h5>
               <form action=""  enctype="multipart/form-data">
                 <!-- Email input -->
                 <div class="form-outline mb-4 mt-4">
                   <label>Name</label>
 
                   <input type="text" name="name" id="name" v-model="name" class="form-control" placeholder="name"/>
                 </div>
 
                 <div class="form-outline mb-4 mt-4">
                     <label>Price</label>
 
                     <input type="text" name="price" id="price" v-model="price" class="form-control" placeholder="price"/>
                 </div>
 
                 <div class="form-group">
                     <label for="exampleFormControlTextarea1">Description</label>
                     <textarea name="description" v-model="description" id="description" placeholder="description" class="form-control" rows="3"></textarea>
                 </div>
 
                
                 <div class="form-group">
                   <label for="exampleFormControlSelect1">Quantity</label>
                   <input type="text" name="quantity" v-model="quantity" id="quantity"  class="form-control" placeholder="quantity"/>
 
               </div>
 
              
 
                 <div class="form-outline mb-4 mt-4">
                     <label>Image</label>
 
                     <input type="text"  v-model="image"  name="image" id="fimage" class="form-control"/>

                    </div>
 
                    
       
                 <!-- Submit button -->
                 <button type="submit" name="submit" @click.prevent="createProducts()" class="btn btn-primary  mb-4 text-center">create</button>
 
           
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

      
        name: 'createproducts',

        
         data() {

            return {
                errorList: '',
                
                name: '',
                price: '',
                description: '',
                quantity: '',
                image: '',

            }
            
        },
  
        methods: {

            
           
          // onImageChange(e) {
          //   console.log('file is', e.target.files[0]);

            
          // },
            createProducts() {
                

              
               
                // let fd = new FormData();
                // fd.append('image', this.image);

                // const config = {
                //     headers: { 'content-type': 'multipart/form-data' }
                // }

                axios.post('http://127.0.0.1:8000/api/store-products', {


                  name : this.name,
                  price : this.price,
                  quantity : this.quantity,

                  description : this.description,
                  image : this.image,


                  }). then (res => {
                  //console.log(res.data);

                  this.$router.push('/products');
                  this.$router.go('/products');


                }). catch (error => {

                    
                    if (error.response.status === 400) {
                        alert('one or more inputs are empty');
                    }



                  });


            }
        }

    }
</script>