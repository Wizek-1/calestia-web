import { Button } from "./ui/Button";
import { ArrowRight, Code2, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Nowoczesny Kod",
    description: "React, Next.js, TypeScript",
  },
  {
    icon: Zap,
    title: "Błyskawiczna Prędkość",
    description: "Optymalizacja wydajności",
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    description: "Najlepsze praktyki",
  },
];

export function HeroSection({ onOpenContact }) {
  return (
    <section
      id="start"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Przyjmujemy nowe projekty
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl text-balance">
          Tworzymy strony, które{" "}
          <span className="text-accent">przyciągają</span> i{" "}
          <span className="text-accent">konwertują</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Specjalizujemy się w projektowaniu i budowie nowoczesnych stron
          internetowych oraz aplikacji webowych. Łączymy estetykę z
          funkcjonalnością, dostarczając rozwiązania, które działają.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild className="gap-2">
            <a href="#portfolio">
              Zobacz realizacje
              <ArrowRight size={18} />
            </a>
          </Button>
          <Button size="lg" variant="outline" onClick={onOpenContact}>
            Skontaktuj się
          </Button>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-accent/30 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 pt-16 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Zrealizowanych projektów" },
            { value: "98%", label: "Zadowolonych klientów" },
            { value: "5+", label: "Lat doświadczenia" },
            { value: "24h", label: "Czas odpowiedzi" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
