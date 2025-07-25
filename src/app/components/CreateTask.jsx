"use client";
import React, { useState, useEffect } from "react";

const CreateTask = ({ setTasks, setShowCreateTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //   const [tasks, setTasks] = useState([]);

  //   useEffect(() => {
  //     console.log("Tasks:", tasks);
  //   }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("We need a title and description to create a task!");
    } else {
      // if (!title.trim()) {
      //   let date = new Date().toLocaleString();
      //   let time = new Date().toLocaleTimeString();
      //   setTitle(`Task ${time} :: ${date}`);
      // }
      // if (!description.trim()) {
      //   setDescription(title);
      // }
      const newTask = {
        id: crypto.randomUUID(),
        title: title,
        description: description,
        completed: false,
        date: new Date().toLocaleDateString(),
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTitle("");
      setDescription("");
      setShowCreateTask(false);
    }
  };

  return (
    <div className="max-w-xl w-124 mx-auto p-6 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">
        What are we up to today?
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="TaskTitle"
            className="block mb-1 font-medium text-black"
          >
            Title
          </label>
          <input
            type="text"
            id="TaskTitle"
            placeholder="Enter task title"
            value={title}
            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="TaskDescription"
            className="block mb-1 font-medium text-black"
          >
            Description
          </label>
          <textarea
            type="text"
            id="TaskDescription"
            placeholder="Enter task description"
            value={description}
            className="w-full h-64 p-2 border border-gray-300 rounded bg-white text-black"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
