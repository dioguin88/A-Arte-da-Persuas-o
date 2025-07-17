import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert, BadgeCheck, ShieldCheck, Lock } from "lucide-react";
import Image from "next/image";

interface OfferSectionProps {
    isExpired: boolean;
    checkoutUrl: string;
}

export function OfferSection({ isExpired, checkoutUrl }: OfferSectionProps) {
    return (
        <section id="offer" className="scroll-mt-20 text-center">
            <Card className="relative overflow-hidden border-2 border-primary bg-card shadow-2xl transform rotate-1">
                <div className="absolute -top-4 -right-4 z-10 animate-pulse rounded-full bg-primary p-3 text-primary-foreground shadow-lg">
                    <ShieldAlert className="h-8 w-8" />
                </div>
                <CardContent className="p-6 md:p-10">
                    <Image
                      src="https://i.postimg.cc/d0S979jG/Untitled-design-5.webp"
                      alt="Capa do produto A Arte da Persuasão"
                      width={400}
                      height={400}
                      className="rounded-lg shadow-xl mx-auto mb-6 transform hover:scale-105 transition-transform"
                    />
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                        A Oferta que Você Não Pode Ignorar
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">Valor real comprovado por dezenas de alunos. Garantia de 7 dias. Você só perde se NÃO testar.</p>
                    
                    <div className="my-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                        <div className="rounded-xl border-2 border-dashed border-red-500 bg-red-500/10 p-6 text-center text-red-500 line-through decoration-2 transform -rotate-3">
                            <span className="text-sm font-semibold uppercase">De</span>
                            <p className="font-headline text-5xl font-bold">R$497</p>
                        </div>
                        <div className="rounded-xl border-2 border-green-500 bg-green-500/10 p-8 text-center text-green-600 shadow-lg transform rotate-3">
                             <span className="text-sm font-semibold uppercase">Por Apenas</span>
                            <p className="font-headline text-7xl font-bold">R$10</p>
                        </div>
                    </div>
                    
                    <p className="font-bold text-foreground">Acesso imediato, só hoje e só nesta página.</p>

                    <Button 
                      size="lg"
                      className="mt-8 h-auto w-full max-w-lg whitespace-normal py-4 text-xl font-bold shadow-lg shadow-primary/50 transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-70 animate-pulse-light"
                      disabled={isExpired}
                      asChild
                    >
                      <a href={isExpired ? "#" : checkoutUrl} data-checkout="true">
                        <span className="animate-pulse mr-2">🔥</span>
                        {isExpired ? "OFERTA ESGOTADA" : "SIM, EU QUERO PARAR DE SER IGNORADO – POR R$10"}
                      </a>
                    </Button>
                    {!isExpired && (
                        <div className="mt-4 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground sm:flex-row">
                            <div className="flex items-center gap-2">
                                <Lock className="h-4 w-4 text-green-500" />
                                <span>Compra Protegida</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-green-500" />
                                <span>Pagamento 100% Seguro</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BadgeCheck className="h-5 w-5 text-green-500" />
                                <span>Garantia de 7 Dias</span>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </section>
    )
}
