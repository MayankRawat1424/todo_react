"use client";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTask from "./components/CreateTask";
import Task from "./components/Task";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <Header />
      <div>
        <CreateTask setTasks={setTasks} />
        <Task tasks={tasks} />
      </div>
    </>
  );
}
