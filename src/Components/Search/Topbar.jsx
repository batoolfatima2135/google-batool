import Link from 'next/link';
import React from 'react';

export default function Topbar() {
  return (
    <div className="flex lg:mx-52 overflow-auto">
      <Link href="/work" className="p-3  text-sm rounded-full border  lg:mx-1 hover:bg-gray-100">Projects</Link>
      <Link href="/images" className="p-3  text-sm rounded-full border  lg:mx-1 hover:bg-gray-100">Images</Link>
      <Link href="/videos" className="p-3 text-sm rounded-full border mx-0.5 lg:mx-1 hover:bg-gray-100">Videos</Link>
      <Link href="/about" className="p-3 text-sm mx-0.5 rounded-full border lg:mx-1 hover:bg-gray-100">About</Link>
      <Link href="./Batool_Fatima_Resume.pdf" target="_blank" className="p-3 text-sm mx-0.5 rounded-full border lg:mx-1">Resume</Link>
    </div>
  );
}
