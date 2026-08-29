'use client';

import { useEffect, useRef } from 'react';

export default function AdSenseUnit({ slot, style = { display: 'block' }, format = 'auto', responsive = 'true' }) {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (adRef.current && !adRef.current.getAttribute('data-ad-status')) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error', err);
    }
  }, []);

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-800/50 border border-dashed border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden flex flex-col items-center justify-center min-h-[250px] relative">
      {/* 
        This is the actual AdSense code block.
        Replace data-ad-client and data-ad-slot with actual IDs when moving to production.
      */}
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-0000000000000000" // Replace with actual Publisher ID
        data-ad-slot={slot || "1234567890"}      // Replace with actual Ad Slot ID
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />

      {/* Fallback placeholder (visible during dev when adsbygoogle script isn't loaded) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 -z-10 text-center px-4">
        <svg className="w-8 h-8 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-sm font-medium">Advertisement</span>
        <span className="text-xs mt-1 opacity-70">Supports ErrorDocs</span>
      </div>
    </div>
  );
}
