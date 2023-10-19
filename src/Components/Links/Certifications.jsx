'use client';

import React, { useState } from 'react';

export default function Certification() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">achievements/my-microverse-certifications</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Achievements: My Certifications
      </button>
      <p className="text-sm  text-gray-600">
        Showcasing recent certification obtained from Microverse including:
        Certification of JavaScript, Certification of React & Redux,
        Certification of Ruby and databases, Certifaction of HTML/CSS
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <div className="grid grid-cols-2">
          <div className="col">
            <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/79286087" rel="noreferrer" target="_blank">
              <img src="/certification/react.jfif" alt="react certificate" />
              <p className="text-center p-3 font-medium"> Microverse Certification of React & Redux</p>
            </a>
          </div>
          <div className="col m-2">
            <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/76794366" rel="noreferrer" target="_blank">
              <img src="/certification/javascript.jfif" alt="react certificate" />
              <p className="text-center p-3 font-medium"> Microverse Certification of Javascript</p>
            </a>
          </div>
          <div className="col m-2">
            <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/82220648" rel="noreferrer" target="_blank">
              <img src="/certification/ruby.jfif" alt="react certificate" />
              <p className="text-center p-3 font-medium"> Microverse Certification of Ruby</p>
            </a>
          </div>
          <div className="col m-2">
            <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/74439943" rel="noreferrer" target="_blank">
              <img src="/certification/html.jfif" alt="react certificate" />
              <p className="text-center p-3 font-medium"> Microverse Certification of HTML/CSS</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
