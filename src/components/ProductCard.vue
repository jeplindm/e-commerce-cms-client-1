<template>
    <div class="col-3 mb-4 text-center">
        <div class="card border border-dark d-flex">
            <img class="card-img-top rounded" :src="product.image_url">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <div>
                <p class="mb-2">Price: {{product.price}}</p>
                <p>Stock: {{product.stock}}</p>
                </div>
                <div class="text-center pt-2">
                <a @click="toEditPage(product.id)" href="#" class="btn btn-primary mr-2">Edit</a>
                <a @click="deleteProduct(product.id)" href="#" class="btn btn-danger">Delete</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    toEditPage (id) {
      this.$router.push(`/edit/${id}`)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style scoped>
h5{
    font-weight: bold;
}
p{
    color: green;
}
img{
    width: 200px;
    height: 200px;
    margin-left: 26px;
    margin-top: 8px;
    border-bottom: solid 2px black;
}
.card{
    width: 100%;
}
</style>
