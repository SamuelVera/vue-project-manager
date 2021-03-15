<template>
  <p v-if="error === undefined">Cargando...</p>
  <div v-else-if="error === null && project === null">
    <p>No se encontro un proyecto para editar</p>
    <button class="button red" @click="goBack">Volver</button>
  </div>
  <ProjectForm
    v-else
    :defaultValues="project"
    :handleFormSubmit="handleFormSubmit"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
//Router
import { useRouter } from "vue-router";
//Child components
import ProjectForm from "@/components/ProjectForm.vue";
//Interfaces
import { ProjectStatus } from "@/interfaces/project";
//Composables
import { getProjectByIdComposable, editProjectComposable } from "@/composables";
import { ProjectForm as ProjectFormInterface } from "@/interfaces/forms";

export default defineComponent({
  props: ["id"],
  components: {
    ProjectForm,
  },
  setup(props) {
    //Router
    const { go } = useRouter();
    //Setup composable
    const { project, error, getProjectByIdFromDb } = getProjectByIdComposable();
    const { editProjectFromDB } = editProjectComposable();

    //Trigger fetch
    getProjectByIdFromDb(props.id);

    /**Go Back in history */
    const goBack = () => {
      go(-1);
    };

    /**Edit project */
    const handleFormSubmit = (project: ProjectFormInterface) => {
      editProjectFromDB(
        {
          ...project,
          status: project.status as ProjectStatus,
          id: props.id,
        },
        props.id
      );
    };

    return {
      project,
      error,
      goBack,
      handleFormSubmit,
    };
  },
});
</script>

<style scoped></style>
