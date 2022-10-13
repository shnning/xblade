<template>
  <ul>
    <li><router-link to="/">click to page /</router-link></li>
    <li><router-link to="/a">click to page a</router-link></li>
    <li><router-link to="/b">click to page b</router-link></li>
    <li><router-link to="/drawer">click to page drawer</router-link></li>
  </ul>
  <router-view />
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "App",
  setup() {
    onMounted(() => {
      console.log("Component is mounted!");
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
