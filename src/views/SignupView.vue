<script setup>
import { ref } from 'vue'
import axios from 'axios';

const name = ref('john')
const email = ref('john@gmail.com')
const password = ref('john123')

const signup = async () => {
    console.log(`${name.value} ${email.value} ${password.value}`);
   
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/signup', {
            name: name.value,
            email: email.value,
            password: password.value
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
</script>


<template>
    <div class="signup-container">
        <div class="signup-form">
            <h1>Signup Here</h1>
            <form @submit.prevent="signup">
                <div class="form-group">
                    <input class="form-input" type="text" placeholder="Enter name" v-model="name">
                </div>
                <div class="form-group">
                    <input class="form-input" type="email" placeholder="Enter email" v-model="email">
                </div>
                <div class="form-group">
                    <input class="form-input" type="password" placeholder="Enter password" v-model="password">
                </div>
                <div class="form-group">
                    <button class="form-button" type="submit">Signup</button>
                </div>
            </form>
            <!-- <p>{{ username }}</p> -->
        </div>
    </div>
</template>

<style scoped>
.signup-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: crimson ;
}

.signup-form {
    background-color:maroon;
    width: 400px;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.signup-form h1 {
    text-align: center;
    color: black;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

.form-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #cccccc;
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
    padding: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s;
}

.form-button:hover {
    background-color: burlywood;
}

.signup-form p {
    text-align: center;
    color: #666666;
}
</style>

