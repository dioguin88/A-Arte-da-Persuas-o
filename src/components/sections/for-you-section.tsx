import { Card } from "@/components/ui/card";
import { Check, Compass } from "lucide-react";

const forYouItems = [
    "Você já perdeu oportunidades por não saber se expressar.",
    "As pessoas ignoram suas ideias, mesmo quando são boas.",
    "Você quer influenciar sem precisar gritar, pedir ou convencer à força.",
];
  
export function ForYouSection() {
    return (
        <section>
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-2">
              <Compass className="inline-block h-8 w-8 mr-2 text-accent" />
              Este curso é para você se...
          </h2>
          <p className="text-center text-muted-foreground mb-8">Você se identifica com pelo menos uma destas situações.</p>
          <div className="grid gap-4 max-w-2xl mx-auto">
              {forYouItems.map((item, index) => (
                  <Card key={index} className="p-4 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <p className="text-md text-foreground">{item}</p>
                  </Card>
              ))}
          </div>
        </section>
    )
}
