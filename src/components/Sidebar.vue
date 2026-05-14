<script setup>

</script>

<template>
  <nav>
<!--    <router-link to="/">Home</router-link>-->
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact/">Contact</router-link>
    <router-link to="/contact/one">Contact1</router-link>
    <router-link to="/contact/2">Contact2</router-link>
    <router-link to="/contact/3">Contact3</router-link>
  </nav>
</template>

<style scoped>
body {
  margin: 0;
  font-family: sans-serif;
  display: flex;
}
nav {
  width: 200px;
  background: #f3f3f3;
  padding: 1rem;
  height: 100vh;
}
nav a {
  display: block;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: #333;
}
nav a:hover {
  color: #007acc;
}
main {
  flex: 1;
  padding: 2rem;
}
.page {
  display: none;
}
.page.active {
  display: block;
}
</style>