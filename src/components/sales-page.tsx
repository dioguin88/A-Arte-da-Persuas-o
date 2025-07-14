"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Bomb, BrainCircuit, Eye, Files, UserCheck, ShieldAlert, CircleAlert, Lock, ShieldCheck, HelpCircle, Award, Sparkles, TrendingUp, ThumbsUp, Star, Quote, Compass, MicOff, EyeOff, UserX, Frown, Briefcase, Tv } from "lucide-react";
import { CountdownTimer } from "./countdown-timer";
import { useState, useEffect } from "react";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FloatingCTA } from "./floating-cta";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { WistiaPlayer } from "./wistia-player";


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
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/dIRGB2gA0lYsqYANkqqJ';
  };

  const symptoms = [
    { text: "Me interrompem quando falo", icon: <MicOff className="h-5 w-5 text-primary/80" /> },
    { text: "Ignoram minhas ideias no trabalho", icon: <EyeOff className="h-5 w-5 text-primary/80" /> },
    { text: "Tenho dificuldade de convencer pessoas", icon: <UserX className="h-5 w-5 text-primary/80" /> },
    { text: "Sinto que as pessoas não me respeitam naturalmente", icon: <Frown className="h-5 w-5 text-primary/80" /> },
    { text: "Já perdi oportunidades por não saber me expressar bem", icon: <Briefcase className="h-5 w-5 text-primary/80" /> },
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
  
  const forYouItems = [
    "Você já perdeu oportunidades por não saber se expressar.",
    "As pessoas ignoram suas ideias, mesmo quando são boas.",
    "Você quer influenciar sem precisar gritar, pedir ou convencer à força.",
  ];

  const futureSensations = [
      {
          icon: <ThumbsUp className="h-10 w-10 text-accent" />,
          text: "As pessoas finalmente ouvindo com atenção quando você fala.",
      },
      {
          icon: <TrendingUp className="h-10 w-10 text-accent" />,
          text: "Ganhando respeito onde antes era ignorado e sendo promovido.",
      },
      {
          icon: <Sparkles className="h-10 w-10 text-accent" />,
          text: "Influenciando sem esforço — como um mestre invisível.",
      }
  ]

  const valueBreakdown = [
      { item: "Técnicas de persuasão de bilionários", value: "R$497" },
      { item: "Acesso vitalício e atualizações", value: "R$197" },
      { item: "Scripts prontos + Material de apoio", value: "R$97" },
      { item: "Suporte exclusivo por 90 dias", value: "R$67" },
  ];

  const testimonials = [
    {
      quote: "Nunca consegui convencer meus clientes como agora. O curso vale 100x o que paguei. Fechei um contrato de 15 mil usando só o módulo 1.",
      name: "Fernanda M.",
      role: "Consultora de Vendas",
    },
    {
      quote: "Eu era invisível nas reuniões. Depois de aplicar as técnicas de presença, fui convidado pra liderar um projeto. Mudou meu jogo.",
      name: "Ricardo Alves",
      role: "Desenvolvedor Sênior",
    },
    {
      quote: "O material sobre gatilhos mentais é ouro puro. Consegui negociar um aumento de 30% no meu salário. Estou sem palavras.",
      name: "Juliana Costa",
      role: "Gerente de Projetos",
    },
  ];

  const faqs = [
    {
      question: "E se eu não gostar?",
      answer: "Você tem 7 dias para pedir reembolso. Acessa tudo, testa, e se não for pra você, o reembolso é feito de forma automática, sem perguntas."
    },
    {
      question: "É para iniciantes?",
      answer: "Sim! O conteúdo foi desenhado para te levar do zero absoluto à influência avançada, com exemplos práticos e passo a passo."
    },
    {
      question: "Vou receber certificado?",
      answer: "Sim, ao concluir o curso você receberá um certificado com validação digital para adicionar ao seu currículo e LinkedIn."
    }
  ]

  return (
    <div className="fade-in bg-background text-foreground bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,57,53,0.1),rgba(255,255,255,0))]">
      <FloatingCTA disabled={isExpired} onClick={handleBuyClick} />
      <header className="bg-primary p-3 text-center font-bold text-primary-foreground shadow-lg">
        <div className="flex items-center justify-center gap-2">
          <Bomb className="h-5 w-5 animate-pulse" />
          <span>Esta página se autodestruirá em 10 minutos. Você tem uma chance.</span>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
        <section className="text-center">
          <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">Você já sentiu que ninguém te leva a sério, mesmo sendo inteligente?</h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">Enquanto outros conseguem tudo com um sorriso, você precisa implorar. Isso não é justo. É questão de técnica.</p>
        </section>

        <Separator className="my-12 md:my-16" />

        <section className="mx-auto max-w-2xl">
          <Card className="p-6 shadow-xl transform -rotate-1 border-b-4 border-primary/50">
            <h2 className="text-center font-headline text-2xl font-bold md:text-3xl">Diagnóstico Rápido</h2>
            <p className="mt-2 text-center text-muted-foreground">Se você marcar 3 ou mais, esta página foi feita pra você.</p>
            <div className="mt-6 space-y-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center space-x-3 rounded-md border bg-background p-4 shadow-sm transition-transform hover:scale-105">
                  {symptom.icon}
                  <Checkbox id={`symptom-${index}`} onCheckedChange={handleSymptomCheck} />
                  <label
                    htmlFor={`symptom-${index}`}
                    className="flex-1 text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {symptom.text}
                  </label>
                </div>
              ))}
            </div>
            {symptomsChecked > 0 && (
              <p className="mt-6 text-center text-lg font-bold text-primary animate-pulse">
                  {symptomsChecked >= 3 
                    ? "Este curso foi feito para você. Continue..." 
                    : "Continue... você está no caminho certo para resolver isso."}
              </p>
            )}
          </Card>
        </section>
        
        <Separator className="my-12 md:my-16" />

        <section id="vsl" className="scroll-mt-20 text-center">
            <h2 className="flex items-center justify-center gap-3 text-center font-headline text-3xl font-bold md:text-4xl">
              <Tv className="h-8 w-8 text-accent" />
              <span>Assista Antes Que Essa Página Expire</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Em menos de 3 minutos, você vai entender por que a maioria das pessoas <strong>nunca aprende a ser respeitada</strong> — e como mudar isso agora.</p>
            <div className="mt-8 mx-auto max-w-3xl rounded-lg shadow-2xl overflow-hidden border-2 border-primary">
                <WistiaPlayer videoId="h8f6dbxoam" />
            </div>
        </section>

        <Separator className="my-12 md:my-16" />
        
        <section id="offer" className="scroll-mt-20 text-center">
            <Card className="relative overflow-hidden border-2 border-primary bg-card shadow-2xl transform rotate-1">
                <div className="absolute -top-4 -right-4 z-10 animate-pulse rounded-full bg-primary p-3 text-primary-foreground shadow-lg">
                    <ShieldAlert className="h-8 w-8" />
                </div>
                <CardContent className="p-6 md:p-10">
                    <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                        A Oferta que Você Não Pode Ignorar
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">Valor real comprovado por dezenas de alunos. Garantia de 7 dias. Você só perde se NÃO testar.</p>
                    
                    <div className="my-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                        <div className="rounded-xl border-2 border-dashed border-red-500 bg-red-500/10 p-6 text-center text-red-500 line-through decoration-2 transform -rotate-3">
                            <span className="text-sm font-semibold uppercase">De</span>
                            <p className="font-headline text-5xl font-bold">R$497</p>
                        </div>
                        <div className="rounded-xl border-2 border-green-500 bg-green-500/10 p-8 text-center text-green-600 shadow-lg transform rotate-3">
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
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-2">
              <Compass className="inline-block h-8 w-8 mr-2 text-accent" />
              Este curso é para você se...
          </h2>
          <p className="text-center text-muted-foreground mb-8">Você se identifica com pelo menos uma destas situações.</p>
          <div className="grid gap-4 max-w-2xl mx-auto">
              {forYouItems.map((item, index) => (
                  <Card key={index} className="p-4 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <p className="text-md text-foreground">{item}</p>
                  </Card>
              ))}
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        <section>
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
            O Arsenal de Influência que Você Vai Dominar
          </h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-card hover:shadow-xl hover:-translate-y-1">
                <div className="flex-shrink-0 transition-transform group-hover:scale-110">{feature.icon}</div>
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
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
                Você Vai Sentir Isso na Pele...
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
                {futureSensations.map((sensation, index) => (
                    <Card key={index} className="text-center p-6 transform transition-all hover:scale-105 hover:-rotate-2 shadow-xl">
                        <div className="flex justify-center mb-4">{sensation.icon}</div>
                        <p className="text-lg font-medium text-foreground">{sensation.text}</p>
                    </Card>
                ))}
            </div>
        </section>

        <Separator className="my-12 md:my-16" />

        <section>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <Image 
                src="https://c.superprof.com/i/m/18997958/600/20241206110428/18997958.webp"
                alt="Foto do especialista Renato Miranda"
                width={400}
                height={400}
                className="rounded-full mx-auto shadow-2xl border-4 border-primary/50"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="font-headline text-3xl font-bold">Quem vai te guiar</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Sou <strong>Renato Miranda</strong>, especialista em persuasão e consultor de comunicação com <strong>+7.000 alunos</strong> treinados. Minha missão é simples: transformar pessoas comuns em líderes de influência, usando as mesmas técnicas que bilionários e executivos de ponta usam secretamente para moldar o mundo ao seu redor.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-12 md:my-16" />
        
        <section>
          <h2 className="flex items-center justify-center gap-3 text-center font-headline text-3xl font-bold md:text-4xl">
            <Award className="h-8 w-8 text-accent" />
            <span>Certificado de Conclusão Incluso</span>
          </h2>
          <div className="mt-8 flex flex-col md:flex-row items-center gap-8 bg-card p-8 rounded-lg shadow-xl border">
              <div className="md:w-1/2">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Mockup do certificado"
                  data-ai-hint="certificate mockup"
                  width={600}
                  height={400}
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

        <Separator className="my-12 md:my-16" />

        <section>
          <h2 className="flex items-center justify-center gap-3 text-center font-headline text-3xl font-bold md:text-4xl">
            <UserCheck className="h-8 w-8 text-accent" />
            <span>Resultados Reais, Pessoas Reais</span>
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                  <Card key={index} className="flex flex-col justify-between p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-rotate-2 bg-muted/30">
                      <div>
                          <Quote className="h-8 w-8 text-primary/50 mb-4" />
                          <p className="text-foreground italic mb-6">"{testimonial.quote}"</p>
                      </div>
                      <div>
                          <div className="flex items-center gap-2">
                              <div className="font-bold text-foreground">{testimonial.name}</div>
                              <div className="text-sm text-muted-foreground">- {testimonial.role}</div>
                          </div>
                          <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-accent fill-accent" />)}
                          </div>
                      </div>
                  </Card>
              ))}
          </div>
        </section>
        
        <Separator className="my-12 md:my-16" />

        <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
                Quanto Vale Ter Acesso a Tudo Isso?
            </h2>
            <Card className="shadow-xl">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left font-bold text-foreground">O que você recebe</TableHead>
                            <TableHead className="text-right font-bold text-foreground">Valor Real</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {valueBreakdown.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.item}</TableCell>
                            <TableCell className="text-right line-through text-muted-foreground">{item.value}</TableCell>
                        </TableRow>
                        ))}
                        <TableRow className="bg-primary/10">
                            <TableCell className="font-bold text-primary">Total Real</TableCell>
                            <TableCell className="text-right font-bold line-through text-muted-foreground">R$858</TableCell>
                        </TableRow>
                         <TableRow className="bg-green-500/10">
                            <TableCell className="font-extrabold text-green-700 text-lg">Você paga hoje</TableCell>
                            <TableCell className="text-right font-extrabold text-green-700 text-2xl">R$10</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </section>


        <Separator className="my-12 md:my-16" />

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

        <Separator className="my-12 md:my-16" />

        <div className="bg-muted/30 py-12 rounded-lg">
            <section className="max-w-3xl mx-auto px-4">
                <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
                    Suas Dúvidas, Respondidas
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-md text-muted-foreground">
                              {faq.answer}
                          </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </div>

        <Separator className="my-12 md:my-16" />

        <section className="text-center">
            <Card className="border-primary border-2 bg-primary/10 shadow-2xl">
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
                      className="h-auto w-full max-w-lg whitespace-normal py-4 text-xl font-bold shadow-lg shadow-primary/50 transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-70"
                      disabled={isExpired}
                      onClick={handleBuyClick}
                    >
                      <span className="animate-pulse mr-2">🔥</span>
                      {isExpired ? "OFERTA ESGOTADA" : "EU QUERO TRANSFORMAR MINHA COMUNICAÇÃO AGORA — POR R$10"}
                    </Button>
                    {!isExpired && (
                       <p className="mt-2 text-sm text-muted-foreground">
                        ⏳ Liberar meu acesso antes que acabe!
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
