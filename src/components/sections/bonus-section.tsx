import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";

const bonuses = [
    "Mini curso de Comunicação Assertiva",
    "Guia prático de Gatilhos Mentais Avançados",
    "Plantão de dúvidas com o especialista Renato Miranda",
]

export function BonusSection() {
    return (
        <section className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Bônus Exclusivos no Acesso PRO
            </h2>
            <div className="mt-8 max-w-2xl mx-auto">
                <Card className="bg-card shadow-xl">
                    <CardContent className="p-6">
                        <ul className="space-y-4 text-left">
                           {bonuses.map((bonus, i) => (
                             <li key={i} className="flex items-center gap-4 text-lg">
                                <Gift className="h-6 w-6 text-accent flex-shrink-0" />
                                <span>{bonus}</span>
                             </li>
                           ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
