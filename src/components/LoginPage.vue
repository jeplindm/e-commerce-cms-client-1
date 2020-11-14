<template>
  <section class="login">
    <div class="container">
        <div class="row">
            <div class="box d-flex col-10 border border-dark shadow-lg">
                <div class="row text-center">
                    <div class="col-8 text-center">
                        <img src="../assets/pics/1.png" alt="" width="100%">
                    </div>
                    <div class="col-4">
                        <form @submit.prevent="login">
                            <img src="../assets/pics/achats.png" width="50%" alt="">
                            <div class="form-group">
                                <label for="email"><h5>Email</h5></label>
                                <input
                                  v-model="user.email"
                                  type="email"
                                  class="form-control mb-4"
                                  placeholder="example@mail.com"
                                >
                                <div class="form-group">
                                    <label for="password"><h5>Password</h5></label>
                                    <input
                                      v-model="user.password"
                                      type="password"
                                      class="form-control mb-4"
                                      placeholder="******"
                                    >
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn mt-2">Log In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
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
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const payload = this.user
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box{
  left: 8%;
  margin-top: 4em;
  margin-bottom: 8em;
  border-radius: 30px;
  border-color: black;
}
.col-8{
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.col-4 {
  color: white;
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  background-color: black;
}
.btn{
  width: 100%;
  background-color: #ffffff;
  border-color: black;
  border-radius: 10px;
  height: 45px;
}
.btn:hover{
  background-color: black;
  color: #ffffff;
  border-color: #ffffff;
}
h5{
  text-align: left;
}
.login{
  background-image: url('https://i.pinimg.com/564x/b4/1c/c1/b41cc101fcfb8460cd379abc8ee14a87.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
