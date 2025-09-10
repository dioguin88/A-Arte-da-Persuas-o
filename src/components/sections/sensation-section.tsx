import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function SensationSection() {
    return (
        <section className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
              Imagine a Sensação...
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                ...de entrar em qualquer ambiente e ser notado. De apresentar uma ideia e ver todos concordando. De ter o poder de influenciar decisões e inspirar pessoas.
            </p>
            <Card className="mt-8 bg-primary/10 border-primary shadow-lg">
                <CardContent className="p-6">
                    <div className="flex items-center justify-center gap-4">
                        <Sparkles className="h-8 w-8 text-primary" />
                        <p className="text-lg font-semibold text-foreground">
                            Essa não é uma habilidade mágica. É uma ciência que pode ser aprendida.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
