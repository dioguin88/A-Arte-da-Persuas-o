import Image from "next/image";

export default function SpecialistSection() {
    return (
        <section>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <Image 
                src="https://c.superprof.com/i/m/18997958/600/20241206110428/18997958.webp"
                alt="Foto do especialista Renato Miranda"
                width={250}
                height={250}
                className="rounded-full mx-auto shadow-2xl border-4 border-primary/50"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="font-headline text-3xl font-bold">Quem vai te guiar</h2>
              <p className="mt-4 text-lg text-muted-foreground">
              Com mais de <strong>10.000 horas de aplicação prática</strong> em persuasão estratégica, Renato já formou mais de <strong>17 mil alunos</strong> usando métodos de influência psicológica, linguagem hipnótica e defesa contra manipulação. Seu conhecimento é usado em negociações corporativas, relacionamentos pessoais e desenvolvimento de liderança.
              </p>
            </div>
          </div>
        </section>
    )
}
