<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';
const username = ref('')
const password = ref('')

const router = useRouter()
const login = async () => {
    console.log(`${username.value}  ${password.value}`);
    // Save 
   axios.post('http://127.0.0.1:8000/api/login',{username:username.value,password:password.value});
   router.push('/dashboard')
};
</script>

<template>
    <div class="login-container">
        <div class="login-form">
            <h1>login Here</h1>
            <form @submit.prevent="login">
                <div class="form-group">
                    <input class="form-input" type="text" placeholder="Enter username" v-model="username">
                </div>
                <div class="form-group">
                    <input class="form-input" type="password" placeholder="Enter password" v-model="password">
                </div>
                <div class="form-group">
                    <button class="form-button" type="submit">Login</button>
                </div>
            </form>
            <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
            <p><router-link to="/forgotpassword">Forgot Password</router-link></p> 
        </div>
    </div>
</template>

<style scoped>
.login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color:darkgray;
}

.login-form {
    background-color: mediumaquamarine; 
    width: 300px;
    padding: 20px; 
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.login-form h1 {
    text-align: center;
    color: black; 
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px; 
}

.form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;
}

.form-input:focus {
    border-color: #4caf50; 
}

.form-button {
    background-color: burlywood; 
    color: white;
    padding: 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s;
}

.form-button:hover {
    background-color: #0056b3; 
}
</style>
