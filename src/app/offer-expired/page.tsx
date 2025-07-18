import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleOff } from "lucide-react";

export default function OfferSoldOutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-center">
      <div className="mx-auto max-w-md">
        <CircleOff className="mx-auto h-16 w-16 text-primary" />
        <h1 className="mt-6 font-headline text-4xl font-bold text-foreground">
          Oferta Esgotada
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Lamentamos, mas todas as vagas para a oferta especial de "A Arte da Persuasão" se esgotaram.
        </p>
        <p className="mt-2 text-md text-muted-foreground">
          A demanda foi muito alta e esta oportunidade única foi encerrada.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Voltar para o início</Link>
        </Button>
      </div>
    </div>
  );
}
