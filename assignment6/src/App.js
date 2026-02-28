import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const trimmedTask = task.trim();

    if (trimmedTask === "") return;

    const updatedTasks = [...tasks, trimmedTask]
      .sort((a, b) => a.localeCompare(b));

    setTasks(updatedTasks);
    setTask(""); // clear input
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>React Todo App</h1>

      <input
        type="text"
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;