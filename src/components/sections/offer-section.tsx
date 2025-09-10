import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface OfferSectionProps {
    testCheckoutUrl: string;
    proCheckoutUrl: string;
}

const testFeatures = [
    "Acesso ao Módulo 1 completo",
    "Técnicas iniciais de persuasão + leitura de expressão",
    "Garantia de 3 dias",
];

const proFeatures = [
    "Programa completo com todos os módulos",
    "Scripts prontos para influenciar, vender e negociar",
    "Técnicas de hipnose conversacional e presença de autoridade",
    "Suporte VIP por 90 dias",
    "Acesso Vitalício com todas as atualizações",
    "Garantia total de 7 dias",
];

export function OfferSection({ testCheckoutUrl, proCheckoutUrl }: OfferSectionProps) {
    return (
        <section id="offer" className="scroll-mt-20 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Escolha o Seu Acesso
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
                {/* Test Offer */}
                <Card className="flex flex-col border-2 bg-card shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">🔹 Acesso TESTE</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col justify-between">
                        <div>
                            <p className="mb-6 font-headline text-4xl font-bold">R$19,90</p>
                            <ul className="space-y-3 text-left">
                                {testFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button asChild size="lg" className="mt-8 w-full">
                            <a href={testCheckoutUrl}>Quero testar agora por R$19,90</a>
                        </Button>
                    </CardContent>
                </Card>

                {/* Pro Offer */}
                <Card className="flex flex-col border-2 border-amber-500 bg-amber-500/10 shadow-2xl ring-4 ring-amber-500/50">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-amber-400">👑 Acesso PRO</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col justify-between">
                        <div>
                            <div className="mb-6">
                                <span className="text-lg text-muted-foreground line-through">De R$297</span>
                                <p className="font-headline text-5xl font-bold text-primary">por R$29,90</p>
                            </div>
                            <ul className="space-y-3 text-left">
                                {proFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 font-medium">
                                        <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button asChild size="lg" className="mt-8 w-full animate-pulse-light">
                            <a href={proCheckoutUrl}>Quero dominar a persuasão por R$29,90</a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
