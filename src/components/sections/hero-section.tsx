
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import placeholderImages from '@/lib/placeholder-images.json';

export function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="text-center md:text-left">
                    <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl lg:text-6xl fade-in">
                    ⚠️ Descubra em 7 minutos por que VOCÊ está sendo manipulado todos os dias e como virar o jogo com técnicas secretas de persuasão mental.
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl fade-in" style={{ animationDelay: '0.2s', fontSize: '1.125rem' }}>
                    Aperte o play no vídeo acima e inicie sua transformação agora.
                    </p>
                </div>

                <div className="fade-in flex flex-col items-center gap-4" style={{ animationDelay: '0.4s'}}>
                    <div className="overflow-hidden rounded-lg border-2 border-primary shadow-2xl shadow-primary/20">
                        <Image
                            priority
                            src={placeholderImages.productCover.src}
                            alt={placeholderImages.productCover.alt}
                            width={600}
                            height={400}
                        />
                    </div>
                    <Card className="w-full max-w-sm bg-green-500/10 border-green-500">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                                <p className="text-sm font-medium text-foreground">
                                    <strong>Boa notícia:</strong> A técnica revelada no vídeo é simples, ética e pode ser aplicada por qualquer pessoa.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
