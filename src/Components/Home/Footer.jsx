import React from 'react';
import { email, resume, socialLinks } from '@/static/links';

export default function Footer() {
  return (
    <footer className="border flex justify-between p-3">
      <ul className="flex justify-start text-xs lg:text-sm text-gray-500">
        <li className="lg:mx-2 mx-1"><a target="_blank" href="about">About</a></li>
        <li className="lg:mx-2 mx-1"><a target="_blank" href={socialLinks.linkedIn} rel="noreferrer">LinkedIn</a></li>
        <li className="lg:mx-2 mx-1"><a target="_blank" href={socialLinks.youtube} rel="noreferrer">Youtube</a></li>
        <li className="lg:mx-2 mx-1"><a target="_blank" href={socialLinks.github} rel="noreferrer">Github</a></li>
      </ul>
      <ul className="flex justify-end text-xs lg:text-sm text-gray-500">
        <li className="lg:mx-2 mx-1"><a href="/work">Projects</a></li>
        <li className="lg:mx-2 mx-1"><a href="contact">Contact</a></li>
        <li className="lg:mx-2 mx-1"><a href={email}>Email</a></li>
        <li className="lg:mx-2 mx-1"><a href={resume} target="_blank">Resume</a></li>
      </ul>
    </footer>
  );
}
