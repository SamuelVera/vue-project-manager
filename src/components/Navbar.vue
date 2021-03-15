<template>
  <div class="navbar">
    <div class="navbar-item">
      <router-link to="/">Lista de proyectos</router-link>
    </div>
    <div class="navbar-item">
      <router-link to="/new">Agregar proyecto</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.navbar {
  margin: 20px auto;
  width: 50%;
  display: flex;
  justify-content: space-around;
}

.navbar-item {
  padding: 16px;
  background-color: #e7e7e7;
  border-radius: 4px;
  transition: 300ms;
  opacity: 1;
  cursor: pointer;
}

.navbar-item:hover {
  opacity: 0.7;
}

a {
  color: #313131;
  font-weight: 600;
  text-decoration: none;
}
</style>
