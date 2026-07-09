import { email } from '@/static/links';
import React from 'react';

export default function Links() {
  return (
    <div className="mx-3">
      <a href={email} className="mx-1 text-sm hover:underline">Gmail</a>
      <a href="/images" className="mx-1 text-sm hover:underline">Images</a>
    </div>
  );
}
