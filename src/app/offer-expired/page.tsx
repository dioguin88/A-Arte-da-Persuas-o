import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function OfferExpiredPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-center">
      <div className="mx-auto max-w-md">
        <AlertTriangle className="mx-auto h-16 w-16 text-primary" />
        <h1 className="mt-6 font-headline text-4xl font-bold text-foreground">
          Oferta Expirada
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Lamentamos, mas a oferta especial para "A Arte da Persuasão" não está mais disponível através desta página.
        </p>
        <p className="mt-2 text-md text-muted-foreground">
          Esta era uma oportunidade única.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Voltar para o início</Link>
        </Button>
      </div>
    </div>
  );
}
