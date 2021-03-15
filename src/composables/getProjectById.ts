//Interfaces
import { Project } from "@/interfaces/project";
//Vue library
import { ref } from "@vue/reactivity";
//Data
import { projectsData } from "@/constants/projects";

const getProjectByIdComposable = () => {
  /**Project */
  const project = ref<Project | undefined | null>();
  /**Error */
  const error = ref<string | undefined | null>();

  /**Get project by Id */
  const getProjectByIdFromDb = async (projectId: string) => {
    try {
      //Get from db
      project.value = projectsData.find(({ id }) => id === projectId) ?? null;
      error.value = null;
    } catch (err) {
      console.log(err);
      //Error values
      error.value = err.message;
      project.value = null;
    }
  };

  return {
    project,
    error,
    getProjectByIdFromDb,
  };
};

export default getProjectByIdComposable;
