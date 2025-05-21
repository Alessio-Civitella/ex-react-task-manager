import { memo } from "react";

const TaskRow = memo(({ task }) => {
  return (
    <tr>
      <td>{task.title}</td>
      <td>
        <span className={`status ${task.status.replace(/\s+/g, '').toLowerCase()}`}>
          {task.status}
        </span>
      </td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  );
});

export default TaskRow;
