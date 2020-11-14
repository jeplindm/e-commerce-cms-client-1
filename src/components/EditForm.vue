<template>
  <div class="container">
      <div class="row">
          <div class="col-12 d-flex">
                <div class="col-6">
                    <img class="card-img-top rounded" :src="productById.image_url">
                    <div class="card-body">
                        <h5 class="card-title">{{productById.name}}</h5>
                        <div>
                        <p class="mb-2">Price: {{productById.price}}</p>
                        <p>Stock: {{productById.stock}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 pt-3">
                    <h2 class="pb-3">Edit Product</h2>
                    <form @submit.prevent="editProduct">
                        <div class="form-group">
                            <label for="name">Name of Product</label>
                            <input
                              v-model="productById.name"
                              type="text"
                              class="form-control"
                            >
                        </div>
                        <div class="form-group">
                            <label for="name">Image Url</label>
                            <input
                              v-model="productById.image_url"
                              type="text"
                              class="form-control"
                            >
                        </div>
                        <div class="form-group">
                            <label for="name">Price</label>
                            <input
                              v-model="productById.price"
                              type="text"
                              class="form-control"
                            >
                        </div>
                        <div class="form-group">
                            <label for="name">Stock</label>
                            <input
                              v-model="productById.stock"
                              type="text"
                              class="form-control"
                            >
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-warning btn-md">Submit</button>
                        </div>
                    </form>
                </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'EditForm',
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
  methods: {
    fetchProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductById', id)
    },
    editProduct () {
      const payload = this.productById
      this.$store.dispatch('editProduct', payload)
    }
  },
  created () {
    this.fetchProductById()
  },
  computed: {
    productById () {
      return this.$store.state.product
    }
  }
}
</script>

<style scoped>
.btn{
  width: 100%;
}
.btn:hover{
  background-color: black;
  color: yellow;
}
img{
  width: 400px;
  height: 400px;
}
h5{
  font-weight: bold;
}
h2{
  font-weight: bold;
}
</style>
