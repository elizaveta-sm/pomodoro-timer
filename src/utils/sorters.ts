import type { Task } from "../components/task-manager/task-manager";

const TASK_STATUS_ORDER = {
  active: 0,
  pending: 1,
  completed: 2,
} as const;

export const sortTasksByStatus = (tasks: Task[]): Task[] => {
  const sorted = [...tasks].sort(
    (a, b) => TASK_STATUS_ORDER[a.status] - TASK_STATUS_ORDER[b.status]
  );
  return sorted;
};
