"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CountdownTimer } from "@/components/countdown-timer";
import { Separator } from "@/components/ui/separator";
import { ShieldAlert, CircleAlert, Lock } from "lucide-react";

interface FinalCallSectionProps {
    isExpired: boolean;
    onTimerEnd: () => void;
    checkoutUrl: string;
}

export function FinalCallSection({ isExpired, onTimerEnd, checkoutUrl }: FinalCallSectionProps) {
    const [fakeIp, setFakeIp] = useState("");

    useEffect(() => {
        // Generate a fake IP on client-side to avoid hydration mismatch
        const octet1 = Math.floor(Math.random() * (255 - 100) + 100);
        const octet2 = Math.floor(Math.random() * 256);
        const octet3 = Math.floor(Math.random() * 256);
        const octet4 = Math.floor(Math.random() * 256);
        setFakeIp(`${octet1}.${octet2}.${octet3}.${octet4}`);
    }, []);

    return (
        <section className="text-center">
            <Card className="border-primary border-2 bg-primary/10 shadow-2xl">
                <CardContent className="p-6 md:p-10">
                    {fakeIp && (
                        <p className="mb-4 flex items-center justify-center gap-2 rounded-lg border border-foreground/20 bg-background/50 p-2 text-xs md:text-sm font-semibold text-muted-foreground">
                            <ShieldAlert className="h-4 w-4 text-primary" />
                            <span>Esta oferta foi liberada para o IP: {fakeIp}</span>
                        </p>
                    )}
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                      Sua última chance está acabando
                    </h2>
                    <p className="mt-2 text-muted-foreground">Após o fim do tempo, o preço volta a <span className="font-bold text-foreground">R$ 497,00.</span></p>

                    <div className="my-8">
                        <CountdownTimer onTimerEnd={onTimerEnd} isExpired={isExpired} />
                    </div>

                    <div className="my-8">
                        <Image
                          src="https://i.postimg.cc/g0LsD9W7/20250618-1223-A-Arte-da-Persuas-o-simple-compose-01jy24dt4teq8rqdy1zxakz5ra.webp"
                          alt="Capa do produto A Arte da Persuasão"
                          width={300}
                          height={180}
                          className="rounded-lg shadow-xl mx-auto mb-6 transform hover:scale-105 transition-transform"
                        />
                    </div>
                    
                    {isExpired && (
                        <p className="my-6 flex animate-pulse items-center justify-center gap-2 rounded-lg border border-red-300 bg-red-100 p-3 font-bold text-red-800">
                          <CircleAlert className="h-5 w-5" />
                          O TEMPO ESGOTOU! A oferta não está mais disponível.
                        </p>
                    )}

                    <Button 
                      size="lg"
                      className="h-auto w-full max-w-lg whitespace-normal py-4 text-xl font-bold shadow-lg shadow-primary/50 transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-70"
                      disabled={isExpired}
                      asChild
                    >
                      <a href={isExpired ? "#" : checkoutUrl} data-checkout="true">
                        <span className="animate-pulse mr-2">🔥</span>
                        {isExpired ? "OFERTA ESGOTADA" : "SIM, EU QUERO PARAR DE SER IGNORADO – POR R$10"}
                      </a>
                    </Button>
                    {!isExpired && (
                       <p className="mt-2 text-sm text-muted-foreground">
                        ⏳ Liberar meu acesso antes que acabe!
                       </p>
                    )}
                    <div className="mt-4 flex flex-col items-center justify-center gap-2 text-xs text-muted-foreground md:flex-row md:gap-4">
                        <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Pagamento 100% seguro</span>
                        <Separator orientation="vertical" className="hidden h-4 md:block" />
                        <span>Acesso imediato</span>
                        <Separator orientation="vertical" className="hidden h-4 md:block" />
                        <span>Garantia de 7 dias</span>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
