import type { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../context';
import Project from './Project';

const ProjectsList: NextPage = () => {
  const { allProjects } = useContext(DataContext);
  useEffect(() => {
    console.log(allProjects);
  });
  return (
    <div className="w-full my-16 grid md:gap-12 md:grid-cols-2 2xl:grid-cols-3">
      {allProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsList;
