import React from 'react';

const ProgressTracker = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="max-w-md mx-auto mt-4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Progress</h2>
      <div className="flex items-center space-x-4">
        <progress className="w-full h-6 bg-gray-200 rounded-full" value={progress} max="100"></progress>
        <span className="text-lg font-medium text-gray-800">{Math.ceil(progress.toFixed(1))}%</span>
      </div>
      <p className="mt-4 text-lg text-gray-700">{completedTasks} / {totalTasks} tasks completed</p>
    </div>
  );
};


export default ProgressTracker;
