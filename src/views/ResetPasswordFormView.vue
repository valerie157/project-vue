<!-- ResetPasswordForm.vue -->
<template>
  <div class="reset-password">
    <form @submit.prevent="requestPasswordReset">
      <input type="email" v-model="email" placeholder="Enter your email" class="email-input">
      <button type="submit" class="reset-button">Reset Password</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    async requestPasswordReset() {
      try {
        await axios.post('/api/reset-password', { email: this.email });
        alert('Password reset email sent!');
      } catch (error) {
        console.error('Error requesting password reset:', error);
        alert('An error occurred. Please try again later.');
      }
    }
  }
};
</script>

<style scoped>

.reset-password {
  max-width: 400px;
  margin: 0 auto;
}

.email-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.reset-button {
  width: 100%;
  padding: 10px;
  background-color: grey;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reset-button:hover {
  background-color: #0056b3;
}
</style>
