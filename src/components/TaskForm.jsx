import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskName, taskDeadline);
    setTaskName('');
    setTaskDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold text-blue-600 mb-6">Add Task</h2>
  <div className="mb-4">
    <label htmlFor="taskName" className="block text-lg font-medium text-gray-700 mb-2">Task Name</label>
    <input
      type="text"
      id="taskName"
      value={taskName}
      onChange={(e) => setTaskName(e.target.value)}
      placeholder="Enter task name"
      className="w-full h-12 px-4 text-gray-800 font-medium text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="taskDeadline" className="block text-lg font-medium text-gray-700 mb-2">Deadline</label>
    <input
    required
      type="date"
      id="taskDeadline"
      value={taskDeadline}
      onChange={(e) => setTaskDeadline(e.target.value)}
      className="w-full h-12 px-4 text-gray-800 font-medium text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    />
  </div>
  <button type="submit" className="w-full h-12 bg-blue-600 text-white font-bold text-lg rounded hover:bg-blue-700 transition duration-200">Add Task</button>
</form>

  );
};

export default TaskForm;
