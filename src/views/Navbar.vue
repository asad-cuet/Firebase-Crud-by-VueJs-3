<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add">Add Project</router-link> 
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
  border-bottom:3px solid #e90074;
  padding-bottom: 4px;
}
</style>