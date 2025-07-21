"use client";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";
import Task from "./components/Task";
import TaskStats from "./components/TaskStats";
import TaskList from "./components/TaskList";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <Header />
      <div className=" min-h-screen bg-black flex justify-evenly gap-2 max-w-7xl mx-auto">
        <section className="flex-[2]">
          <TaskList tasks={tasks} />
        </section>
        <section className="flex-[4] ">
          <CreateTask setTasks={setTasks} />
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
          />
        </section>

        <section className="flex-[2]">
          <TaskStats tasks={tasks} />
        </section>
      </div>
    </>
  );
}
