'use client';

import React, { useState, useContext } from 'react';
import { LinkContext } from '@/app/linksProvider.tsx';
import Faq from '../../../Components/Others/Faq.tsx';

export default function Search({ params }: { params: { query: string } }) {
  const AllLinks = useContext(LinkContext);
  const queryKeywords = params.query.toLowerCase().split('%20');
  const Links = AllLinks.filter((link) => queryKeywords.some((keyword) => link.keywords.includes(keyword)));
  return (
    <div className="lg:m-6 m-2">

      {Links && Links.map((link, index) => (
        <div key={index} className="py-2 my-3">
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
    </div>
  );
}
