import Image from 'next/image';

export function HeroSection() {
    return (
        <section className="text-center">
            <div className="grid md:grid-cols-2 md:items-center md:gap-12 md:text-left">
                <div className="order-1 md:order-1 fade-in">
                    <div className="mx-auto rounded-lg bg-transparent p-2 md:p-4">
                        <Image
                            src="https://i.postimg.cc/d0S979jG/Untitled-design-5.webp"
                            alt="Mockup do produto A Arte da Persuasão"
                            width={500}
                            height={500}
                            className="mx-auto rounded-lg shadow-2xl shadow-primary/20 transform transition-transform hover:scale-105"
                            priority
                        />
                    </div>
                </div>
                <div className="order-2 md:order-2 mt-8 md:mt-0">
                    <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl lg:text-6xl fade-in" style={{ animationDelay: '0.2s' }}>
                        Você já sentiu que ninguém te leva a sério, mesmo sendo inteligente?
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl fade-in" style={{ animationDelay: '0.4s' }}>
                        Enquanto outros conseguem tudo com um sorriso, você precisa implorar. Isso não é justo. É questão de técnica.
                    </p>
                    <p className="mt-6 text-sm font-semibold text-primary/80 fade-in" style={{ animationDelay: '0.6s' }}>
                        Você tem acesso exclusivo a esta página por 15 minutos. Após isso, a condição desaparece.
                    </p>
                </div>
            </div>
        </section>
    );
}
