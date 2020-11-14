<template>
    <nav class="navbar navbar-expand mb-5">
        <img class="mr-4" src="../assets/pics/achats.png" width="80px" alt="">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#"><router-link to="/dashboard">Dashboard</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><router-link to="/addpage">Add Product</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="logout" href="#">Log Out</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Navbar',
  methods: {
    logout () {
      Swal.fire({
        position: 'middle',
        icon: 'success',
        title: 'Log Out Successful',
        showConfirmButton: false,
        timer: 1500
      })
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
nav{
    background-color: black;
}
ul li a{
    color: white;
}
</style>
