import React from 'react';
import Icon from '../Others/icon';
import Links from '../Others/Links';
import Profile from '../Others/Profile';

export default function Navbar() {
  return (
    <nav className="p-3.5 flex items-center justify-end">
      <Icon />
      <Links />
      <Profile />
    </nav>
  );
}
