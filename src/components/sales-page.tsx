"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Bomb, BrainCircuit, Eye, Files, UserCheck, ShieldAlert, CircleAlert, Lock } from "lucide-react";
import { CountdownTimer } from "./countdown-timer";
import { useState, useEffect } from "react";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

export function SalesPage() {
  const [isExpired, setIsExpired] = useState(false);
  const [fakeIp, setFakeIp] = useState("189.12.34.56");
  const [symptomsChecked, setSymptomsChecked] = useState(0);

  useEffect(() => {
    // Generate a fake IP on client-side to avoid hydration mismatch
    const octet1 = Math.floor(Math.random() * (255 - 100) + 100);
    const octet2 = Math.floor(Math.random() * 256);
    const octet3 = Math.floor(Math.random() * 256);
    const octet4 = Math.floor(Math.random() * 256);
    setFakeIp(`${octet1}.${octet2}.${octet3}.${octet4}`);
  }, []);

  const handleTimerEnd = () => {
    setIsExpired(true);
  };
  
  const handleSymptomCheck = (checked: boolean | 'indeterminate') => {
    setSymptomsChecked(prev => checked ? prev + 1 : prev - 1);
  };

  const handleBuyClick = () => {
    toast({
      title: "Compra Realizada com Sucesso!",
      description: "Seu acesso foi enviado para o seu e-mail.",
    });
  };

  const symptoms = [
    "Me interrompem quando falo",
    "Ignoram minhas ideias no trabalho",
    "Tenho dificuldade de convencer pessoas",
  ];

  const features = [
    { 
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: "Gatilhos mentais de decisão instantânea",
      description: "Você fecha acordos na hora."
    },
    { 
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Leitura de expressões",
      description: "Você entende o que o outro quer antes dele falar."
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 12c-3 0-6 2.5-6 2.5V17s3-2.5 6-2.5 6 2.5 6 2.5v-2.5S15 12 12 12Z"/><path d="M12 12c-3 0-6-2.5-6-2.5V7s3 2.5 6 2.5 6-2.5 6-2.5v2.5S15 12 12 12Z"/><path d="M12 12c-3 0-6-2.5-6-2.5V2s3 2.5 6 2.5 6-2.5 6-2.5v2.5S15 12 12 12Z"/></svg>,
      title: "Hipnose conversacional",
      description: "Você vira o “influenciador secreto”."
    },
    { 
      icon: <Files className="h-8 w-8 text-primary" />,
      title: "Scripts prontos",
      description: "Copie e cole para vender, negociar, conquistar."
    },
    { 
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Presença de autoridade",
      description: "Você entra nos lugares e é naturalmente respeitado."
    },
  ];

  const testimonials = [
    {
      image: "https://placehold.co/500x300.png",
      'data-ai-hint': 'testimonial message',
      alt: "Depoimento de cliente satisfeito em uma conversa de WhatsApp",
    },
    {
      image: "https://placehold.co/500x300.png",
      'data-ai-hint': 'testimonial linkedin',
      alt: "Depoimento de cliente satisfeito em um post do LinkedIn",
    },
    {
      image: "https://placehold.co/500x300.png",
      'data-ai-hint': 'testimonial email',
      alt: "Depoimento de cliente satisfeito em um email",
    },
  ];

  return (
    <div className="fade-in bg-background text-foreground">
      <header className="bg-primary p-3 text-center font-bold text-primary-foreground">
        <div className="flex items-center justify-center gap-2">
          <Bomb className="h-5 w-5 animate-pulse" />
          <span>Esta página se autodestruirá em 10 minutos. Você tem uma chance.</span>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
        <section className="text-center">
          <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl">Você já sentiu que ninguém te leva a sério, mesmo sendo inteligente?</h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">Enquanto outros conseguem tudo com um sorriso, você precisa implorar. Isso não é justo. É questão de técnica.</p>
        </section>

        <Separator className="my-12 md:my-16" />

        <section className="mx-auto max-w-2xl rounded-lg border border-border bg-card p-6 shadow-lg">
          <h2 className="text-center font-headline text-2xl font-bold md:text-3xl">Diagnóstico Rápido</h2>
          <p className="mt-2 text-center text-muted-foreground">Se você marcar 2 ou mais, esta página é sua salvação.</p>
          <div className="mt-6 space-y-4">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex items-center space-x-3 rounded-md border p-4">
                <Checkbox id={`symptom-${index}`} onCheckedChange={handleSymptomCheck} />
                <label
                  htmlFor={`symptom-${index}`}
                  className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {symptom}
                </label>
              </div>
            ))}
          </div>
          {symptomsChecked > 0 && (
            <p className="mt-6 text-center text-lg font-bold text-primary animate-pulse">
                Continue... você está no caminho certo para resolver isso.
            </p>
          )}
        </section>

        <Separator className="my-12 md:my-16" />
        
        <section id="offer" className="scroll-mt-20 text-center">
            <Card className="relative overflow-hidden border-2 border-primary bg-card shadow-2xl">
                <div className="absolute -top-4 -right-4 z-10 animate-pulse rounded-full bg-primary p-3 text-primary-foreground shadow-lg">
                    <ShieldAlert className="h-8 w-8" />
                </div>
                <CardContent className="p-6 md:p-10">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                        A Oferta que Você Não Pode Ignorar
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">Valor real comprovado por dezenas de alunos. Garantia de 7 dias. Você só perde se NÃO testar.</p>
                    
                    <div className="my-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                        <div className="rounded-xl border-2 border-dashed border-red-500 bg-red-500/10 p-6 text-center text-red-500 line-through decoration-2">
                            <span className="text-sm font-semibold uppercase">De</span>
                            <p className="font-headline text-5xl font-bold">R$497</p>
                        </div>
                        <div className="rounded-xl border-2 border-green-500 bg-green-500/10 p-8 text-center text-green-600 shadow-lg">
                             <span className="text-sm font-semibold uppercase">Por Apenas</span>
                            <p className="font-headline text-7xl font-bold">R$10</p>
                        </div>
                    </div>
                    
                    <p className="font-bold text-foreground">Acesso imediato, só hoje e só nesta página.</p>
                </CardContent>
            </Card>
        </section>
        
        <Separator className="my-12 md:my-16" />

        <section>
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
            O Arsenal de Influência que Você Vai Dominar
          </h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-card hover:shadow-md">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        <section>
          <h2 className="flex items-center justify-center gap-3 text-center font-headline text-3xl font-bold md:text-4xl">
            <UserCheck className="h-8 w-8 text-accent" />
            <span>Depoimentos 100% Verificados</span>
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-0">
                  <Image src={testimonial.image} alt={testimonial.alt} width={500} height={300} className="w-full" data-ai-hint={testimonial['data-ai-hint']}/>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        <section className="text-center">
            <Card className="border-primary bg-primary/10 shadow-2xl">
                <CardContent className="p-6 md:p-10">
                    <p className="mb-4 flex items-center justify-center gap-2 rounded-lg border border-foreground/20 bg-background/50 p-2 text-sm font-semibold text-muted-foreground">
                      <ShieldAlert className="h-4 w-4 text-primary" />
                      <span>Esta oferta foi liberada para o IP: {fakeIp}</span>
                    </p>
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                      Sua última chance está acabando
                    </h2>
                    <p className="mt-2 text-muted-foreground">Após o fim do tempo, o preço volta a <span className="font-bold text-foreground">R$ 497,00.</span></p>

                    <div className="my-8">
                        <CountdownTimer onTimerEnd={handleTimerEnd} isExpired={isExpired} />
                    </div>
                    
                    {isExpired && (
                        <p className="my-6 flex animate-pulse items-center justify-center gap-2 rounded-lg border border-red-300 bg-red-100 p-3 font-bold text-red-800">
                          <CircleAlert className="h-5 w-5" />
                          O TEMPO ESGOTOU! A oferta não está mais disponível.
                        </p>
                    )}

                    <Button 
                      size="lg"
                      className="h-auto w-full max-w-md whitespace-normal py-4 text-xl font-bold shadow-lg transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-70"
                      disabled={isExpired}
                      onClick={handleBuyClick}
                    >
                      {isExpired ? "OFERTA ESGOTADA" : "SIM, QUERO PARAR DE SER IGNORADO por R$ 10!"}
                    </Button>
                    {!isExpired && (
                       <p className="mt-2 text-sm text-muted-foreground">
                        Pague R$ 10 e vire a pessoa mais ouvida da sua família, do seu trabalho e do seu círculo.
                       </p>
                    )}
                    <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Pagamento 100% seguro</span>
                        <Separator orientation="vertical" className="h-4" />
                        <span>Acesso imediato</span>
                        <Separator orientation="vertical" className="h-4" />
                        <span>Garantia de 7 dias</span>
                    </div>
                </CardContent>
            </Card>
        </section>
      </main>
    </div>
  );
}
