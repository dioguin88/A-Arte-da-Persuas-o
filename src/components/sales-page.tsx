import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, CheckCircle, Clock, Lock, Rocket, Sparkles, Star, Swords, XCircle } from "lucide-react";
import { CountdownTimer } from "./countdown-timer";

export function SalesPage() {
  const testimonials = [
    {
      quote: "Consegui uma promoção que esperava há 2 anos. Meu chefe disse que nunca viu tamanha segurança. Esse curso vale ouro.",
      name: "Roberto M.",
      role: "Consultor Empresarial",
    },
    {
      quote: "Dobrei minhas comissões em 30 dias. Aplico as técnicas em toda conversa com cliente. Parece mágica!",
      name: "Paulo L.",
      role: "Corretor de Imóveis",
    },
    {
      quote: "Uso as técnicas nas audiências e em casa. Virei outra pessoa. As pessoas me escutam. Me respeitam.",
      name: "Carla O.",
      role: "Advogada",
    },
  ];

  const features = [
    "Gatilhos Mentais Práticos: como ativar decisões rápidas em qualquer conversa",
    "Leitura de Microexpressões: descubra o que a pessoa está pensando, antes mesmo dela falar",
    "Técnicas de Hipnose Conversacional: como plantar ideias e fazer parecer que foi escolha dela",
    "Scripts prontos para vendas, negociações e relacionamentos",
    "Presença de Autoridade: como entrar em qualquer lugar e ser automaticamente respeitado",
  ];
  
  const bonuses = [
    "Acesso vitalício ao curso completo",
    "50+ técnicas reais de persuasão",
    "Material de apoio e scripts prontos",
    "Certificado de conclusão",
    "Suporte exclusivo por 90 dias",
  ];

  return (
    <div className="fade-in bg-background text-foreground">
      <header className="bg-primary p-3 text-center font-bold text-primary-foreground">
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          <span>ATENÇÃO: VOCÊ TEM ACESSO A ESTA PÁGINA APENAS UMA VEZ!</span>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
        <section className="text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-6xl">A ARTE DA PERSUASÃO</h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">Como fazer qualquer pessoa dizer "sim" para você, sem resistência.</p>
          <div className="mt-8 inline-block rounded-lg border border-accent bg-accent/20 p-4 shadow-lg">
            <p className="flex items-center gap-2 font-bold text-accent-foreground">
              <Sparkles className="h-6 w-6 text-accent" />
              <span>Oferta de Lançamento:</span>
            </p>
            <p className="mt-2 text-4xl font-bold text-primary">Apenas R$ 10,00</p>
            <p className="text-md line-through text-muted-foreground">Depois volta para R$ 497,00</p>
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        <section className="mx-auto max-w-3xl text-center">
            <h2 className="flex items-center justify-center gap-3 font-headline text-3xl font-bold md:text-4xl">
                <XCircle className="h-8 w-8 text-primary" />
                <span>Cansado de ser ignorado?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Você fala... e ninguém ouve. Suas ideias são boas, mas ninguém leva a sério. No trabalho, nas vendas, nos relacionamentos... parece que você sempre fica para trás.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Enquanto isso, pessoas com menos conhecimento, menos preparação e menos intenção conseguem tudo. O segredo? Elas dominam a arte da persuasão.
            </p>
        </section>

        <section className="mt-12 md:mt-20 rounded-xl bg-foreground p-8 text-background shadow-2xl md:p-12">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="flex items-center justify-center gap-3 font-headline text-3xl font-bold text-primary md:text-4xl">
                    <Swords className="h-8 w-8 text-primary" />
                    <span>DOMINE O JOGO MENTAL</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-background/80">
                    "A Arte da Persuasão" é o curso que revela as técnicas reais de influência usadas por líderes, bilionários e grandes negociadores. Sem enrolação. Sem teoria vazia. Tudo direto ao ponto, para aplicar e ter resultado.
                </p>
            </div>
        </section>

        <section className="mt-12 md:mt-20">
          <h2 className="flex items-center justify-center gap-3 text-center font-headline text-3xl font-bold md:text-4xl">
            <CheckCircle className="h-8 w-8 text-foreground" />
            <span>O que você vai aprender:</span>
          </h2>
          <ul className="mx-auto mt-8 max-w-2xl space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-foreground" />
                <span className="text-lg text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <Separator className="my-12 md:my-16" />

        <section>
          <h2 className="flex items-center justify-center gap-3 text-center font-headline text-3xl font-bold md:text-4xl">
            <Star className="h-8 w-8 text-accent" />
            <span>Resultados Reais de Quem Aplicou</span>
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                    <Star className="h-6 w-6 text-accent" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter>
                    <div className="text-sm">
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        <section className="text-center">
            <Card className="border-primary bg-primary/10 shadow-2xl">
                <CardContent className="p-6 md:p-10">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                      ⚡ Aproveite a Oferta de Lançamento ⚡
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">De <span className="line-through">R$ 497,00</span> por apenas</p>
                    <p className="my-4 font-headline text-6xl font-bold text-primary md:text-7xl">R$ 10,00</p>
                    <p className="flex items-center justify-center gap-2 font-bold text-foreground"><Clock className="h-5 w-5" /> Apenas hoje.</p>

                    <div className="my-8">
                        <CountdownTimer />
                    </div>

                    <div className="mx-auto my-8 max-w-md space-y-3 text-left">
                        {bonuses.map((bonus, i) => (
                            <p key={i} className="flex items-center gap-3 text-foreground">
                                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                                <span>{bonus}</span>
                            </p>
                        ))}
                    </div>

                    <p className="my-6 flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-red-100 p-3 font-bold text-red-800">
                      <XCircle className="h-5 w-5" />
                      Se você sair desta página, nunca mais verá esta oferta.
                    </p>

                    <Button size="lg" className="mx-auto h-16 w-full max-w-md text-xl font-bold shadow-lg transition-transform duration-300 hover:scale-105">
                        <Rocket className="mr-3 h-6 w-6" />
                        QUERO DOMINAR A ARTE DA PERSUASÃO POR R$ 10
                    </Button>
                    <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Pagamento 100% seguro</span>
                        <Separator orientation="vertical" className="h-4" />
                        <span>Acesso imediato</span>
                        <Separator orientation="vertical" className="h-4" />
                        <span>Garantia de 7 dias</span>
                    </div>
                </CardContent>
            </Card>
        </section>
      </main>
    </div>
  );
}
