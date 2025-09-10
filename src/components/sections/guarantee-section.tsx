import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
    return (
        <section className="text-center max-w-3xl mx-auto">
            <Card className="border-green-500 border-2 bg-green-500/10 shadow-2xl">
              <CardContent className="p-8">
                <ShieldCheck className="h-16 w-16 text-green-600 mx-auto" />
                <h2 className="mt-4 font-headline text-3xl font-bold text-foreground">
                  Garantia Incondicional
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Você tem 7 dias para testar o Acesso PRO (ou 3 dias no TESTE). Se não gostar, basta um clique para ser 100% reembolsado. O risco é meu. O poder agora é seu.
                </p>
              </CardContent>
            </Card>
        </section>
    )
}
