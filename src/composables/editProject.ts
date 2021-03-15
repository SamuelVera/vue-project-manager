//Interfaces
import { Project } from "@/interfaces/project";
//Data
import { projectsData } from "@/constants/projects";

const editProjectComposable = () => {
  const editProjectFromDB = async (project: Project, projectId: string) => {
    const idx = projectsData.findIndex((proj) => proj.id === projectId);
    projectsData[idx] = project;
  };
  return {
    editProjectFromDB,
  };
};

export default editProjectComposable;
