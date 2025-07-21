import React from "react";

const TaskStats = ({ tasks }) => {
  let totaltasks = tasks.length;
  let completedTasks = tasks.filter((task) => task.completed).length;
  let pendingTasks = totaltasks - completedTasks;
  return (
    <>
      <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow flex flex-col items-center justify-center text-center gap-3">
        <h1 className="text-black text-2xl font-bold">Statistics</h1>
        <h2 className="text-white text-2xl p-10 bg-blue-600 w-32 aspect-square rounded-full content-center">{`${completedTasks} / ${totaltasks}`}</h2>
        <h3 className="text-black">Pending Tasks: {pendingTasks}</h3>
      </div>
    </>
  );
};

export default TaskStats;
