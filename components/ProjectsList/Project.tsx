import type { NextPage } from 'next';
import Image from 'next/image';
import GithubIcon from '../GithubIcon';

interface ProjectProps {
  title: string;
  year: number;
  image: string;
  description: string;
  technologies: string[];
  link: {
    name: string;
    icon?: string;
    href: string;
  };
  github?: string;
}

const Project: NextPage<ProjectProps> = (props) => {
  const { title, year, image, description, technologies, link, github } = props;

  const open = (link: string) => {
    window.open(link);
  };

  const ProjectHover: NextPage = () => (
    <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute z-10 bg-dark w-full h-full px-5 py-10">
      <p className="text-left">{description}</p>
      <div className="flex justify-center gap-6 my-10">
        {technologies.map((tech) => (
          <Image
            key={tech}
            src={`/assets/icons/${tech}.svg`}
            alt={tech}
            width={56}
            height={56}
          />
        ))}
      </div>
      <div
        className="w-11/12 h-12 rounded-full gradient mx-auto flex justify-center items-center cursor-pointer mb-4"
        onClick={() => open(link.href)}
      >
        <p className="font-semibold text-sm">{link.name}</p>
        <div className="absolute right-14 flex justify-center items-center">
          <Image
            width={32}
            height={32}
            src={`/assets/icons/${link.icon || 'link'}.svg`}
            alt={link.icon || 'link'}
          />
        </div>
      </div>
      {github && (
        <div
          className="w-11/12 h-12 rounded-full bg-background mx-auto flex justify-center items-center cursor-pointer"
          onClick={() => open(github)}
        >
          <p className="font-semibold text-sm">Kod źródłowy</p>
          <div className="absolute right-14">
            <GithubIcon small />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl lg:text-3xl">{title}</h1>
      <hr className="border-t-2 mx-auto my-2 w-20 lg:w-32" />
      <h2 className="font-bold text-xl lg:text-2xl mb-4">{year}</h2>
      <div className="w-full pb-full rounded-xl overflow-hidden relative group">
        <div className="w-full h-full absolute bg-primary">
          <Image
            width={400}
            height={400}
            layout="responsive"
            src={image}
            alt={title}
          />
        </div>
        <ProjectHover />
      </div>
    </div>
  );
};

export default Project;
