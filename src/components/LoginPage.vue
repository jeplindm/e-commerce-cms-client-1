<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <img src="../assets/pics/1.png" width="100%" alt="">
        </div>
        <div  id="login" class="col-6 border rounded shadow">
            <form class="py-4">
            <h2>Login</h2>
            <br>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control">
              </div>
              <button class="btn btn-warning mt-4">Log In</button>
            </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  width: 100%;
}

</style>
