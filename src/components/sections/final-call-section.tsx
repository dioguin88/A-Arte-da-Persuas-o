import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

interface FinalCallSectionProps {
    checkoutUrl: string;
}

export function FinalCallSection({ checkoutUrl }: FinalCallSectionProps) {

    return (
        <section className="text-center">
            <Card className="border-primary border-2 bg-card shadow-2xl">
                <CardContent className="p-8 md:p-10">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl flex items-center justify-center gap-2">
                      <Zap className="h-8 w-8" />
                      Decida Antes Que o Relógio Zere
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">⏰ Essa condição especial vai desaparecer em minutos. Se você sair, perde o direito de retorno com esse valor.</p>
                    <Button 
                      size="lg"
                      className="mt-8 h-auto w-full max-w-lg whitespace-normal py-4 text-xl font-bold shadow-lg shadow-primary/50 transition-all duration-300 hover:scale-105 animate-pulse-light"
                      asChild
                    >
                      <a href={checkoutUrl}>
                        🔥 Sim, quero o poder da persuasão agora!
                      </a>
                    </Button>
                </CardContent>
            </Card>
        </section>
    )
}
