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
          <div className="col m-2 p-1">
            <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/86792952" rel="noreferrer" target="_blank">
              <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/86792952" alt="Software Development certificate" className='border border-gray-300 hover:-translate-y-1 hover:transition-transform'/>
              <p className="text-center p-3 font-bold text-xs py-2 lg:text-base md:text-base"> Microverse Certification of Software Development Program</p>
            </a>
          </div>
          <div className="col m-2 p-1">
            <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/84900279" rel="noreferrer" target="_blank">
              <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/84900279" alt="Ruby on Rails certificate"  className='border border-gray-300 hover:-translate-y-1 hover:transition-transform'/>
              <p className="text-center p-3 font-bold text-xs py-2  lg:text-base md:text-base"> Microverse Certification of Ruby on Rails</p>
            </a>
          </div>
          <div className="col m-2 p-1">
            <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/82220648" rel="noreferrer" target="_blank">
              <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/82220648" alt="Ruby certificate" className='border border-gray-300 hover:-translate-y-1 hover:transition-transform' />
              <p className="text-center p-3 font-bold text-xs py-2  lg:text-base md:text-base"> Microverse Certification of Ruby</p>
            </a>
          </div>
          <div className="col m-2 p-1">
            <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/79286087" rel="noreferrer" target="_blank">
              <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/79286087" alt="React & Redux certificate" className='border border-gray-300 hover:-translate-y-1 hover:transition-transform' />
              <p className="text-center p-3 font-bold text-xs py-2  lg:text-base md:text-base"> Microverse Certification of React & Redux</p>
            </a>
          </div>
          <div className="col m-2 p-1">
            <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/76794366" rel="noreferrer" target="_blank">
              <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/76794366" alt="Javascript certificate" className='border border-gray-300 hover:-translate-y-1 hover:transition-transform' />
              <p className="text-center p-3 font-bold text-xs py-2  lg:text-base md:text-base"> Microverse Certification of Javascript</p>
            </a>
          </div>
      
          <div className="col m-2">
            <a href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/74439943" rel="noreferrer" target="_blank">
              <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/74439943" alt="HTML/CSS certificate"  className='border border-gray-300 hover:-translate-y-1 hover:transition-transform' />
              <p className="text-center p-3 font-bold text-xs py-2 lg:text-base md:text-base"> Microverse Certification of HTML/CSS</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
