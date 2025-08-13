// npx tsx src/temporal.ts

export type TaskStatus = "active" | "pending" | "completed";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

const TASKS: Task[] = [
  {
    id: "2",
    title: "Work on Tetris",
    status: "pending",
  },
  {
    id: "3",
    title: "Do 50 sit-ups",
    status: "completed",
  },
  {
    id: "1",
    title: "Finish Pomodoro Timer",
    status: "active",
  },
];

const TASK_STATUS_ORDER = {
  active: 0,
  pending: 1,
  completed: 2,
} as const;

TASKS.sort((a, b) => {
  console.log("a:", a);
  console.log("b:", b);
  console.log(
    `returns: TASK_STATUS_ORDER[${a.status}] (${
      TASK_STATUS_ORDER[a.status]
    }) - TASK_STATUS_ORDER[${b.status}] (${TASK_STATUS_ORDER[b.status]}) = ${
      TASK_STATUS_ORDER[a.status] - TASK_STATUS_ORDER[b.status]
    }`
  );
  console.log("---------------------");
  return TASK_STATUS_ORDER[a.status] - TASK_STATUS_ORDER[b.status];
});

console.log("sorted tasks: ", TASKS);
