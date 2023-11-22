'use client';

import React, { useContext } from 'react';
import { LinkContext } from '../linksProvider.tsx';
import { motion } from 'framer-motion';
import Faq from '../../Components/Others/Faq';

export default function About() {
  const links = useContext(LinkContext);
  const skillsLinks = links.filter((link) => link.keywords.includes('skills'));
  return (
    <motion.div 
      className="lg:m-6 m-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {skillsLinks.map((link) => (
        <div key={link.id} className="py-2 my-3">
          {link.data}
        </div>
      ))}
      <Faq />
    </motion.div>
  );
}
