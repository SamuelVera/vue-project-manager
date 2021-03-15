<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
//Vue library
import { defineComponent } from "vue";
//Child component
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
.button {
  padding: 10px 20px;
  border: solid 1px #f8f8f8;
  font-weight: 600;
  cursor: pointer;
  transition: 300ms;
  opacity: 1;
  border-radius: 4px;
  width: 100%;
  text-transform: uppercase;
}
.button:hover {
  opacity: 0.7;
}
.button.red {
  background-color: crimson;
  color: white;
}
.button.green {
  background-color: green;
  color: white;
}
.button.blue {
  background-color: blue;
  color: white;
}
input,
select {
  padding: 8px 16px;
}
</style>
