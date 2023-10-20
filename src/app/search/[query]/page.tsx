'use client';

import React, { useState, useContext } from 'react';
import Faq from "../../../Components/Others/Faq";
import { LinkContext } from '@/app/linksProvider';

export default function Search({ params }: { params: { query: string } }) {
  const AllLinks = useContext(LinkContext);
const queryKeywords = params.query.toLowerCase().split('%20');
console.log(queryKeywords)
// Filter the links based on keyword matching
const Links = AllLinks.filter(link => {
  // Check if at least one of the query keywords is in the link's keywords
  return queryKeywords.some(keyword => link.keywords.includes(keyword));
});
  console.log(Links)
  return (
    <div className="lg:m-6 m-2">

       {Links && Links.map((link, index) => (
      <div key={index} className='py-2 my-3'>
        {link.data}
      </div>
    ))}
    {Links.length < 1 && (
      <div className='text-center py-5'>
        <p>Opss!😔 Nothing found.💔</p>
        <p> Try again or select option from dropdown</p>
      </div>
      
    )}
      <Faq />
    </div>
  );
}
