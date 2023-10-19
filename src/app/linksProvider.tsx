'use client';
import { createContext } from 'react';
import Intro from "../Components/Links/Intro"
import Microverse from "../Components/Links/Microverse"
import VU from "../Components/Links/VU"
import TechnicalSkills from "../Components/Links/TechnicalSkills"
import SoftSkills from "../Components/Links/SoftSkills"
import Certification  from "../Components/Links/Certifications";


export const LinkContext = createContext<LinksInterface[]>([]);

export interface LinksInterface {
  keywords: string[];
  data: JSX.Element;
}


export default function LinksProvider({ children, initialLinks = [
  {
    keywords: ["about"],
    data: < Intro />
  },
  {
    keywords: ["about"],
    data: < Microverse />,
  },
  {
    keywords: ["about"],
    data: < VU />,
  },
  {
    keywords: ["about"],
    data: <TechnicalSkills />
  },
  {
    keywords: ["about"],
    data: <SoftSkills />
  },
  {
    keywords: ["about"],
    data: <Certification />
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
