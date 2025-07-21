import React from "react";

const TaskList = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">No Tasks to Display</p>
    );
  }
  const MyTasks = tasks.map((task) => {
    return (
      <li key={task.id}>
        <p>{task.title}</p>
      </li>
    );
  });
  return (
    <div>
      <h2>List</h2>
      <ul>{MyTasks}</ul>
    </div>
  );
};

export default TaskList;
