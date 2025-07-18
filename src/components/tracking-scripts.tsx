"use client";

import Script from 'next/script';
import { useEffect } from 'react';

export function TrackingScripts() {

  useEffect(() => {
    // This effect ensures the custom PageView is fired after the component mounts
    // and the fbq function is likely available.
    const timer = setTimeout(() => {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'PageView', {
          content_name: 'A Arte da Persuasão',
          content_ids: ['curso_001'],
          content_type: 'product',
          value: 10.00,
          currency: 'BRL',
          event_id: 'pageview-' + Date.now()
        });
      }
    }, 1000); // Delay to ensure pixel script has loaded

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* UTMify Capture Script */}
      <Script
        id="utmify-capture-script"
        src="https://app.utmify.com/script/utmify.js"
        strategy="afterInteractive"
      />

      {/* UTMify Pixel - This script also initializes the base FB Pixel */}
      <Script id="utmify-pixel-and-fb-base" strategy="afterInteractive">
        {`
          (function() {
            if (typeof window === 'undefined') return;
            
            // UTMify Pixel Setup
            window.pixelId = "686f29ebbe2fa26ad7a5b442";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);

            // Base Facebook Pixel
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1391493778737024');
            // The PageView is now fired via the useEffect hook with more data
            // fbq('track', 'PageView');
          })();
        `}
      </Script>
      
      <noscript>
        <img height="1" width="1" style={{display: "none"}}
          src="https://www.facebook.com/tr?id=1391493778737024&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
}
