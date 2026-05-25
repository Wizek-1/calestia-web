import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Palette, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Briefing',
    subtitle: 'Zrozumienie wizji',
    description: 'Analizujemy Twoje cele, grupę docelową i wymagania funkcjonalne. Tworzymy fundament pod Twój projekt.',
    icon: FileText,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: '02',
    title: 'Projektowanie',
    subtitle: 'Design & UX',
    description: 'Tworzymy unikalny design dopasowany do Twojej marki. Skupiamy się na intuicyjności i nowoczesnej estetyce.',
    icon: Palette,
    color: 'from-purple-500 to-pink-400'
  },
  {
    id: '03',
    title: 'Rozwój',
    subtitle: 'Kodowanie & Testy',
    description: 'Przekuwamy projekt w szybki, responsywny kod. Dbamy o najwyższą wydajność i bezpieczeństwo aplikacji.',
    icon: Code2,
    color: 'from-emerald-500 to-teal-400'
  },
  {
    id: '04',
    title: 'Wdrożenie',
    subtitle: 'Start Twojej strony',
    description: 'Optymalizujemy wszystko pod SEO, konfigurujemy serwer i uruchamiamy Twój projekt w świat.',
    icon: Rocket,
    color: 'from-orange-500 to-yellow-400'
  }
];

const ProcessSection = () => {
  return (
    <section id="proces" className="py-24 px-6 overflow-hidden bg-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Jak budujemy Twoją <span className="text-accent underline decoration-accent/20 underline-offset-8">przewagę</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Przejrzysty proces to fundament udanego projektu. Oto ścieżka, którą przejdziemy wspólnie od pomysłu do gotowego produktu.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-border/50 -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative z-10 bg-card/40 backdrop-blur-sm border border-border p-8 rounded-2xl h-full transition-all duration-500 hover:border-accent/40 hover:bg-card/60 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden">
                {/* Glow Background Effect */}
                <div className={`absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                
                {/* Step ID */}
                <span className="text-xs font-mono text-accent/60 mb-6 block tracking-widest uppercase">
                  ETAP • {step.id}
                </span>

                {/* Icon Box */}
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-secondary/50 border border-border group-hover:border-accent/30 transition-colors duration-500`}>
                  <step.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground/80 lowercase tracking-wide italic">
                    — {step.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop Connector Icon) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 text-border group-hover:text-accent transition-colors duration-500 z-20">
                    <ArrowRight className="w-5 h-5 bg-background rounded-full" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
