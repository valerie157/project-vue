<template>
  <div class="forgot-password">
    <h2>Forgot Password</h2>
    <form @submit.prevent="submitForm">
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="username" id="username" v-model="username" required>
      </div>
      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      username: '',
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/api/forgot-password', { email: this.email, username: this.username });
        
        if (response.data.success) {
          this.successMessage = response.data.message; 
          this.errorMessage = ''; 
        } else {
         
          this.errorMessage = response.data.message; 
          this.successMessage = ''; 
        }
      } catch (error) {
     
        this.errorMessage = 'Error in re-setting password try later.';
        console.error('Error in re-setting password:', error);
      }
    }
  }
};
</script>

<style scoped>

.forgot-password {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color:goldenrod
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.error-message {
  color: red;
  margin-bottom: 1rem;
}

.success-message {
  color: green;
  margin-bottom: 1rem;
}

.submit-button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>