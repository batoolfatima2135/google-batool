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
import Contact from "../Components/Links/Contact";
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
      keywords: ["about", "intro", "developer", "introduction", "pitch", "who", "detail", "details", "information", "bio", "profile"],
      data: <Intro />,
    },
    {
      keywords: ["about", "introduction", "details", "knowledge", "information", "education", "microverse", "qualifications", "qualification", "Knowledge"
      ],
      data: <Microverse />,
    },
    {
      keywords: ["about","introduction", "details", "knowledge", "information", "education", "graduation", "university", "degree",
      "qualifications", "qualification", "Knowledge", "graduate"],
      data: <VU />,
    },
    {
      keywords: ["about", "skill", "set", "technical", "technology", "technologies", "knowledge", "proficiencies",
      "capabilities", "tech"],
      data: <TechnicalSkills />,
    },

    {
      keywords: ["about", "achievment", "achievements", "knowledge", "certificates", "certificate", "certification",
      "microverse", "qualification", "qualifications"],
      data: <Certification />,
    },
    {
      keywords: ["skills", "set", "front-end", "frontend", "design", "developement", "skill", "ui", "user", "interface", "react",
      "redux", "webpage", "website", "style", "html", "css", "javascript", "tailwind", "bootstrap", "designing"],
      data: <Frontend />,
    },
    {
      keywords: ["skills", "set", "development", "database", "back-end", "backend", "dynamic", "website", "webpage", "ruby", 
      "rails", "postgresql", "logic", "rspec"],
      data: <Backend />,
    },
    {
      keywords: ["about", "skills", "set", "solving", "creativity", "communication", "professional", "professionalism", "soft",
      "interpersonal", "knowledge", "qualities", "behavioral", "collaboration", "adaptive", "people", "team", "teamwork", "leadership", "mentor"],
      data: <SoftSkills />,
    },
    {
      keywords: ["work", "works", "project", "projects", "experience", "application", "applications", "development",
      "react", "redux", "tailwind", "html", "css", "api", "javascript", "webpack", "jest", "git", "github", "eslint", "stylelint"],
      data: <WorkTemplate currentProject="Air pollution" />,
    },
    {
      keywords: ["work", "works", "project", "projects", "experience", "application", "applications", "development",
      "ruby", "rspec", "git", "github", "eslint", "stylelint", "rubocop"],
      data: <WorkTemplate currentProject="My catalog" />,
    },
    {
      keywords: ["work", "works", "project", "projects", "experience", "application", "applications", "development",
      "react", "redux", "tailwind", "html", "css", "javascript", "api", "webpack", "jest", "git", "github", "eslint", "stylelint"],
      data: <WorkTemplate currentProject="Shopping Cart" />,
    },
    {
      keywords: ["work", "works", "project", "projects", "experience", "application", "applications", "development",
       "react", "tailwind", "html", "css", "javascript", "api", "webpack", "jest", "git", "github", "eslint", "stylelint"],
      data: <WorkTemplate currentProject="Movie maze" />,
    },
    {
      keywords: ["work", "works", "project", "projects", "experience", "application", "applications", "development",
      "react", "redux", "tailwind", "html", "css", "javascript", "api", "webpack", "jest", "git", "github", "eslint", "stylelint"],
      data: <WorkTemplate currentProject="Space Traveler Hub " />,
    },
    {
      keywords: ["work", "works", "project", "projects", "experience", "application", "applications", "development",
      "react", "tailwind", "html", "css", "javascript", "api", "webpack", "jest", "git", "github", "eslint", "stylelint"],
      data: <WorkTemplate currentProject="To-do app React" />,
    },
    {
      keywords: ["work", "works", "project", "projects", "experience", "application", "applications", "development",
      "react", "tailwind", "html", "css", "javascript", "api", "webpack", "jest", "git", "github", "eslint", "stylelint"],
      data: <WorkTemplate currentProject="Math magician" />,
    },
    {
      keywords: ["contact", "about", "skills", "work", "message", "email", "touch", "reach"],
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
