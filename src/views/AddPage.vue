<template>
  <section>
    <Navbar/>
    <div class="container">
        <div class="row">
          <div class="box col-4 border shadow-lg">
            <h2 class="text-center">Add Product</h2>
            <form @submit.prevent="addProduct">
              <div class="form-group pt-2">
                <label for="name">Name Of Product</label>
                <input
                  v-model="product.name"
                  type="text"
                  class="form-control"
                  placeholder="T-Shirt Bon Jovi"
                >
              </div>
              <div class="form-group">
                <label for="image_url">Image Url</label>
                <input
                  v-model="product.image_url"
                  type="text"
                  class="form-control"
                  placeholder="https://image.co.id/"
                >
              </div>
              <div class="form-group">
                <label for="price">Price</label>
                <input
                  v-model="product.price"
                  type="text"
                  class="form-control"
                  placeholder="1000000"
                >
              </div>
              <div class="form-group">
                <label for="stock">Stock</label>
                <input
                  v-model="product.stock"
                  type="text"
                  class="form-control"
                  placeholder="10"
                >
              </div>
              <div class="form-group text-center">
                <button type="submit" class="btn btn-warning btn-md">Add</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'AddPage',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  components: {
    Navbar
  },
  methods: {
    addProduct () {
      const payload = this.product
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style scoped>
.box{
  border-radius: 20px;
  padding-top: 8px;
  left: 35%;
  background-color: black;
  color: #ffffff;
}
.btn{
  width: 50%;
}
.btn:hover{
  background-color: black;
  color: yellow;
}
</style>
