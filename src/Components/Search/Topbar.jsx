import Link from 'next/link';
import React from 'react';

export default function Topbar() {
  return (
    <div className="flex mx-52">
      <Link href="/images" className="p-3 text-sm rounded-full border mx-1 hover:bg-gray-100">Images</Link>
      <Link href="/images" className="p-3 text-sm rounded-full border mx-1 hover:bg-gray-100">Videos</Link>
      <Link href="/images" className="p-3 text-sm rounded-full border mx-1 hover:bg-gray-100">Articles</Link>
      <Link href="mailto:batoolfatima2135@gmail.com" className="p-3 text-sm rounded-full border mx-1 hover:bg-gray-100">Contact</Link>
      <Link href="./Resume.pdf" target="_blank" className="p-3 text-sm rounded-full border mx-1">Resume</Link>
    </div>
  );
}
