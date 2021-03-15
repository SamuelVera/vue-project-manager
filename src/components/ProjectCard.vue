<template>
  <div class="card">
    <div class="left">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <p class="status">
        Estado: <strong>{{ project.status }}</strong>
      </p>
    </div>
    <div class="right">
      <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
        <button class="button blue">Editar</button></router-link
      >
      <button
        @click="handleStatusChange('PENDING')"
        v-if="project.status === 'COMPLETED'"
        class="button green"
      >
        Marcar como pendiente
      </button>
      <button
        @click="handleStatusChange('QUEUED')"
        v-else-if="project.status === 'PENDING'"
        class="button green"
      >
        Marcar como en cola
      </button>
      <button
        @click="handleStatusChange('COMPLETED')"
        v-else
        class="button green"
      >
        Marcar como completo
      </button>
      <button @click="handleProjectDelete" class="button red">Eliminar</button>
    </div>
  </div>
</template>

<script lang="ts">
//Vue library
import { defineComponent } from "vue";
//Composables
import { editProjectComposable, deleteProjectComposable } from "@/composables";
//Interfaces
import { ProjectStatus } from "@/interfaces/project";

export default defineComponent({
  name: "Project Card",
  //Get the project id as prop
  props: ["project"],
  setup(props) {
    //Setup composables
    const { deleteProjectFromDB } = deleteProjectComposable();
    const { editProjectFromDB } = editProjectComposable();

    /**Delete project */
    const handleProjectDelete = () => {
      deleteProjectFromDB(props.project.id);
    };

    /**Change project status */
    const handleStatusChange = (newStatus: ProjectStatus) => {
      editProjectFromDB(
        {
          ...props.project,
          status: newStatus,
        },
        props.project.id
      );
    };

    return {
      handleProjectDelete,
      handleStatusChange,
    };
  },
});
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 95%;
  align-items: center;
  padding: 16px 2.5%;
  background-color: #eaeaea;
  border-radius: 8px;
}
.card:not(:first-child) {
  margin: 10px 0 0 0;
}
.left {
  text-align: start;
  width: 100%;
}
.left > p {
  margin: 8px 0 0 0;
}
.right {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.right > button:not(:first-child) {
  margin: 8px 0 0 0;
}
</style>
