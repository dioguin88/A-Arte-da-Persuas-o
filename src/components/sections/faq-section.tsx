import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
  
const faqItems = [
    {
        question: "Como acesso o curso?",
        answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar nossa área de membros exclusiva.",
    },
    {
        question: "Por quanto tempo terei acesso?",
        answer: "No 'Acesso TESTE', você terá acesso por 3 dias ao Módulo 1. No 'Acesso PRO', o acesso ao curso completo e a todas as futuras atualizações é VITALÍCIO.",
    },
    {
        question: "E se eu não gostar?",
        answer: "Seu risco é zero. O Acesso PRO tem uma garantia incondicional de 7 dias, e o Acesso TESTE, de 3 dias. Se por qualquer motivo não ficar satisfeito, basta um clique para receber 100% do seu dinheiro de volta.",
    },
    {
        question: "O curso serve para iniciantes?",
        answer: "Sim! O método foi desenhado para levar qualquer pessoa, do absoluto zero a um nível de influência e persuasão que você jamais imaginou ser possível, de forma ética e prática.",
    },
];

export function FaqSection() {
    return (
      <section className="max-w-3xl mx-auto">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-8">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base pt-2">
                      {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </section>
    );
}
