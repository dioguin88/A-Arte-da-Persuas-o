import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: 'Oferta Exclusiva: Pare de Ser Ignorado',
  description: 'Descubra a técnica que líderes e bilionários usam para fazer qualquer um dizer ‘sim’ – mesmo sem perceber.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://cdn.utmify.com.br" />
        <link rel="preconnect" href="https://fast.wistia.com" />
        <link rel="preconnect" href="https://tracking.utmify.com.br" />
        <Script id="utmify-pixel-config" strategy="afterInteractive">
          {`
            window.pixelId = "686f29ebbe2fa26ad7a5b442";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
        <Script
          id="utmify-utms"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
          async
          defer
        ></Script>
      </head>
      <body className={cn("font-body antialiased", inter.variable, poppins.variable)}>
        {children}
        <Toaster />
        <Script id="utm-handler" strategy="lazyOnload">
          {`
            function getUTMs() {
              const urlParams = new URLSearchParams(window.location.search);
              for (const key of urlParams.keys()) {
                if (key.startsWith('utm_')) {
                  localStorage.setItem(key, urlParams.get(key));
                }
              }
            }

            function applyUTMsToLinks() {
              const buttons = document.querySelectorAll('[data-checkout="true"]');
              const utms = {};
              for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('utm_')) {
                  utms[key] = localStorage.getItem(key);
                }
              }
              const queryString = new URLSearchParams(utms).toString();

              buttons.forEach(button => {
                const baseUrl = button.getAttribute('href').split('?')[0];
                if (queryString) {
                  button.setAttribute('href', \`\${baseUrl}?\${queryString}\`);
                } else {
                  button.setAttribute('href', baseUrl);
                }
              });
            }

            document.addEventListener('DOMContentLoaded', () => {
              getUTMs();
              applyUTMsToLinks();
              
              const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  if (mutation.addedNodes.length) {
                    applyUTMsToLinks();
                  }
                });
              });
              observer.observe(document.body, { childList: true, subtree: true });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
