import { useState } from "react";
import type { Task } from "./task-manager";

import "../../styles/task-form.css";

interface TaskFormProps {
  initialTask?: Task;
  onSave: (title: string) => void;
  onCancel: () => void;
  onDelete?: () => void;
}

const TaskForm = ({
  initialTask,
  onSave,
  onCancel,
  onDelete,
}: TaskFormProps) => {
  const [title, setTitle] = useState(initialTask?.title || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSave(title.trim());
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What are you working on?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />

      <div className="task-form__actions">
        {onDelete && (
          <button onClick={onDelete} id="delete-button" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
            >
              <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
            </svg>
          </button>
        )}

        <div className="task-form__actions-right">
          <button onClick={onCancel} type="button">
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
