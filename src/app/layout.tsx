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
      </head>
      <body className={cn("font-body antialiased", inter.variable, poppins.variable)}>
        {children}
        <Toaster />
        <Script id="utm-handler" strategy="afterInteractive">
          {`
            (function () {
              const params = new URLSearchParams(window.location.search);
              const utms = [
                'utm_source',
                'utm_campaign',
                'utm_medium',
                'utm_content',
                'utm_term'
              ];

              utms.forEach(key => {
                const value = params.get(key);
                if (value) {
                  localStorage.setItem(key, value);
                }
              });
            })();

            document.addEventListener("DOMContentLoaded", function () {
              const utms = [
                'utm_source',
                'utm_campaign',
                'utm_medium',
                'utm_content',
                'utm_term'
              ];

              const query = utms
                .map(k => {
                  const val = localStorage.getItem(k);
                  return val ? \`\${k}=\${encodeURIComponent(val)}\` : '';
                })
                .filter(Boolean)
                .join('&');

              if (query) {
                document.querySelectorAll('[data-checkout="true"]').forEach(link => {
                  const base = link.getAttribute("href").split("?")[0];
                  link.setAttribute("href", \`\${base}?\${query}\`);
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
