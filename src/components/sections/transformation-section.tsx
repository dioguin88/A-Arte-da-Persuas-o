
import { CheckCircle } from "lucide-react";

const transformations = [
    { text: "Fazer pessoas dizerem ", bold: "sim com facilidade" },
    { text: "Influenciar decisões ", bold: "sem parecer forçado" },
    { text: "Criar ", bold: "comunicações magnéticas", postText: " que capturam atenção" },
    { text: "Ter vantagem em ", bold: "negociações, vendas e relacionamentos" },
];

export function TransformationSection() {
    return (
        <section className="py-12 text-foreground">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl mb-8">
                    📈 Após o curso, você será capaz de…
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
