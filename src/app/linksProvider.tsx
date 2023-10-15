'use client';
import { createContext } from 'react';
import Intro from "../Components/Links/Intro"
import Microverse from "../Components/Links/Microverse"
import VU from "../Components/Links/VU"
import TechnicalSkills from "../Components/Links/TechnicalSkills"
import SoftSkills from "../Components/Links/SoftSkills"


export const LinkContext = createContext<LinksInterface[]>([]);

export interface LinksInterface {
  keywords: string[];
  data: JSX.Element;
}


export default function LinksProvider({ children, initialLinks = [
  {
    keywords: [],
    data: < Intro />
  },
  {
    keywords: [],
    data: < Microverse />,
  },
  {
    keywords: [],
    data: < VU />,
  },
  {
    keywords: [],
    data: <TechnicalSkills />
  },
   {
    keywords: [],
    data: <SoftSkills />
  }
] } : {
  children: React.ReactNode;
  initialLinks?: LinksInterface[];
})  {
  return (
    <LinkContext.Provider value={initialLinks}>
      {children}
    </LinkContext.Provider>
  );
}
