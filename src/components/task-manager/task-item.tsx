import type { Task } from "./task-manager";

interface TaskItemProps {
  task: Task;
  onStatusChange: (isChecked: boolean) => void;
  onEdit: () => void;
}

const TaskItem = ({ task, onStatusChange, onEdit }: TaskItemProps) => {
  return (
    <li className={`task task--${task.status}`}>
      <input
        type="checkbox"
        id={`task-${task.id}`}
        checked={task.status === "completed"}
        onChange={(e) => onStatusChange(e.target.checked)}
        className="task__checkbox"
      />
      <label htmlFor={`task-${task.id}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
        >
          <path d="M32,10c12.15,0,22,9.85,22,22s-9.85,22-22,22s-22-9.85-22-22S19.85,10,32,10z M42.679,25.486	c0.601-0.927,0.336-2.166-0.591-2.766c-0.93-0.6-2.167-0.336-2.767,0.591l-9.709,14.986l-5.11-5.809	c-0.729-0.829-1.994-0.911-2.823-0.18c-0.829,0.729-0.91,1.993-0.181,2.823l6.855,7.791c0.382,0.433,0.93,0.679,1.502,0.679	c0.049,0,0.098-0.002,0.146-0.005c0.625-0.046,1.191-0.382,1.532-0.907L42.679,25.486z"></path>
        </svg>
        {task.title}
      </label>

      <button id="edit-button" onClick={onEdit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
        >
          <path d="M10.107 6.292l-6.704 9.766c-.128.187-.203.404-.217.631l-.183 2.984c-.027.438.178.858.54 1.106C3.754 20.926 4.001 21 4.25 21c.177 0 .354-.037.52-.113l2.719-1.243C7.695 19.55 7.872 19.401 8 19.214l6.704-9.765L10.107 6.292zM16.118 7.388l1.147-1.671c.213-.311.275-.701.167-1.062-.037-.123-.388-1.226-1.468-1.968S13.729 2.012 13.6 2.022c-.375.03-.718.228-.932.539l-1.147 1.67L16.118 7.388zM19.25 18.5A1.25 1.25 0 1019.25 21 1.25 1.25 0 1019.25 18.5zM15.25 18.5A1.25 1.25 0 1015.25 21 1.25 1.25 0 1015.25 18.5zM11.25 18.5A1.25 1.25 0 1011.25 21 1.25 1.25 0 1011.25 18.5z"></path>
        </svg>
      </button>
    </li>
  );
};

export default TaskItem;
