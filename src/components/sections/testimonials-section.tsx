import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
      quote: "Nunca consegui convencer meus clientes como agora. O curso vale 100x o que paguei.",
      name: "Fernanda M.",
    },
    {
      quote: "Eu era invisível nas reuniões. Agora sou líder de projeto. Mudou meu jogo.",
      name: "Ricardo A.",
    },
    {
      quote: "Consegui negociar um aumento de 30% no meu salário. Estou sem palavras.",
      name: "Juliana C.",
    },
];

export function TestimonialsSection() {
    return (
        <section>
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
            O Que Dizem Nossos Alunos
          </h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                  <Card key={index} className="flex flex-col justify-between p-6 shadow-xl bg-muted/30">
                      <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
                      <div className="font-bold text-foreground text-right">- {testimonial.name}</div>
                  </Card>
              ))}
          </div>
        </section>
    )
}
