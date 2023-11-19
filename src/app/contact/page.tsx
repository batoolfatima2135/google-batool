'use client';

import React, { useContext } from 'react';
import { LinkContext } from '../linksProvider.tsx';
import Faq from '../../Components/Others/Faq.jsx';

export default function About() {
  const links = useContext(LinkContext);
  const contactLink = links.filter((link) => link.keywords.includes('contact'));
  return (
    <div className="lg:m-6 m-2">
      {contactLink.map((link, index) => (
        <div key={index} className="py-2 my-3">
          {link.data}
        </div>
      ))}
      <Faq />
    </div>
  );
}
