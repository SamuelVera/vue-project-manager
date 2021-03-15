<template>
  <div class="container">
    <p v-if="error === undefined">
      Cargando...
    </p>
    <p v-else-if="error !== null">
      {{ error }}
    </p>
    <div v-else>
      <h3>Filtrar:</h3>
      <div class="filter-container-options">
        <div class="filter-container-options-item">
          <input
            v-model="filterQuery"
            id="filterQuery"
            name="filterQuery"
            placeholder="Buscar por título..."
          />
        </div>
        <div class="filter-container-options-item">
          <select id="filterQueryStatus" v-model="filterQueryStatus">
            <option value="" selected>Elige un estado...</option>
            <option value="PENDING">Pendiente</option>
            <option value="QUEUED">En cola</option>
            <option value="COMPLETED">Completado</option>
          </select>
        </div>
      </div>
      <p v-if="filteredProjects.length === 0">
        No se encontraron proyectos...
      </p>
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script lang="ts">
//Vue library
import { defineComponent, ref, computed } from "vue";
//Child components
import ProjectCard from "./ProjectCard.vue";
//Composables
import { getProjects } from "../composables";
//Interfaces
import { ProjectStatus } from "@/interfaces/project";

export default defineComponent({
  //Child components
  components: {
    ProjectCard,
  },
  //Composable API
  setup() {
    //Execute the composable
    const { projects, error, loadProjects } = getProjects();
    /**Filter value */
    const filterQuery = ref("");
    const filterQueryStatus = ref<ProjectStatus | "">("");
    //Execute the async load
    loadProjects();
    //Filtered projects
    const filteredProjects = computed(() => {
      return projects.value.filter((proj) =>
        filterQueryStatus.value
          ? proj.status === filterQueryStatus.value &&
            proj.title.includes(filterQuery.value)
          : proj.title.includes(filterQuery.value)
      );
    });
    //Return to use in the template
    return {
      filteredProjects,
      error,
      filterQuery,
      filterQueryStatus,
    };
  },
});
</script>

<style scoped>
.container {
  width: 60%;
  margin: 0 auto;
  max-width: 900px;
  padding: 20px;
  border: 1px solid #a1a1a1;
  border-radius: 8px;
}
.filter-container-options {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 16px 0 0 0;
}
.filter-container-options-item {
  width: 45%;
}
</style>
