import Link from 'next/link';
import React from 'react';

export default function Buttons() {
  return (
    <div className="flex mt-4">
      <Link href="/work" type="button" className="mx-3  border rounded border-white  text-xs lg:text-sm hover:border-gray-300 hover:shadow p-2.5">Projects</Link>
      <a type="button" href="./Batool_Fatima_Resume.pdf" target="_blank" className="mx-3 border rounded border-white  text-xs lg:text-sm hover:border-gray-300 hover:shadow p-2.5">Download Resume</a>
      <Link href="/introduction" type="button" className="mx-3  border rounded border-white  text-xs lg:text-sm hover:border-gray-300 hover:shadow p-2.5">Who am I?</Link>
    </div>
  );
}
