import { CircleX } from "lucide-react";

const symptoms = [
  "Suas ideias são constantemente ignoradas?",
  "As pessoas te interrompem enquanto você fala?",
  "Você sente que precisa se esforçar o dobro para ser levado a sério?",
  "Perdeu oportunidades por não saber se posicionar?",
];

export function SymptomsSection() {
  return (
    <section>
      <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
        Se Você se Sente Assim, Você Não Está Sozinho
      </h2>
      <div className="mx-auto mt-8 grid max-w-2xl gap-4">
        {symptoms.map((symptom, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-md"
          >
            <CircleX className="h-6 w-6 flex-shrink-0 text-primary" />
            <p className="text-lg text-foreground">{symptom}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-lg font-semibold text-accent md:text-xl">
        Se você respondeu ‘sim’ para 2 ou mais... este vídeo é obrigatório pra você.
      </p>
    </section>
  );
}
