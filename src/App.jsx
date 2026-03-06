import { useState } from "react";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, text: "Welcome to your to-do list!", completed: false },
    { id: 2, text: "Click the checkbox to mark as complete", completed: false },
    { id: 3, text: "Hover to delete items", completed: true }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const completed = tasks.filter(t => t.completed).length;
  const active = tasks.length - completed;

  return (
    <div className="container">
      <Header />
      <InputBox addTask={addTask} />
      <Stats active={active} completed={completed} total={tasks.length} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;