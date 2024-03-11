<template>
  <div class="container">
    <h1 class="title">Sign Up</h1>
    <form @submit.prevent="submitForm" class="form">
      <label for="username" class="label">Username:</label>
      <input type="text" id="username" v-model="username" required class="input" />
      <br />
      <label for="email" class="label">Email:</label>
      <input type="email" id="email" v-model="email" required class="input" />
      <br />
      <label for="password" class="label">Password:</label>
      <input type="password" id="password" v-model="password" required class="input" />
      <br />
      <label for="password_confirmation" class="label">Confirm Password:</label>
      <input type="password" id="password_confirmation" v-model="passwordConfirmation" required class="input" />
      <br />
      <button type="submit" class="button">Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
// import { ref } from 'vue';

export default {
  data() {
    return {
      username: 'john',
      email: 'john@gmail.com',
      password: '12345678',
      passwordConfirmation: '12345678',
    };
  },
  methods: {
    submitForm() {
      // Validate the form data
      if (this.password !== this.passwordConfirmation) {
        console.error('Passwords do not match');
        return;
      }
      // Send a POST request to the server-side API endpoint
      axios
        .post('/api/signup', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data.message);
          // Clear the form fields
          this.username = '';
          this.email = '';
          this.password = '';
          this.passwordConfirmation = '';
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  background-color: burlywood;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
  font-weight: bold;
  color: #333;
}

.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
}

.button {
  background-color: #ff7b72;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

.button:hover {
  background-color: aqua;
}
</style>
