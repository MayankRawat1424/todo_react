"use client";
const { createContext, useState } = require("react");

const initialState = {
  tasks: [],
};

export const TaskContext = createContext(initialState);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialState.tasks);

  const addTask = (title, description, status) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      completed: status,
      date: new Date().toLocaleDateString(),
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const editTask = (id, title, description, status) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, title, description, completed: status || item.status }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
