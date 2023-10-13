import React from 'react';
import Input from '../Home/Input';
import Icon from '../Others/icon';
import Links from '../Others/Links';
import Profile from '../Others/Profile';

export default function SearchNavbar() {
  return (
    <nav className="flex justify-between p-3 pt-10">
      <div className="flex items-center w-3/4">
        <a href="/" className="w-1/4">
          <h1 className=" lg:text-2xl
         font-medium tracking-tighter text-center "
          >
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-600">l</span>
            <span className="text-red-500">e</span>
            <span> </span>
            <span className="text-blue-500">m</span>
            <span className="text-red-500">e</span>

          </h1>
        </a>

        <Input />
      </div>
      <div className="flex items-center">
        <Icon />
        <div className="hidden lg:block">
          <Links />
        </div>
        <Profile />
      </div>
    </nav>

  );
}
