//Constants
import { projectsData } from "../constants/projects";
//Interfaces
import { Project } from "@/interfaces/project";

const addProjectComposable = () => {
  const addProjectToDb = async (project: Project) => {
    projectsData.push(project);
  };
  return {
    addProjectToDb,
  };
};

export default addProjectComposable;
