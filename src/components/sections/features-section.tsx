import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const features = [
    "Módulos práticos e diretos ao ponto, sem enrolação.",
    "Scripts de conversação para usar em qualquer situação.",
    "Análise de linguagem corporal para ler as pessoas.",
    "Técnicas de Storytelling para criar conexões emocionais.",
    "Exercícios práticos para desenvolver sua confiança e presença."
]

export function FeaturesSection() {
    return (
        <section className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              O Que Você Encontrará no Curso
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Um arsenal completo de técnicas e ferramentas para transformar sua comunicação e influência.
            </p>
            <div className="mt-8 max-w-2xl mx-auto">
                <Card className="bg-card shadow-lg">
                    <CardContent className="p-8">
                        <ul className="space-y-4 text-left">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg">
                                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
