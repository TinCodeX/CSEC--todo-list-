import { useState } from "react";

function TaskItem({ task, toggleTask, deleteTask, editTask }) {

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const saveEdit = () => {
    editTask(task.id, text);
    setEditing(false);
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
        />
      ) : (
        <span>{task.text}</span>
      )}

      <div className="icons">

        <i
          className="fa-solid fa-pencil edit"
          onClick={() => setEditing(!editing)}
        ></i>

        <i
          className="fa-regular fa-trash-can delete"
          onClick={() => deleteTask(task.id)}
        ></i>

      </div>
    </div>
  );
}

export default TaskItem;