'use client';

import { useState } from 'react';
import { DEMO_VIDEO_EMBED_URL, DEMO_VIDEO_THUMBNAIL_URL } from '@/lib/links';

// Thumbnail facade: the YouTube player (~1.3MB of JS) only loads on tap.
export default function VideoFacade() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`${DEMO_VIDEO_EMBED_URL}?autoplay=1&playsinline=1`}
        title="Fantasy Fútbol app demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-full h-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Play the Fantasy Fútbol app demo"
      className="group absolute inset-0 w-full h-full cursor-pointer"
    >
      <img
        src={DEMO_VIDEO_THUMBNAIL_URL}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00FF87] text-[#1E1E1E] shadow-lg shadow-black/40 transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 translate-x-0.5" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
