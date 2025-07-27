"use client";
import React from "react";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TaskStats from "./components/TaskStats";
import EditTask from "./components/EditTask";
import { useState } from "react";
import { IoMdCreate } from "react-icons/io";
import TaskListCondensed from "./components/TaskListCondensed";
import TaskListDetailed from "./components/TaskListDetailed";

export default function Home() {
  const [currentTask, setCurrentTask] = useState(null);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);

  return (
    <>
      <Header />
      <div className=" min-h-screen bg-black flex justify-evenly gap-2 max-w-7xl mx-auto">
        <section className="flex-[2]">
          <TaskListCondensed />
        </section>
        <section className="flex-[4] ">
          {showCreateTask && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
              <CreateTask setShow={setShowCreateTask} />
            </div>
          )}

          {showEditTask && currentTask && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
              <EditTask setShow={setShowEditTask} currentTask={currentTask} />
            </div>
          )}

          <TaskListDetailed
            setShowEditTask={setShowEditTask}
            setCurrentTask={setCurrentTask}
          />
        </section>

        <section className="flex-[2]">
          <TaskStats />
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
