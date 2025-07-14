"use client";

import Script from 'next/script';
import { useEffect } from 'react';

// This is a global declaration to avoid TypeScript errors for the Wistia player API.
declare global {
  interface Window {
    _wq: any[];
    Wistia: any;
  }
}

interface WistiaPlayerProps {
  videoId: string;
}

export function WistiaPlayer({ videoId }: WistiaPlayerProps) {
  // Use a unique ID for the player container to avoid conflicts.
  const containerId = `wistia-player-container-${videoId}`;

  useEffect(() => {
    // Initialize the player when the component mounts and the Wistia API is available.
    window._wq = window._wq || [];
    window._wq.push({
      id: videoId,
      onReady: (video: any) => {
        // You can add any custom logic here when the video is ready.
        // For example: video.play();
      },
    });
  }, [videoId]);

  return (
    <>
      {/* Load Wistia's E-v1 player script */}
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />
      
      {/* 
        This is the Wistia player embed code.
        The `wistia_async_${videoId}` class is the standard way for the script to find and replace this div
        with the actual video player. The `seo=false` is important for VSLs to prevent video content
        from being indexed separately from the page.
      */}
      <div id={containerId} className="w-full">
        <div
          className={`wistia_async_${videoId} seo=false videoFoam=true`}
          style={{ height: '100%', position: 'relative', width: '100%' }}
        >
          <div
            className="wistia_swatch"
            style={{
              height: '100%',
              left: 0,
              opacity: 0,
              overflow: 'hidden',
              position: 'absolute',
              top: 0,
              transition: 'opacity 200ms',
              width: '100%',
            }}
          >
            {/* The image is a placeholder that shows while the video loads. */}
            <img
              src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
              style={{
                filter: 'blur(5px)',
                height: '100%',
                objectFit: 'contain',
                width: '100%',
              }}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </>
  );
}
