"use client";
import React, { useState, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { TaskContext } from "../context/TaskContext";

const CreateTask = ({ setShow }) => {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("We need a title and description to create a task!");
    } else {
      addTask(title, description, false);
      setTitle("");
      setDescription("");
      setShow(false);
    }
  };

  return (
    <div className="max-w-xl w-124 mx-auto p-6 bg-gray-100 rounded-lg shadow">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold mb-4 items-start text-black">
          What are we up to today?
        </h2>
        <button
          className="text-white bg-gray-600 w-8 aspect-square flex items-center justify-center hover:bg-gray-800 rounded-full transition hover:cursor-pointer"
          onClick={() => setShowCreateTask(false)}
        >
          <RxCross2 className="w-6 h-6" />
        </button>
      </div>

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
