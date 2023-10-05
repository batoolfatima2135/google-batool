'use client';
import { createContext } from 'react';

// Create the context

interface Project {
  id: number;
  title: string;
  images: string[];
  github: string;
  live: string;
  description: string;
  techstack: object[];
  tools: object[];
  presentation: string;
}

interface Techstack{
  id: number;
  image: String;
  name: String;
}
export const ProjectContext = createContext<Project[]>([]);
const tools: Techstack[] = [
  {
    id: 0,
    image: "/techstack/git.png",
    name: "Git",
  },
  {
    id: 1,
    image: "/techstack/github.png",
    name: "GitHub",
  },
  {
    id: 2,
    image: "/techstack/stylelint.png",
    name: "Stylelint",
  },
  {
    id: 3,
    image: "/techstack/eslint.png",
    name: "ESLint",
  },
  {
    id: 4,
    image: "/techstack/rubocop.png",
    name: "RuboCop",
  },
  {
    id: 5,
    image: "/techstack/chrome-devtool.png",
    name: "Chrome dev tools",
  },
  {
    id: 6,
    image: "/techstack/rest.png",
    name: "RESTful API",
  }]
const techstack: Techstack[] = [
  {
  id: 0,
  image: "/techstack/html.png",
  name: "HTML", 
  },
  {
  id: 1,
  image: "/techstack/css.png",
  name: "CSS", 
  },
  {
  id: 2,
  image: "/techstack/tailwind.png",
  name: "Tailwind", 
  },
  {
  id: 3,
  image: "/techstack/bootstrap.png",
  name: "Bootstrap", 
  },
  {
  id: 4,
  image: "/techstack/javascript.png",
  name: "JavaScript", 
  },
  {
  id: 5,
  image: "/techstack/jest.png",
  name: "Jest", 
  },
  {
  id: 6,
  image: "/techstack/webpack.png",
  name: "Webpack", 
  },
  {
  id: 7,
  image: "/techstack/react.png",
  name: "React", 
  },
  {
  id: 8,
  image: "/techstack/redux.png",
  name: "Redux toolkit", 
  },
   {
  id: 9,
  image: "/techstack/nextjs.png",
  name: "Next.js", 
  },  
  {
  id: 10,
  image: "/techstack/postgresql.png",
  name: "Postgresql", 
  },
  {
  id: 11,
  image: "/techstack/ruby.png",
  name: "Ruby", 
  },
  {
  id: 12,
  image: "/techstack/rspec.png",
  name: "RSpec", 
  },
  {
  id: 13,
  image: "/techstack/rubyonrails.png",
  name: "Ruby on Rails", 
  },
]
export default function ProjectProvider({
  children,
  initialProjects = [
    {
    id: 1,
    title: 'Math magician',
    images: ["math-magician-1.PNG", "math-magician-2.PNG", "math-magician-3.PNG"],
    github: 'https://github.com/batoolfatima2135/math-magicians',
    live: 'https://math-magician-hdzk.onrender.com/',
    description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote fetched from an external API.',
    techstack: [techstack[0], techstack[1], techstack[3], techstack[4], techstack[6], techstack[7]],
    tools: [...tools],
    presentation: 'https://www.youtube.com/watch?v=Bz6WEp57kq0',
    },
    {
    id: 2,
    title: 'To-do app React',
    images: ["todo-1.PNG", "todo-2.PNG", "todo-3.PNG", "todo-4.PNG"],
    github: 'https://github.com/batoolfatima2135/react-todo-app',
    live: 'https://batoolfatima2135.github.io/react-todo-app',
    description: 'TO-DO Application lets us add to-dos, edit, and delete items. Log in to see the delete feature. It also persists to-dos in the browser\'s local storage for a subsequent visit.',
    techstack: [techstack[0], techstack[1], techstack[4], techstack[6], techstack[7] ],
    tools: [...tools],
    presentation: 'https://www.youtube.com/watch?v=sJuROMX4v6A',
  },
 
  {
    id: 3,
    title: 'Space Travelers\' Hub ',
    images: ["space-1.PNG", "space-2.PNG", "space-3.PNG"],
    github: 'https://github.com/batoolfatima2135/Space',
    live: 'https://space-lemon-mu.vercel.app/',
    description: 'Space Travelers\' Hub is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Data is being fetched by API.',
    techstack: [techstack[0], techstack[1], techstack[3], techstack[4], techstack[6], techstack[7], techstack[8]],
    tools: [...tools],
    presentation: '',
  },
    {
    id: 4,
    title: 'Movie maze',
    images: ["movie-maze-1.PNG", "movie-maze-2.PNG", "movie-maze-3.PNG", "movie-maze-4.PNG"],
    github: 'https://github.com/Mike111222/theMoviesMaze',
    live: 'https://mike111222.github.io/theMoviesMaze/dist/',
    description: 'In theMoviesMaze, users can like Movies, TV Shows, and they can check out the details of every Movie or Show by clicking on the Comment Button. It also allows you to like the Movies. All data is preserved thanks to the external TVMaze API and Involvement APIs. Fetching Movies, Details of the Movies, Adding and Getting Likes, all done by APIs.',
    techstack: [techstack[0], techstack[1], techstack[3], techstack[4], techstack[5], techstack[6], techstack[7]],
    tools: tools,
    presentation: 'https://www.youtube.com/watch?v=6eFE18lJ6BI&t=32s',
  },
  {
    id: 5,
    title: 'Shopping Cart',
    images: ["cart-1.PNG", "cart-2.PNG", "cart-3.PNG", "cart-4.PNG"],
    github: 'https://github.com/batoolfatima2135/Cart',
    live: 'https://cart-7cct.onrender.com/',
    description: '"Cart" is a website that contains a few items fetched from an API. You can remove an item, change its quantity and also empty the cart.',
    techstack: [techstack[0], techstack[1], techstack[4], techstack[6], techstack[7], techstack[8]],
    tools: [...tools],
    presentation: 'https://www.youtube.com/watch?v=DW71BRahXUc',
  },
  {
    id: 6,
    title: 'Air pollution',
    images: ["air-pollution-1.PNG", "air-pollution-2.PNG"],
    github: 'https://github.com/batoolfatima2135/Air-Pollution',
    live: 'https://air-pollution-data.vercel.app/',
    description: 'This website shows data about how clean or polluted the air is in different cities. It gets information from several sources and lets you see and sort the data in different ways.The website aims to help people understand air quality and make informed choices to support cleaner air efforts.',
    techstack: [],
    tools: [...tools],
    presentation: 'https://www.youtube.com/watch?v=Fvw-E-pgo4c',
  },
   {
    id: 6,
    title: 'My catalog',
    images: ["catalog-1.PNG", "catalog-2.PNG", "catalog-3.PNG", "catalog-4.PNG"],
    github: 'https://github.com/K0ppai/My-Catalog',
    live: '',
    description: 'My Catalog is a console app that will help you to keep a record of different types of things you own: books, music albums, and games. All data is stored and retrieve using json files',
    techstack: [techstack[11], techstack[12]],
    tools: [tools[0], tools[1], tools[4], tools[5]],
    presentation: 'https://www.youtube.com/watch?v=uI7x7itNxyg&feature=youtu.be',
  }], 
}: {
  children: React.ReactNode;
  initialProjects?: Project[]; 
}) {
  return (
    <ProjectContext.Provider value={initialProjects}>
      {children}
    </ProjectContext.Provider>
  );
}
