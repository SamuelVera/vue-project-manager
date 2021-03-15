export type ProjectStatus = "PENDING" | "QUEUED" | "COMPLETED";

export interface Project {
  /**Project Id */
  id: string;
  /**Status */
  status: ProjectStatus;
  /**Title */
  title: string;
  /**Description */
  description: string;
}
