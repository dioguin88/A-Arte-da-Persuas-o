"use client";

import { WistiaPlayer } from "@/components/wistia-player";

interface VideoSectionProps {
  videoId: string;
}

export default function VideoSection({ videoId }: VideoSectionProps) {
  return (
    <section>
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
            Veja a Técnica em Ação
        </h2>
        <div className="overflow-hidden rounded-lg border-2 border-primary shadow-2xl shadow-primary/20">
            <WistiaPlayer videoId={videoId} />
        </div>
    </section>
  );
}
