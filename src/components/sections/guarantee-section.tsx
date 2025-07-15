import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
    return (
        <section className="text-center max-w-3xl mx-auto">
            <Card className="border-green-500 border-2 bg-green-500/10 shadow-2xl">
              <CardContent className="p-8">
                <ShieldCheck className="h-16 w-16 text-green-600 mx-auto" />
                <h2 className="mt-4 font-headline text-3xl font-bold text-green-700">
                  Garantia Incondicional de 7 Dias
                </h2>
                <p className="mt-4 text-lg text-green-800">
                  Você pode acessar todo o conteúdo, aplicar as técnicas e decidir se é para você. Se por qualquer motivo não ficar 100% satisfeito, basta um clique para ter seu reembolso total. O risco é todo meu.
                </p>
              </CardContent>
            </Card>
        </section>
    )
}
