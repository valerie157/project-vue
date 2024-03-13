<template>
  <div class="navbar">
    <h1>Welcome Home</h1>
    <ul class="nav-links">
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/services">Services</router-link></li>
      <li><router-link to="/contact">Contact us</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/signup">Signup</router-link></li>
      <li><router-link to="/forgotpassword">Forgot  Password?</router-link></li>
    </ul>
    <p class="nav-description">This is the HomePage</p>
  </div>
  <router-view>
  
</router-view>
</template>

<script setup>
</script>

<style>
.navbar {
  background-color:darkred;
  padding: 12px 14px;
}

.navbar h1 {
  font-weight: bold;
  text-align: center;
  color: black;
}

.nav-links {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.nav-links li {
  margin: 0 10px;
}

.nav-links a {
  color: black;
  text-decoration: none;
}

.nav-links a:hover {
  color: #ddd;
}

.nav-description {
  text-align: center;
  font-style: italic;
  color: black;
}
</style>