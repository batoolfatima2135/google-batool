'use client';

import { createContext } from 'react';
import Intro from '../Components/Links/Intro';
import Microverse from '../Components/Links/Microverse';
import VU from '../Components/Links/VU';
import TechnicalSkills from '../Components/Links/TechnicalSkills';
import SoftSkills from '../Components/Links/SoftSkills';
import Certification from '../Components/Links/Certifications';
import Frontend from '../Components/Links/Frontend';
import Backend from '../Components/Links/Backend';
import Contact from '../Components/Links/Contact';
import WorkTemplate from '../Components/Links/WorkTemplate';

export interface LinksInterface {
  id: number,
  keywords: string[];
  data: JSX.Element;
}
export const LinkContext = createContext<LinksInterface[]>([]);

export default function LinksProvider({
  children,
  initialLinks = [
    {
      id: 1,
      keywords: ['about', 'intro', 'developer', 'introduction', 'pitch', 'who', 'detail', 'details', 'information', 'bio', 'profile'],
      data: <Intro />,
    },
    {
      id: 2,
      keywords: ['about', 'introduction', 'details', 'knowledge', 'information', 'education', 'microverse', 'qualifications', 'qualification', 'Knowledge',
      ],
      data: <Microverse />,
    },
    {
      id: 3,
      keywords: ['about', 'introduction', 'details', 'knowledge', 'information', 'education', 'graduation', 'university', 'degree',
        'qualifications', 'qualification', 'Knowledge', 'graduate'],
      data: <VU />,
    },
    {
      id: 4,
      keywords: ['about', 'skill', 'set', 'technical', 'technology', 'technologies', 'knowledge', 'proficiencies',
        'capabilities', 'tech'],
      data: <TechnicalSkills />,
    },

    {
      id: 5,
      keywords: ['about', 'achievment', 'achievements', 'knowledge', 'certificates', 'certificate', 'certification',
        'microverse', 'qualification', 'qualifications'],
      data: <Certification />,
    },
    {
      id: 6,
      keywords: ['skills', 'set', 'front-end', 'frontend', 'design', 'developement', 'skill', 'ui', 'user', 'interface', 'react',
        'redux', 'webpage', 'website', 'style', 'html', 'css', 'javascript', 'tailwind', 'bootstrap', 'designing'],
      data: <Frontend />,
    },
    {
      id: 7,
      keywords: ['skills', 'set', 'development', 'database', 'back-end', 'backend', 'dynamic', 'website', 'webpage', 'ruby',
        'rails', 'postgresql', 'logic', 'rspec'],
      data: <Backend />,
    },
    {
      id: 8,
      keywords: ['about', 'skills', 'set', 'solving', 'creativity', 'communication', 'professional', 'professionalism', 'soft',
        'interpersonal', 'knowledge', 'qualities', 'behavioral', 'collaboration', 'adaptive', 'people', 'team', 'teamwork', 'leadership', 'mentor'],
      data: <SoftSkills />,
    },
    {
      id: 9,
      keywords: ['work', 'works', 'project', 'projects', 'experience', 'application', 'applications', 'development',
        'react', 'redux', 'tailwind', 'html', 'css', 'api', 'javascript', 'webpack', 'jest', 'git', 'github', 'eslint', 'stylelint'],
      data: <WorkTemplate currentProject="Air pollution" />,
    },
    {
      id: 10,
      keywords: ['work', 'works', 'project', 'projects', 'experience', 'application', 'applications', 'development',
        'ruby', 'rspec', 'git', 'github', 'eslint', 'stylelint', 'rubocop'],
      data: <WorkTemplate currentProject="My catalog" />,
    },
    {
      id: 11,
      keywords: ['work', 'works', 'project', 'projects', 'experience', 'application', 'applications', 'development',
        'react', 'redux', 'tailwind', 'html', 'css', 'javascript', 'api', 'webpack', 'jest', 'git', 'github', 'eslint', 'stylelint'],
      data: <WorkTemplate currentProject="Shopping Cart" />,
    },
    {
      id: 12,
      keywords: ['work', 'works', 'project', 'projects', 'experience', 'application', 'applications', 'development',
        'react', 'tailwind', 'html', 'css', 'javascript', 'api', 'webpack', 'jest', 'git', 'github', 'eslint', 'stylelint'],
      data: <WorkTemplate currentProject="Movie maze" />,
    },
    {
      id: 13,
      keywords: ['work', 'works', 'project', 'projects', 'experience', 'application', 'applications', 'development',
        'react', 'redux', 'tailwind', 'html', 'css', 'javascript', 'api', 'webpack', 'jest', 'git', 'github', 'eslint', 'stylelint'],
      data: <WorkTemplate currentProject="Space Traveler Hub " />,
    },
    {
      id: 14,
      keywords: ['work', 'works', 'project', 'projects', 'experience', 'application', 'applications', 'development',
        'react', 'tailwind', 'html', 'css', 'javascript', 'api', 'webpack', 'jest', 'git', 'github', 'eslint', 'stylelint'],
      data: <WorkTemplate currentProject="To-do app React" />,
    },
    {
      id: 15,
      keywords: ['work', 'works', 'project', 'projects', 'experience', 'application', 'applications', 'development',
        'react', 'tailwind', 'html', 'css', 'javascript', 'api', 'webpack', 'jest', 'git', 'github', 'eslint', 'stylelint'],
      data: <WorkTemplate currentProject="Math magician" />,
    },
    {
      id: 16,
      keywords: ['contact', 'about', 'skills', 'work', 'message', 'email', 'touch', 'reach'],
      data: <Contact />,
    },
  ],
}: {
  children: React.ReactNode;
  initialLinks?: LinksInterface[];
}) {
  return (
    <LinkContext.Provider value={initialLinks}>{children}</LinkContext.Provider>
  );
}
