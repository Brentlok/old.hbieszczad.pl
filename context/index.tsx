import { createContext } from 'react';

export interface ProjectInterface {
  id: number;
  title: string;
  year: number;
  description: string;
  technologies: string;
  image: {
    url: string;
  };
  linkName: string;
  linkHref: string;
  linkIcon?: string;
  github?: string;
}

export interface Context {
  allProjects: ProjectInterface[];
  description: {
    data: string;
  };
}

const defaultContext: Context = {
  allProjects: [],
  description: {
    data: '',
  },
};

export const DataContext = createContext(defaultContext);
