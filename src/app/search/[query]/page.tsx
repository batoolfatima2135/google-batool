'use client';

import React, { useContext } from 'react';
import { LinkContext } from '@/app/linksProvider.tsx';
import { motion } from 'framer-motion';
import Faq from '../../../Components/Others/Faq';

export default function Search({ params }: { params: { query: string } }) {
  const AllLinks = useContext(LinkContext);
  const query = params.query.toLowerCase().split('%20');
  const Links = AllLinks.filter((link) => query.some((w) => link.keywords.includes(w)));
  return (
    <motion.div 
      className="lg:m-6 m-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >

      {Links && Links.map((link) => (
        <div key={link.id} className="py-2 my-3">
          {link.data}
        </div>
      ))}
      {Links.length < 1 && (
      <div className="text-center py-5">
        <p>Opss!😔 Nothing found.💔</p>
        <p> Try again or select option from dropdown</p>
      </div>

      )}
      <Faq />
    </motion.div>
  );
}
