//Data
import { projectsData } from "@/constants/projects";

const deleteProjectComposable = () => {
  const deleteProjectFromDB = async (projectId: string) => {
    const idx = projectsData.findIndex((project) => project.id !== projectId);
    projectsData.splice(idx, 1);
  };
  return {
    deleteProjectFromDB,
  };
};

export default deleteProjectComposable;
