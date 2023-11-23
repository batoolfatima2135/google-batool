import React from 'react';
import Topbar from './Topbar';
import SearchNavbar from './SearchNavbar';

export default function Header() {
  return (
    <header>
      <SearchNavbar />
      <div className="border border-t-0 border-gray-300 p-2">
        <Topbar />
      </div>
    </header>

  );
}
