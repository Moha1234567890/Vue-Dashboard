<template>

  <div class="container-fluid">
    <div class="row">
     <div class="col">
       <div class="card">
         <div class="card-body">
           <h5 class="card-title mb-5 d-inline">Update Products</h5>
           <form action="" >
             <!-- Email input -->
             <div class="form-outline mb-4 mt-4">
               <label>Name</label>

               <input type="text" v-model="model.product.name" name="name" id="name" class="form-control" placeholder="name" />
             </div>

             <div class="form-outline mb-4 mt-4">
                 <label>Price</label>

                 <input type="text"  v-model="model.product.price" name="price" id="price" class="form-control" placeholder="price" />
             </div>

             <div class="form-group">
                 <label for="exampleFormControlTextarea1">Description</label>
                 <textarea  v-model="model.product.description" name="description" placeholder="description" class="form-control" id="description" rows="3"></textarea>
             </div>

             <div class="form-group">
                 <label for="exampleFormControlSelect1">Quantity</label>
                 <input type="text" v-model="model.product.quantity" name="quantity" id="quantity" class="form-control" placeholder="price" />

             </div>

             <div class="form-group">
              <label for="exampleFormControlSelect1">Image</label>
              <input type="text" v-model="model.product.image" name="image" id="quantity" class="form-control" placeholder="price" />

          </div>

             <button type="submit" name="submit" @click.prevent="updateProduct" class="btn btn-primary  mb-4 text-center">update</button>

       
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
        name: 'productsedit',

         data() {

            return {
                productId: '',
                errorList: '',

                model : {  
                    product: {

                      name: "",
                      price: "",
                      description: "",
                      quantity: "",
                      image: "",
                      
                    }
                }

            }
            
        },

        mounted() {

          
            this.getProduct(this.$route.params.id);

            this.productId = this.$route.params.id;
        },

        
        methods: {


          

          getProduct(id) {

            axios.get('http://127.0.0.1:8000/api/update-products/'+id)
             .then( res => {
                //console.log(res.data.data);

                this.model.product.name = res.data.data.name;
                this.model.product.price = res.data.data.price;
                this.model.product.description = res.data.data.description;
                this.model.product.quantity = res.data.data.quantity;
                this.model.product.image = res.data.data.image;


             }) 
              .catch(error =>  {
                if (error.response.status === 400) {
                      alert('one or more inputs are empty');
                  }
              })

             
          }
        },

        updateProduct() {

          axios.put(`http://127.0.0.1:8000/api/update-products/${this.productId}`, {

            
          name : this.model.product.name,
          price : this.model.product.price,
          quantity : this.model.product.quantity,

          description : this.model.product.description,
          image : this.model.product.image,

          


          }) .catch(error =>  {

                if (error.response.status === 400) {
                      alert('one or more inputs are empty');
                }
          })

         

        },

    };
</script>