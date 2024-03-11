<template>
  <div class="login-view">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <a href="#" @click.prevent="forgotPassword">Forgot Password?</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      
      console.log('Email:', this.email);
      console.log('Password:', this.password);

     
    },
    forgotPassword() {
      // Implement  forgot password form
      console.log('Forgot Password');
      
      
      this.$router.push('/forgotpassword');
    }
  }
};
</script>

<style scoped>
.login-view {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: darkred;
}

.form-group {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: coral;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: grey;
}

a {
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #fff;
  text-decoration: none;
}
</style>
