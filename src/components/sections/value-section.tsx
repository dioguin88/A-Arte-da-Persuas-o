import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";

const valueBreakdown = [
    { item: "Técnicas de persuasão de bilionários", value: "R$497" },
    { item: "Acesso vitalício e atualizações", value: "R$197" },
    { item: "Scripts prontos + Material de apoio", value: "R$97" },
    { item: "Suporte exclusivo por 90 dias", value: "R$67" },
];
  
export function ValueSection() {
    return (
        <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
                Quanto Vale Ter Acesso a Tudo Isso?
            </h2>
            <Card className="shadow-xl border-2 border-primary/20 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50">
                            <TableHead className="text-left font-bold text-foreground text-lg p-4">O que você recebe hoje</TableHead>
                            <TableHead className="text-right font-bold text-foreground text-lg p-4">Valor de Mercado</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {valueBreakdown.map((item, index) => (
                        <TableRow key={index} className="border-b-primary/10">
                            <TableCell className="font-medium flex items-center gap-2 p-4">
                                <Check className="h-5 w-5 text-green-500" />
                                {item.item}
                            </TableCell>
                            <TableCell className="text-right line-through text-muted-foreground text-md p-4">{item.value}</TableCell>
                        </TableRow>
                        ))}
                        <TableRow className="bg-primary/10">
                            <TableCell className="font-bold text-primary text-lg p-4">Valor Total</TableCell>
                            <TableCell className="text-right font-bold line-through text-muted-foreground text-xl p-4">R$858</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className="bg-green-600/10 p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                        <p className="font-extrabold text-green-700 text-xl">Sua Chance Única Hoje:</p>
                        <p className="text-right font-extrabold text-green-700 text-4xl font-headline">R$10</p>
                    </div>
                </div>
            </Card>
        </section>
    )
}
