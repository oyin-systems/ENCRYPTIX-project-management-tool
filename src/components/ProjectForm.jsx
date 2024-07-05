import React, { useState } from 'react';

const ProjectForm = ({ addProject }) => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(projectName);
    setProjectName('');
  };

  return (
<form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold text-blue-600 mb-6">Add a New Project</h2>
  <div className="mb-4">
    <label htmlFor="projectName" className="block text-lg font-medium text-gray-700 mb-2">Project Name</label>
    <input
      type="text"
      id="projectName"
      value={projectName}
      onChange={(e) => setProjectName(e.target.value)}
      placeholder="Enter project name"
      className="w-full h-12 px-4 text-gray-800 font-medium text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    />
  </div>
  <button type="submit" className="w-full h-12 bg-blue-600 text-white font-bold text-lg rounded hover:bg-blue-700 transition duration-200">Add Project</button>
</form>

  );
};

export default ProjectForm;
