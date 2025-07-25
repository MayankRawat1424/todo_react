import React from "react";
import { IoMdCreate } from "react-icons/io";

const TaskList = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">No Tasks to Display</p>
    );
  }
  const MyTasks = tasks.map((task) => {
    return (
      <li
        key={task.id}
        className="text-black bg-white shadow-md p-4 rounded-lg mb-2"
      >
        <p>{task.title}</p>
      </li>
    );
  });
  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-bold text-black">All Tasks</h2>
      <ul className="my-4">{MyTasks}</ul>
    </div>
  );
};

export default TaskList;
