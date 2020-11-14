<template>
<section>
  <Navbar/>
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
</section>
</template>

<script>
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'

export default {
  name: 'Dashboard',
  components: {
    ProductCard,
    Navbar
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
