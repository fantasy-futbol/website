'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { APP_STORE_URL } from '@/lib/links';

export default function Navbar() {
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    const onScroll = () => setBlurred(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        blurred
          ? 'bg-[#1E1E1E]/95 md:bg-[#1E1E1E]/80 md:backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold">Fantasy Fútbol</div>
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/knowledge-hub"
            className="text-[#828282] hover:text-white transition-colors text-sm font-medium"
          >
            Learn the Game
          </Link>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00FF87] text-[#1E1E1E] px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-[#00FF87]/90 transition-colors text-sm md:text-base"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}
