import Link from 'next/link';
import React from 'react';

export default function Buttons() {
  return (
    <div className="flex mt-4">
      <a type="button" href="./Resume.pdf" target="_blank" className="mx-3 border rounded border-white  text-xs lg:text-sm hover:border-gray-300 hover:shadow p-2.5">Download Resume</a>
      <Link href="https://www.youtube.com/embed/Fvw-E-pgo4c?si=b11qwLnYcHoMRQPT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen type="button" className="mx-3  border rounded border-white  text-xs lg:text-sm hover:border-gray-300 hover:shadow p-2.5">Who am I?</Link>
    </div>
  );
}
