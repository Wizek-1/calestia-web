import { CheckCircle2 } from "lucide-react";

const services = [
  "Strony firmowe i wizytówki",
  "Sklepy internetowe (e-commerce)",
  "Aplikacje webowe SaaS",
  "Landing page i strony produktowe",
  "Systemy CMS i panele administracyjne",
  "Optymalizacja SEO i wydajności",
];

export function AboutSection() {
  return (
    <section id="o-nas" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            O nas
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Przekształcamy pomysły w{" "}
            <span className="text-accent">działające produkty</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Jesteśmy zespołem pasjonatów technologii, którzy wierzą, że dobry
            design i solidny kod mogą zmienić biznes. Łączymy kreatywność z
            techniczną precyzją, dostarczając rozwiązania szyte na miarę.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Co oferujemy</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Nasze podejście</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Stawiamy na transparentność i bliską współpracę z klientem. Każdy
              projekt traktujemy indywidualnie, dostosowując rozwiązania do
              specyficznych potrzeb Twojego biznesu.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wykorzystujemy najnowsze technologie: React, Vite, TypeScript,
              Node.js i wiele innych. Dbamy o wydajność, dostępność i
              bezpieczeństwo każdego projektu.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
