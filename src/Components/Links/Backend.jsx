'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Frontend() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">Skills/backend-skills</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Skills: My Backend Skills Set
      </button>
      <p className="text-sm  text-gray-600">
        For backend my expertise include Ruby, Ruby on Rails and postgresql which allow me create
        efficiant web-applications
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p>
          I possess a solid grasp of Ruby and uses its capabilities with
          Ruby on Rails framework to  develop  web application backends.
          I specialize in working with PostgreSQL and testing tool RSpec
          , ensuring the creation of powerful
          and highly functional backend systems.
        </p>

        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-7 my-5 ">
          <div className="m-2  lg:m-3">
            <Image
              className="mx-auto"
              src="/techstack/ruby.png"
              width={45}
              height={45}
            />
            <p className="text-center">Ruby</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto"
              src="/techstack/rubyonrails.png"
              width={45}
              height={45}
            />
            <p>Ruby on Rails</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto"
              src="/techstack/postgresql.png"
              width={45}
              height={45}
            />
            <p>PostgreSQL</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto text-center"
              src="/techstack/rspec.png"
              width={45}
              height={45}
            />
            <p>RSpec</p>
          </div>
        </div>
      </div>
    </div>
  );
}
