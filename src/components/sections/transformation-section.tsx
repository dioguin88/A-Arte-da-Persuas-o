
import { CheckCircle } from "lucide-react";

const transformations = [
    { text: "Se posicionar como ", bold: "autoridade natural", postText: " em qualquer ambiente sem esforço ou arrogância." },
    { text: "Influenciar pessoas ", bold: "de forma sutil e estratégica", postText: ", até mesmo em conversas comuns." },
    { text: "Criar ", bold: "comunicações magnéticas", postText: " que capturam atenção e geram respeito imediato." },
    { text: "Tomar decisões com ", bold: "clareza mental", postText: ", sem ser afetado por manipulações externas." },
    { text: "Usar sua ", bold: "presença e linguagem", postText: " para conquistar mais espaço, oportunidades e reconhecimento." },
];

export function TransformationSection() {
    return (
        <section className="py-12 text-foreground">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl mb-8">
                    📈 Após o Curso, Você Será Capaz de...
                </h2>
                <ul className="space-y-4 text-left text-lg md:text-xl">
                    {transformations.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                            <span>
                                {item.text}<strong>{item.bold}</strong>{item.postText || ''}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
