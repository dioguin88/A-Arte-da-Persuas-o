import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
      quote: "Nunca consegui convencer meus clientes como agora. O curso vale 100x o que paguei.",
      name: "Fernanda M.",
      avatar: "https://i.postimg.cc/85hZwywy/fernanda.png"
    },
    {
      quote: "Eu era invisível nas reuniões. Agora sou líder de projeto. Mudou meu jogo.",
      name: "Ricardo A.",
      avatar: "https://i.postimg.cc/T3N3PNA8/ricardo.png"
    },
    {
      quote: "Consegui negociar um aumento de 30% no meu salário. Estou sem palavras.",
      name: "Juliana C.",
      avatar: "https://i.postimg.cc/TydpL1MM/juliana.png"
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
                      <CardContent className="p-0">
                        <p className="text-foreground italic mb-6">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="font-bold text-foreground">- {testimonial.name}</div>
                        </div>
                      </CardContent>
                  </Card>
              ))}
          </div>
        </section>
    )
}
