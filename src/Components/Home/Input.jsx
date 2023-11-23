'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Input() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState('');
 
  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      router.push(`/search/${query}`);
      setIsVisible(!isVisible);
      setQuery('');
    }
  };
  const toggleDropdownVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative  w-full">
      <div className="rounded-full p-1 px-2 border text-xs lg:text-base shadow-md  flex  w-full  hover:shadow-lg  ">

        <span className="mx-1">
          <Image
            src="/search.PNG"
            alt="icons"
            width={40}
            height={40}
          />
        </span>
        <input
          type="text"
          className="w-full outline-none"
          onClick={toggleDropdownVisibility}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSubmit}
        />
        <span>
          <Image
            src="/icons.PNG"
            alt="icons"
            width={80}
            height={80}
          />
        </span>

      </div>
      <div
        className={`w-full bg-white border-t-0 border shadow-sm absolute  rounded-xl p-2 transition-all duration-200 ${
          isVisible ? 'max-h-full   opacity-100 block' : 'max-h-0 opacity-0 hidden'
        }`}
        style={{ maxHeight: isVisible ? '500px' : '0' }}

      >
        <ul>
          <li className="py-1">
            <a href="/about" className="flex items-center hover:text-blue-900">
              <span className="mx-1">
                <Image
                  src="/time.PNG"
                  alt="time-icon"
                  width={30}
                  height={30}
                />
              </span>
              About me
            </a>

          </li>
          <li className="py-1">
            <a href="/skills" className="flex items-center hover:text-blue-900">
              <span className="mx-1">
                <Image
                  src="/time.PNG"
                  alt="time-icon"
                  width={30}
                  height={30}
                />
              </span>
              See my skills
            </a>
          </li>
          <li className="py-1">
            <a href="/work" className="flex items-center hover:text-blue-900">
              <span className="mx-1">
                <Image
                  src="/time.PNG"
                  alt="time-icon"
                  width={30}
                  height={30}
                />
              </span>
              See my past work
            </a>
          </li>
          <li className="py-1">
            <a href="/videos" className="flex items-center hover:text-blue-900">
              <span className="mx-1">
                <Image
                  src="/time.PNG"
                  alt="time-icon"
                  width={30}
                  height={30}
                />
              </span>
              See my presentations
            </a>
          </li>
          <li className="py-1">
            <a href="contact" className="flex items-center hover:text-blue-900">
              <span className="mx-1">
                <Image
                  src="/time.PNG"
                  alt="time-icon"
                  width={30}
                  height={30}
                />
              </span>
              Contact me
            </a>
          </li>

        </ul>
      </div>

    </div>

  );
}
