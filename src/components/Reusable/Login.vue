<template>
  <div class="bg-img">
    <div class="container">
      <div class="column is-three-fifths is-offset-one-fifth has-top-spacer">
        <form>
          <div class="box">
          <h3 class="title is-3 has-text-centered">Log In</h3>
          <article v-if="errors.length" class="message is-danger">
            <div class="message-body">
              <div>
                <ul>
                  <li :key="error" v-for="error in errors">{{error}}</li>
                </ul>
              </div>
            </div>
          </article>
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" v-on:click="clearErrors" v-model="user.username" type="text" placeholder="Username">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" v-on:click="clearErrors" v-model="user.password" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <!-- <div class="has-text-centered"> -->
            <button @click="login" :class="{ 'is-loading' : isLoading }" class="button is-primary is-fullwidth">Log In</button>
          <!-- </div> -->
          <hr />
          <div class="has-text-centered">
            <span>Don't have an account?</span>
            <router-link tag="a" to="/Signup">
              <a>Sign Up</a>
            </router-link>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      user: {
        username: '',
        password: ''
      },
      errors: []
    }
  },
  methods: {
    login: function () {
      this.errors = []
      this.$store.commit('LOGIN')
      this.axios.post('http://localhost:4000/api/login', this.user)
        .then((response) => {
          this.$store.commit('LOGIN_SUCCESS', response.data.user)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          this.$router.push('/Home')
        }).catch((errResponse) => {
          if (errResponse.response.data.message) {
            this.errors.push(errResponse.response.data.message)
          }
          this.$store.commit('LOGIN_FAILURE')
        })
    },
    clearErrors: function () {
      this.errors = []
    }
  },
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @MEDIA (min-width: 768px) {
    .has-top-spacer{
      padding-top: 20vh;
    }
  }
  .bg-img:before{
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    background-image: url("/static/abstract_background.jpg");
    background-size:cover;
    width: 100%;
    height: 100%;

    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
</style>
