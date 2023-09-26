import React from 'react';
import Image from 'next/image';

export default function Profile() {
  return (
    <div className="group relative">
      <button type="button">
        <Image
          src="/profile-pic.jpg"
          alt="profile-pic"
          className="w-8 h-8 rounded-full mx-1"
          width={400}
          height={300}
        />

      </button>
      <div className="bg-gray-600 text-white absolute text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 right-0">
        <p><a href="https://www.linkedin.com/in/batoolfatima2135/" target="_blank" rel="noreferrer">Batool Fatima</a></p>
        <p><a href="mailto:batoolfatima2135@gmail.com">batoolfatima2135@gmail.com</a></p>
        <p><a href="./Resume.pdf" target="_blank" className="text-blue-400">Download Resume</a></p>
      </div>
    </div>
  );
}
