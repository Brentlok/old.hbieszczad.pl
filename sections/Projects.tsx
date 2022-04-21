import type { NextPage } from 'next';
import GithubIcon from '../components/GithubIcon';
import ProjectsList from '../components/ProjectsList';

const Projects: NextPage = () => (
  <section className="flex items-center flex-col w-full px-4 lg:px-0 lg:w-5/6 m-auto py-16">
    <h1 className="font-bold text-3xl lg:text-6xl">Moje projekty</h1>
    <ProjectsList />
    <div
      onClick={() => window.open('https://github.com/Brentlok/')}
      className="relative flex justify-center items-center cursor-pointer font-semibold text-sm w-80 h-12 rounded-full border-2 border-text max-w-xl lg:w-full lg:h-24 lg:border-4 lg:text-3xl transition-transform duration-300 hover:scale-105"
    >
      <p>Więcej na moim githubie</p>
      <div className="absolute right-6">
        <GithubIcon />
      </div>
    </div>
  </section>
);

export default Projects;
