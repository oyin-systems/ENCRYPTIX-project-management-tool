import React from 'react';

const TaskList = ({ tasks, toggleTaskCompletion }) => {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Tasks</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center">
            <input
              type="checkbox"
              id={`task-${task.id}`}
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="h-6 w-6 mr-4 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor={`task-${task.id}`} className="text-lg font-medium text-gray-800">
              {task.name} - {task.deadline} - {task.completed ? 'Completed' : 'Pending'}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TaskList;
