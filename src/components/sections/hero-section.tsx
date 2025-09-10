import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
    return (
        <section className="text-center">
            <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl lg:text-6xl fade-in">
                Você Quer Apenas Testar… Ou Dominar a Arte da Persuasão?
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl fade-in" style={{ animationDelay: '0.2s' }}>
                Você sente que ninguém te leva a sério, mesmo sendo inteligente? Já perdeu oportunidades por não saber se expressar? As pessoas te interrompem, ignoram suas ideias, ou você sente que precisa implorar para ser ouvido?
            </p>
            <Card className="mt-8 text-left bg-amber-500/10 border-l-4 border-amber-500 fade-in" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-amber-200">
                    A boa notícia: <span className="text-foreground">Isso não é falta de talento. É falta de técnica. E agora você tem duas formas de resolver isso. Agora mesmo.</span>
                  </p>
                </CardContent>
            </Card>
        </section>
    );
}
