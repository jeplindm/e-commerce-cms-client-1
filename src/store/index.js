import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    fetchById (state, data) {
      state.product = data
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login/admin',
        method: 'POST',
        data: payload
      })
        .then(({ data }) => {
          Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Log In Successful',
            showConfirmButton: false,
            timer: 1500
          })
          const token = data.access_token
          localStorage.setItem('token', token)
          router.push('/dashboard')
        })
        .catch((err) => {
          Swal.fire({
            position: 'middle',
            icon: 'error',
            title: 'ERROR',
            text: 'Invalid Email / Password'
          })
          console.log(err)
        })
    },
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setProducts', data.product)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('token')
      axios({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: token
        },
        data: payload
      })
        .then(({ data }) => {
          Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Add Product Successful',
            showConfirmButton: false,
            timer: 1500
          })
          router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          Swal.fire({
            position: 'middle',
            icon: 'error',
            title: 'ERROR',
            text: err.response.data.message
          })
        })
    },
    editProduct (context, payload) {
      const token = localStorage.getItem('token')
      axios({
        url: '/products/' + payload.id,
        method: 'PUT',
        headers: {
          access_token: token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(() => {
          Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Edit Product Successful',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/dashboard')
        })
        .catch(err => {
          Swal.fire({
            position: 'middle',
            icon: 'error',
            title: 'ERROR',
            text: err.response.data.message
          })
        })
    },
    fetchProductById (context, id) {
      const token = localStorage.getItem('token')
      axios({
        url: '/products/' + id,
        method: 'GET',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('fetchById', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      const token = localStorage.getItem('token')
      axios({
        url: '/products/' + id,
        method: 'DELETE',
        headers: {
          access_token: token
        }
      })
        .then(() => {
          context.dispatch('fetchProducts')
          router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
