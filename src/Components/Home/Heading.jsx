import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Heading() {
  return (
    <h1
      className={`md:text-6xl lg:text-7xl text-3xl font-medium tracking-tighter text-center ${poppins.className}`}
    >
      <span className="text-blue-500">G</span>
      <span className="text-red-500">o</span>
      <span className="text-yellow-500">o</span>
      <span className="text-blue-500">g</span>
      <span className="text-green-600">l</span>
      <span className="text-red-500">e</span>
      <span>&nbsp;</span>
      <span className="text-blue-500">B</span>
      <span className="text-red-500">a</span>
      <span className="text-blue-500">t</span>
      <span className="text-red-500">o</span>
      <span className="text-yellow-500">o</span>
      <span className="text-green-600">l</span>
    </h1>
  );
}
