import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask, editTask }) {

  return (
    <div className="tasks">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;