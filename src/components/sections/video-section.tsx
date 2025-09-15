"use client";

import { WistiaPlayer } from "@/components/wistia-player";

interface VideoSectionProps {
  videoId: string;
}

export default function VideoSection({ videoId }: VideoSectionProps) {
  return (
    <section>
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
            A Demonstração Prática do Poder que Você Está Prestes a Ter
        </h2>
        <div className="overflow-hidden rounded-lg border-2 border-primary shadow-2xl shadow-primary/20">
            <WistiaPlayer videoId={videoId} />
        </div>
        <p className="mt-4 text-center text-lg font-semibold text-accent">
            ⚠️ Assista até o final, este vídeo sairá do ar em breve.
        </p>
    </section>
  );
}
