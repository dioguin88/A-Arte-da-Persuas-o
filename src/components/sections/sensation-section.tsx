import { Card } from "@/components/ui/card";
import { ThumbsUp, TrendingUp, Sparkles } from "lucide-react";

const futureSensations = [
    {
        icon: <ThumbsUp className="h-10 w-10 text-accent" />,
        text: "As pessoas finalmente ouvindo com atenção quando você fala.",
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-accent" />,
        text: "Ganhando respeito onde antes era ignorado e sendo promovido.",
    },
    {
        icon: <Sparkles className="h-10 w-10 text-accent" />,
        text: "Influenciando sem esforço — como um mestre invisível.",
    }
]

export function SensationSection() {
    return (
        <section>
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
                Você Vai Sentir Isso na Pele...
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
                {futureSensations.map((sensation, index) => (
                    <Card key={index} className="text-center p-6 transform transition-all hover:scale-105 hover:-rotate-2 shadow-xl">
                        <div className="flex justify-center mb-4">{sensation.icon}</div>
                        <p className="text-lg font-medium text-foreground">{sensation.text}</p>
                    </Card>
                ))}
            </div>
        </section>
    )
}
