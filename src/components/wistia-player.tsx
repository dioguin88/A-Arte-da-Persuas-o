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
    useEffect(() => {
        window._wq = window._wq || [];
        window._wq.push({
            id: '_all',
            onReady: function(video: any) {
                // You can add any custom logic here when any video is ready.
            }
        });
    }, []);

  return (
    <>
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />
      <div className="wistia_responsive_padding" style={{padding: "56.25% 0 0 0", position: "relative"}}>
        <div className="wistia_responsive_wrapper" style={{height: "100%", left: 0, position: "absolute", top: 0, width: "100%"}}>
          <div className={`wistia_embed wistia_async_${videoId} seo=false videoFoam=true`} style={{height: "100%", position: "relative", width: "100%"}}>
            <div className="wistia_swatch" style={{height: "100%", left: 0, opacity: 0, overflow: "hidden", position: "absolute", top: 0, transition: "opacity 200ms", width: "100%"}}>
              <img src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`} style={{filter: "blur(5px)", height: "100%", objectFit: "contain", width: "100%"}} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
