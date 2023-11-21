'use client';

import React, { useContext } from 'react';
import { LinkContext } from '../linksProvider.tsx';
import Faq from '../../Components/Others/Faq.jsx';

export default function About() {
  const links = useContext(LinkContext);
  const aboutLinks = links.filter((link) => link.keywords.includes('about'));
  return (
    <div className="lg:m-6 m-2">
      <h1 className="text-xl font-bold"> Hey there! 👋 Get ready for a quick intro 🌟</h1>
      <h1 className="text-lg font-bold text-gray-700 my-3"> I hope you enjoy the video!  🎥 </h1>
      <iframe src="https://www.youtube.com/embed/Fvw-E-pgo4c?si=dXHKprd6zElWNiui" title="Introduction" className="lg:w-full lg:h-96 md:w-full md:h-96" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <Faq />
    </div>
  );
}
