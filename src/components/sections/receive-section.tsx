import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import placeholderImages from '@/lib/placeholder-images.json';
import { CheckCircle } from "lucide-react";

const deliverables = [
    "Acesso vitalício à área de membros",
    "Módulos liberados imediatamente",
    "Aulas em vídeo + materiais de apoio (PDFs)",
    "Suporte e atualizações futuras inclusas",
]

export function ReceiveSection() {
    return (
        <section className="py-12 bg-card/50 rounded-lg text-center">
            <div className="container mx-auto max-w-4xl">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                    📦 O Que Você Vai Receber Imediatamente
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Você terá acesso imediato a todos os módulos, bônus exclusivos e materiais práticos, disponíveis em qualquer dispositivo.
                </p>
                <div className="mt-8">
                    <Image
                        src={placeholderImages.courseMockup.src}
                        alt={placeholderImages.courseMockup.alt}
                        width={800}
                        height={450}
                        className="rounded-lg shadow-2xl mx-auto"
                    />
                </div>
                <div className="mt-10 max-w-2xl mx-auto">
                    <ul className="space-y-4 text-left text-lg">
                        {deliverables.map((item, index) => (
                             <li key={index} className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                 <p className="mt-8 text-lg font-semibold text-accent md:text-xl">
                    +17.000 alunos treinados já tiveram acesso a essas técnicas exclusivas.
                </p>
            </div>
        </section>
    )
}
