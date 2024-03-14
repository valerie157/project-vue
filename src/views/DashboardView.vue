<script setup>

</script>

<template>
<div>
  <h1>Dashboard</h1>
  <h1>{{ user }}</h1>
  <h1>{{ counter.count }}</h1>
  <button @click="counter.increment">Increment</button>
  
</div>
  
</template>

<style scoped>
</style>
