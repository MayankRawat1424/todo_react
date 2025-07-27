"use client";
import React from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";
import Task from "./components/Task";
import TaskStats from "./components/TaskStats";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";

import { useState } from "react";

import { IoMdCreate } from "react-icons/io";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);

  return (
    <>
      <Header />
      <div className=" min-h-screen bg-black flex justify-evenly gap-2 max-w-7xl mx-auto">
        <section className="flex-[2]">
          <TaskList tasks={tasks} />
        </section>
        <section className="flex-[4] ">
          {showCreateTask && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
              <CreateTask
                setShowCreateTask={setShowCreateTask}
                onClose={() => setShowCreate(false)}
                setTasks={setTasks}
                className=""
              />
            </div>
          )}

          {showEditTask && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
              <EditTask
                showEditTask={showEditTask}
                setShowEditTask={setShowEditTask}
                onClose={() => setShowEditTask(false)}
                setTasks={setTasks}
                className=""
              />
            </div>
          )}

          <Task
            tasks={tasks}
            setTasks={setTasks}
            deleteTask={(id) =>
              setTasks(tasks.filter((task) => task.id !== id))
            }
            completeTask={(id) =>
              setTasks(
                tasks.map((task) =>
                  task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
                )
              )
            }
            setShowEditTask={setShowEditTask}
          />
        </section>

        <section className="flex-[2]">
          <TaskStats tasks={tasks} />
        </section>
        <button
          className="px-4 py-2 fixed bottom-6 right-6  w-16 aspect-square rounded-full bg-blue-600 hover:bg-blue-700 hover:cursor-pointer flex items-center justify-center"
          onClick={() => setShowCreateTask(true)}
        >
          <IoMdCreate className="text-white w-8 h-8" />
        </button>
      </div>
    </>
  );
}
