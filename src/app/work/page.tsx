'use client';

import React, { useContext } from 'react';
import { LinkContext } from '../linksProvider';
import Faq from '../../Components/Others/Faq';

export default function About() {
  const links = useContext(LinkContext);
  const skillsLinks = links.filter((link) => link.keywords.includes('work'));
  return (
    <div className="lg:m-6 m-2">
      {skillsLinks.map((link, index) => (
        <div key={index} className="py-2 my-3">
          {link.data}
        </div>
      ))}
      <Faq />
    </div>
  );
}
