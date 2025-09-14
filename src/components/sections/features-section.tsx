import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const newFeatures = [
    { text: "Aprenda os ", bold: "3 gatilhos mentais secretos", postText: " usados por políticos, gurus e coaches para controlar multidões." },
    { text: "Descubra como criar ", bold: "mensagens magnéticas", postText: " que capturam atenção instantaneamente." },
    { text: "Treine sua mente para detectar ", bold: "sinais invisíveis de manipulação", postText: " em qualquer conversa." },
    { text: "Use a ", bold: "linguagem estratégica", postText: " para influenciar decisões e dominar negociações." },
    { text: "Ative os ", bold: "poderes da persuasão subconsciente", postText: " para transformar sua presença em autoridade." },
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
            <div className="mt-8 max-w-3xl mx-auto">
                <Card className="bg-card shadow-lg">
                    <CardContent className="p-8">
                        <ul className="space-y-4 text-left">
                            {newFeatures.map((feature, i) => (
                                <li key={i} className="flex items-start gap-4 text-lg">
                                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span>
                                        {feature.text}<strong>{feature.bold}</strong>{feature.postText}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
