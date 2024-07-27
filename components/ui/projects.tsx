import React from 'react';
import project_list from '@/components/ui/project_list'; 

const ProjectList = () => {
  const projects = project_list();

  return (
    <div className="md:flex justify-center items-center md:w-100 mx-auto p-5  "> 
      <div className="flex-col pt-20 p-10"> 
        <h1 className="text-slate-800 dark:text-slate-100 text-2xl md:text-4xl">  
          Latest Projects <br />
        </h1>
        <article className="flex flex-col gap-y-5 pt-10">
          {projects.map((project, index) => (
            <div key={index} className="px-6 py-8 list-none bg-white rounded-md shadow dark:bg-slate-800">
              <h1 className="w-full text-lg font-bold transition duration-75 md:text-xl text-slate-900 dark:text-slate-50 p-2">{project?.Title}</h1>
              <p className="text-sm text-slate-700 dark:text-slate-300 md:text-base p-2">{project?.Description}</p>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
};

export default ProjectList;
