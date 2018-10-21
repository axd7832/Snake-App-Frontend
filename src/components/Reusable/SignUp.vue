<template>
  <div class="bg-img">
    <div class="container">
      <div class="column is-three-fifths is-offset-one-fifth has-top-spacer">
        <form>
          <div class="box">
          <h3 class="title is-3 has-text-centered">Sign Up</h3>
          <article v-if="errors.length" class="message is-danger">
            <div class="message-body">
              Please correct the following and try again:
              <div>
                <ul>
                  <li :key="error" v-for="error in errors">{{error}}</li>
                </ul>
              </div>
            </div>
          </article>
          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left">
              <input class="input" v-on:click="clearErrors" v-model="newUser.username" type="text" placeholder="Username">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <p class="control has-icons-left">
              <input class="input" v-on:click="clearErrors" v-model="newUser.password" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Re-Enter Password</label>
            <p class="control has-icons-left">
              <input class="input" v-on:click="clearErrors" v-model="newUser.reEnteredPassword" type="password" placeholder="Re-Enter Password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <!-- <div class="has-text-centered"> -->
            <button @click="register" :class="{ 'is-loading' : isLoading}" class="button is-primary is-fullwidth">Sign Up</button>
          <!-- </div> -->
          <hr />
          <div class="has-text-centered">
            <span>Already Sign Up?</span>
            <router-link tag="a" to="/Login">
              <a>Log In</a>
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
  name: 'SignUp',
  data: function () {
    return {
      newUser: {
        username: '',
        password: '',
        reEnteredPassword: ''
      },
      errors: []
    }
  },
  methods: {
    register: function () {
      // TODO get the global API URL
      this.errors = []
      if (this.validateForm()) {
        this.axios.post('http://localhost:4000/api/register', {
          username: this.newUser.username,
          password: this.newUser.password
        })
          .then((response) => {
            this.$router.push('/Login')
          })
          .catch((err) => {
            this.errors.push(err.response.data.message)
          })
      }
    },
    validateForm: function () {
      if (!this.newUser.username) this.errors.push('Username cannot be empty')
      if (!this.newUser.password) this.errors.push('Password cannot be empty')
      if (!this.newUser.reEnteredPassword) this.errors.push('Re-Entered password cannot be empty')
      if (this.newUser.password !== this.newUser.reEnteredPassword) this.errors.push('Passwords do not match')
      if (!this.errors.length) return true
      else return false
    },
    clearErrors: function () {
      this.errors = []
    }

  },
  computed: {
    isLoading () {
      console.log(this.$store.getters.isLoading)
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
