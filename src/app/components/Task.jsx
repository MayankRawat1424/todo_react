"use client";
import React from "react";
import { useState } from "react";

const Task = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">No Tasks to Display</p>
    );
  } else {
    const ListItems = tasks.map((task) => {
      return (
        <li
          key={task.id}
          className="bg-white shadow-md p-4 rounded-lg border border-gray-200 mb-4"
        >
          <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
          <p className="text-gray-600 mt-1">{task.description}</p>
        </li>
      );
    });

    return (
      <>
        <div className="max-w-xl mx-auto p-6 bg-gray-100 mt-10 rounded-lg shadow">
          <ul className="space-y-2">{ListItems}</ul>
        </div>
      </>
    );
  }
};

export default Task;
