import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Poppins, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { TrackingScripts } from '@/components/tracking-scripts';

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

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-playfair',
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
        <link rel="preload" href="https://i.postimg.cc/d0S979jG/Untitled-design-5.webp" as="image" />
        <link
          rel="preload"
          href="/_next/static/media/c9a5985854617556-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cn("font-body antialiased", inter.variable, poppins.variable, playfair.variable)}>
        <div className="bg-background/80 backdrop-blur-sm">
            {children}
        </div>
        <Toaster />
        <TrackingScripts />
      </body>
    </html>
  );
}
