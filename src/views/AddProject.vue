<template>
  <ProjectForm :handleFormSubmit="addProject" />
</template>

<script lang="ts">
//Vue library
import { defineComponent } from "vue";
//Components
import ProjectForm from "../components/ProjectForm.vue";
//Composables
import { addProjectComposable } from "../composables";
//interfaces
import { ProjectForm as ProjectFormInterface } from "../interfaces/forms";
import { Project, ProjectStatus } from "@/interfaces/project";
//Helpers
import { uuidV4 } from "@/utils/uuid";

export default defineComponent({
  components: {
    ProjectForm,
  },
  setup() {
    const { addProjectToDb } = addProjectComposable();
    /**Add project */
    const addProject = async (data: ProjectFormInterface) => {
      const project: Project = {
        ...data,
        id: uuidV4(),
        status: data.status as ProjectStatus,
      };
      addProjectToDb(project);
    };

    return {
      addProject,
    };
  },
});
</script>

<style scoped></style>
