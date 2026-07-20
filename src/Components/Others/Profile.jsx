import React from 'react';
import Image from 'next/image';
import { email, resume, socialLinks } from '@/static/links';

export default function Profile() {
  return (
    <div className="group relative">
      {/* <a href="/introduction"> */}
      <Image
        src="/profile-pic.jpg"
        alt="profile-pic"
        className="w-8 h-8 rounded-full mx-1"
        width={400}
        height={300}
      />
      {/* </a> */}
      <div className="bg-gray-600 text-white   text-xs hidden lg-absolute px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 right-0">
        <p>
          <a href={socialLinks.linkedIn} target="_blank" rel="noreferrer">
            Batool Fatima Zaidi
          </a>
        </p>
        <p>
          <a href={email}>batoolfatima2135@gmail.com</a>
        </p>
        <p>
          <a href={resume} target="_blank" className="text-blue-400">
            Download Resume
          </a>
        </p>
      </div>
    </div>
  );
}
