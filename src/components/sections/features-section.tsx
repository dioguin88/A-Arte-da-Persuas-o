import { BrainCircuit, Eye, Files, UserCheck } from "lucide-react";

const features = [
    { 
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: "Gatilhos mentais de decisão instantânea",
      description: "Você fecha acordos na hora."
    },
    { 
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Leitura de expressões",
      description: "Você entende o que o outro quer antes dele falar."
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 12c-3 0-6 2.5-6 2.5V17s3-2.5 6-2.5 6 2.5 6 2.5v-2.5S15 12 12 12Z"/><path d="M12 12c-3 0-6-2.5-6-2.5V7s3 2.5 6 2.5 6-2.5 6-2.5v2.5S15 12 12 12Z"/><path d="M12 12c-3 0-6-2.5-6-2.5V2s3 2.5 6 2.5 6-2.5 6-2.5v2.5S15 12 12 12Z"/></svg>,
      title: "Hipnose conversacional",
      description: "Você vira o “influenciador secreto”."
    },
    { 
      icon: <Files className="h-8 w-8 text-primary" />,
      title: "Scripts prontos",
      description: "Copie e cole para vender, negociar, conquistar."
    },
    { 
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Presença de autoridade",
      description: "Você entra nos lugares e é naturalmente respeitado."
    },
];

export function FeaturesSection() {
    return (
        <section>
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
            O Arsenal de Influência que Você Vai Dominar
            </h2>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-card hover:shadow-xl hover:-translate-y-1">
                <div className="flex-shrink-0 transition-transform group-hover:scale-110">{feature.icon}</div>
                <div>
                    <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                </div>
                </div>
            ))}
            </div>
        </section>
    )
}
