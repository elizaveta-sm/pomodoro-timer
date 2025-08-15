import type { TimerMode } from "../../App";
import TimerPrompt from "./timer-prompt";

import TaskItem from "./task-item";
import { useEffect, useState } from "react";
import { sortTasksByStatus } from "../../utils/sorters";
import TaskForm from "./task-form";
import { generateId } from "../../utils/generators";

import "../../styles/task-manager.css";

interface TaskListProps {
  activeMode: TimerMode;
}

export type TaskStatus = "active" | "pending" | "completed";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

const reorderTasks = (tasks: Task[]): Task[] => {
  const sortedTasks = sortTasksByStatus(tasks);

  const pendingTaskExists = sortedTasks.some(
    (task) => task.status === "pending"
  );
  if (pendingTaskExists) {
    sortedTasks[0].status = "active";
  }

  return sortedTasks;
};

const getInitialTasks = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? reorderTasks(JSON.parse(storedTasks)) : [];
};

const TaskList = ({ activeMode }: TaskListProps) => {
  const [tasks, setTasks] = useState<Task[]>(getInitialTasks());
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskStatusChange = (taskId: string, isChecked: boolean) => {
    const updatedTasks: Task[] = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: isChecked ? "completed" : "pending" };
      }
      return task;
    });

    setTasks(reorderTasks(updatedTasks));
  };

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: generateId(),
      title,
      status: "pending",
    };

    const updatedTasks = reorderTasks([...tasks, newTask]);
    setTasks(updatedTasks);
    setIsAddingNewTask(false);
  };

  const handleEditTask = (newTitle: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTaskId ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId("");
  };

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter((task) => task.id !== editingTaskId);
    setTasks(updatedTasks);
    setEditingTaskId("");
  };

  const handleCancel = () => {
    if (editingTaskId) {
      setEditingTaskId("");
    } else if (isAddingNewTask) {
      setIsAddingNewTask(false);
    }
  };

  return (
    <div className="task-manager">
      <TimerPrompt
        activeMode={activeMode}
        activeTaskTitle={tasks[0]?.status === "active" ? tasks[0].title : ""}
      />

      <h3 className="task-manager__header">Tasks</h3>

      <ul className="task-manager__task-list">
        {tasks &&
          tasks.map((task) =>
            editingTaskId === task.id ? (
              <TaskForm
                initialTask={task}
                onSave={handleEditTask}
                onCancel={handleCancel}
                onDelete={handleDeleteTask}
                key={task.id}
              />
            ) : (
              <TaskItem
                task={task}
                key={task.id}
                onStatusChange={(checked) =>
                  handleTaskStatusChange(task.id, checked)
                }
                onEdit={() => setEditingTaskId(task.id)}
              />
            )
          )}
      </ul>

      {isAddingNewTask && !editingTaskId ? (
        <TaskForm
          onSave={handleAddTask}
          onCancel={() => setIsAddingNewTask(false)}
        />
      ) : (
        <button
          className="task-manager__add-task-button"
          onClick={() => setIsAddingNewTask(true)}
        >
          Add Task
        </button>
      )}
    </div>
  );
};

export default TaskList;
