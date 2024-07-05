import React from 'react';

const ProjectList = ({ projects, selectProject }) => {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Projects</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            onClick={() => selectProject(project.id)}
            className="cursor-pointer p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition duration-200"
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ProjectList;
