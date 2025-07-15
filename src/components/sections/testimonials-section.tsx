import { Card } from "@/components/ui/card";
import { UserCheck, Quote, Star } from "lucide-react";

const testimonials = [
    {
      quote: "Nunca consegui convencer meus clientes como agora. O curso vale 100x o que paguei. Fechei um contrato de 15 mil usando só o módulo 1.",
      name: "Fernanda M.",
      role: "Consultora de Vendas",
    },
    {
      quote: "Eu era invisível nas reuniões. Depois de aplicar as técnicas de presença, fui convidado pra liderar um projeto. Mudou meu jogo.",
      name: "Ricardo Alves",
      role: "Desenvolvedor Sênior",
    },
    {
      quote: "O material sobre gatilhos mentais é ouro puro. Consegui negociar um aumento de 30% no meu salário. Estou sem palavras.",
      name: "Juliana Costa",
      role: "Gerente de Projetos",
    },
];

export function TestimonialsSection() {
    return (
        <section>
          <h2 className="flex items-center justify-center gap-3 text-center font-headline text-3xl font-bold md:text-4xl">
            <UserCheck className="h-8 w-8 text-accent" />
            <span>Resultados Reais, Pessoas Reais</span>
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                  <Card key={index} className="flex flex-col justify-between p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-rotate-2 bg-muted/30">
                      <div>
                          <Quote className="h-8 w-8 text-primary/50 mb-4" />
                          <p className="text-foreground italic mb-6">"{testimonial.quote}"</p>
                      </div>
                      <div>
                          <div className="flex items-center gap-2">
                              <div className="font-bold text-foreground">{testimonial.name}</div>
                              <div className="text-sm text-muted-foreground">- {testimonial.role}</div>
                          </div>
                          <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-accent fill-accent" />)}
                          </div>
                      </div>
                  </Card>
              ))}
          </div>
        </section>
    )
}
