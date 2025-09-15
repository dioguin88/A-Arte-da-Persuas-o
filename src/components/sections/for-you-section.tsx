import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Zap, Heart } from "lucide-react";

const profiles = [
    {
      icon: Users,
      title: "Profissionais e Empreendedores",
      description: "Que desejam vender mais, negociar melhor e liderar com autoridade.",
    },
    {
      icon: Briefcase,
      title: "Pessoas em Início de Carreira",
      description: "Que querem se destacar, apresentar suas ideias com confiança e crescer rapidamente.",
    },
    {
      icon: Zap,
      title: "Qualquer Pessoa Tímida ou Insegura",
      description: "Que sente que não é ouvida e quer finalmente ter sua voz respeitada.",
    },
    {
        icon: Heart,
        title: "Quem Busca Melhores Relacionamentos",
        description: "Que quer melhorar a comunicação com parceiros, amigos e família.",
      },
];

export function ForYouSection() {
    return (
        <section>
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-2">
              Para Quem é Este Método?
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
              Se você se identificou com qualquer um dos perfis abaixo, este método é o atalho que faltava para sua transformação.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
                {profiles.map((profile, index) => (
                    <Card key={index} className="bg-muted/30">
                        <CardHeader className="flex flex-row items-center gap-4 pb-4">
                            <profile.icon className="h-8 w-8 text-primary" />
                            <CardTitle className="text-xl">{profile.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{profile.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
