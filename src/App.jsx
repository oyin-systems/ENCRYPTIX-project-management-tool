import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import ProgressTracker from './components/ProgressTracker';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [tasks, setTasks] = useState([]);

  const addProject = (name) => {
    const newProject = { id: Date.now(), name };
    setProjects([...projects, newProject]);
  };

  const selectProject = (id) => {
    setSelectedProjectId(id);
  };

  const addTask = (name, deadline) => {
    const newTask = { id: Date.now(), name, deadline, completed: false, projectId: selectedProjectId };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const selectedProjectTasks = tasks.filter(task => task.projectId === selectedProjectId);

  return (
    <div className='bg-slate-900 text-white min-h-screen p-10 flex flex-col items-center bg-project-tool-bg bg-cover bg-center'>
  <h1 className='text-4xl font-bold text-center mb-4 underline'>Project Management Tool</h1>
  
  <div className='flex flex-col lg:flex-row w-full'>
    {/* Projects */}
    <div className='w-1/2 pr-4'>
      <ProjectForm addProject={addProject} />
      <ProjectList projects={projects} selectProject={selectProject} />
    </div>

    {/* Tasks */}
    <div className='w-1/2 pl-4 mt-8 lg:mt-0'>
      {selectedProjectId && (
        <>
          <TaskForm addTask={addTask} />
          <TaskList tasks={selectedProjectTasks} toggleTaskCompletion={toggleTaskCompletion} />
          <ProgressTracker tasks={selectedProjectTasks} />
        </>
      )}
    </div>
  </div>
</div>

  );
};

export default App;
