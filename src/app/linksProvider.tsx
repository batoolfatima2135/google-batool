"use client";
import { createContext } from "react";
import Intro from "../Components/Links/Intro";
import Microverse from "../Components/Links/Microverse";
import VU from "../Components/Links/VU";
import TechnicalSkills from "../Components/Links/TechnicalSkills";
import SoftSkills from "../Components/Links/SoftSkills";
import Certification from "../Components/Links/Certifications";
import Frontend from "../Components/Links/Frontend";
import Backend from "../Components/Links/Backend";
import WorkTemplate from "../Components/Links/WorkTemplate";

export const LinkContext = createContext<LinksInterface[]>([]);

export interface LinksInterface {
  keywords: string[];
  data: JSX.Element;
}

export default function LinksProvider({
  children,
  initialLinks = [
    {
      keywords: ["about"],
      data: <Intro />,
    },
    {
      keywords: ["about"],
      data: <Microverse />,
    },
    {
      keywords: ["about"],
      data: <VU />,
    },
    {
      keywords: ["about"],
      data: <TechnicalSkills />,
    },

    {
      keywords: ["about"],
      data: <Certification />,
    },
    {
      keywords: ["skills"],
      data: <Frontend />,
    },
    {
      keywords: ["skills"],
      data: <Backend />,
    },
    {
      keywords: ["about", "skills"],
      data: <SoftSkills />,
    },
    {
      keywords: ["work"],
      data: <WorkTemplate currentProject="Air pollution" />,
    },
    {
      keywords: ["work"],
      data: <WorkTemplate currentProject="My catalog" />,
    },
    {
      keywords: ["work"],
      data: <WorkTemplate currentProject="Shopping Cart" />,
    },
    {
      keywords: ["work"],
      data: <WorkTemplate currentProject="Movie maze" />,
    },
    {
      keywords: ["work"],
      data: <WorkTemplate currentProject="Space Traveler Hub " />,
    },
    {
      keywords: ["work"],
      data: <WorkTemplate currentProject="To-do app React" />,
    },
    {
      keywords: ["work"],
      data: <WorkTemplate currentProject="Math magician" />,
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
