<template>
  <ProjectList />
</template>

<script lang="ts">
//Vue library
import { defineComponent } from "vue";
//Child components
import ProjectList from "../components/ProjectList.vue";

export default defineComponent({
  name: "Home",
  components: {
    ProjectList,
  },
});
</script>
