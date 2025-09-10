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
      <head />
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
