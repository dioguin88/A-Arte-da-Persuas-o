"use client";

import { useState } from "react";
import { WistiaPlayer } from "@/components/wistia-player";
import Image from "next/image";
import { Tv, PlayCircle } from "lucide-react";

export function VideoSection() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section id="vsl" className="scroll-mt-20 text-center">
            <h2 className="flex items-center justify-center gap-3 text-center font-headline text-3xl font-bold md:text-4xl">
              <Tv className="h-8 w-8 text-accent" />
              <span>Assista Antes Que Essa Página Expire</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Em menos de 3 minutos, você vai entender por que a maioria das pessoas <strong>nunca aprende a ser respeitada</strong> — e como mudar isso agora.</p>
            <div className="mt-8 mx-auto max-w-3xl rounded-lg shadow-2xl overflow-hidden border-2 border-primary">
              {showVideo ? (
                  <WistiaPlayer videoId="h8f6dbxoam" />
              ) : (
                <div className="relative cursor-pointer" onClick={() => setShowVideo(true)}>
                  <Image
                    src="https://i.postimg.cc/QN6jJ0TZ/Chat-GPT-Image-15-de-jul-de-2025-17-05-29.webp"
                    alt="Assista ao vídeo sobre a arte da persuasão"
                    width={1280}
                    height={720}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <PlayCircle className="w-16 h-16 text-white/80 transition-all hover:text-white hover:scale-110 md:w-20 md:h-20" />
                  </div>
                </div>
              )}
            </div>
        </section>
    )
}
