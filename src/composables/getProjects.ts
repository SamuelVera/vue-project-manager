//Fake data
import { projectsData } from "../constants/projects";
//Refs for reactivity
import { Project } from "@/interfaces/project";
import { ref } from "@vue/reactivity";

const getProjects = () => {
  /**Projects */
  const projects = ref<Project[]>([]); //Initial value is empty
  /**Error tracker */
  const error = ref<string | null | undefined>(); //Initially undefined

  /**Load projects async */
  const loadProjects = async () => {
    try {
      //Save projects
      projects.value = projectsData as Project[];
      //Reset error
      error.value = null;
    } catch (err) {
      console.log(err);
      //Save error values
      error.value = err.message;
    }
  };

  return {
    projects,
    error,
    loadProjects,
  };
};

export default getProjects;
