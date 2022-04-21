import type { NextPage } from 'next';
import Project from './Project';

// title: string;
//   year: number;
//   image: string | string[];
//   description: string;
//   technologies: string[];
//   link: {
//     name: string;
//     icon?: string;
//     href: string;
//   };
//   github?: string;

const temp_data = [
  {
    id: 0,
    title: 'MyMeds',
    year: 2022,
    image: 'https://unsplash.it/401/401',
    description:
      'Aplikacja stworzona przy pracy nad projektem w ramach platformy Zwolnieni z teorii, napisana w react native.',
    technologies: ['react'],
    link: {
      name: 'Dostępna w sklepie play',
      href: 'https://play.google.com/',
      icon: 'playstore',
    },
    github: 'https://github.com/Brentlok/MyMeds',
  },
  {
    id: 1,
    title: 'Badania psychotechniczne',
    year: 2020,
    image: 'https://unsplash.it/400/400',
    description:
      'Strona internetowa stworzona dla pracownii psychologicznej Drivemat.',
    technologies: ['html', 'css', 'js'],
    link: {
      name: 'badaniepsychotechniczne.com',
      href: 'https://badaniepsychotechniczne.com',
    },
  },
];

const ProjectsList: NextPage = () => {
  return (
    <div className="w-full my-16 grid md:gap-12 md:grid-cols-2 2xl:grid-cols-3">
      {temp_data.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsList;
