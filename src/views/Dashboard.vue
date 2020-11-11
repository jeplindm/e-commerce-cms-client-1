<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axios'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Dashboard',
  data () {
    return {
      products: []
    }
  },
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          console.log(data.product)
          this.products = data.product
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
