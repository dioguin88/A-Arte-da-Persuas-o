import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

export function FaqSection() {
    return (
        <div className="bg-muted/30 py-8 md:py-12 rounded-lg">
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
    )
}
