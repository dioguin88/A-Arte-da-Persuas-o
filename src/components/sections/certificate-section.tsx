import { Award } from "lucide-react";
import Image from "next/image";

export function CertificateSection() {
    return (
        <section>
          <h2 className="flex items-center justify-center gap-3 text-center font-headline text-3xl font-bold md:text-4xl">
            <Award className="h-8 w-8 text-accent" />
            <span>Certificado de Conclusão Incluso</span>
          </h2>
          <div className="mt-8 flex flex-col md:flex-row items-center gap-8 bg-card p-6 md:p-8 rounded-lg shadow-xl border">
              <div className="md:w-1/2">
                <Image
                  src="https://i.postimg.cc/4ygX31WL/A4-certificado-curso-gest-o-de-pessoas-elegante-azul-e-dourado.webp"
                  alt="Mockup do certificado"
                  width={600}
                  height={424}
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-muted-foreground">
                  Ao concluir, você recebe um certificado nominal, válido em todo território nacional. É a prova do seu novo superpoder, perfeito para impulsionar seu currículo e perfil no LinkedIn.
                </p>
              </div>
          </div>
        </section>
    )
}
