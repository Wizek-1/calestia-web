import { useState } from "react";
import { Button } from "./ui/Button";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const categories = ["Wszystkie", "Strony WWW", "E-commerce", "Aplikacje"];

const projects = [
  {
    id: 1,
    title: "TechFlow Dashboard",
    category: "Aplikacje",
    description: "Panel analityczny dla startupu SaaS z zaawansowanymi wykresami i raportami.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "from-emerald-500/20 to-teal-600/20",
  },
  {
    id: 2,
    title: "Natura Shop",
    category: "E-commerce",
    description: "Sklep internetowy z ekologicznymi produktami. Integracja z płatnościami i magazynem.",
    tech: ["React", "Node.js", "Stripe"],
    image: "from-amber-500/20 to-orange-600/20",
  },
  {
    id: 3,
    title: "Kancelaria Prawna MK",
    category: "Strony WWW",
    description: "Profesjonalna strona dla kancelarii prawnej z systemem rezerwacji konsultacji.",
    tech: ["Next.js", "Sanity CMS"],
    image: "from-blue-500/20 to-indigo-600/20",
  },
  {
    id: 4,
    title: "FitTrack App",
    category: "Aplikacje",
    description: "Aplikacja do śledzenia treningów z planami treningowymi i integracją z urządzeniami.",
    tech: ["React Native", "Firebase"],
    image: "from-rose-500/20 to-pink-600/20",
  },
  {
    id: 5,
    title: "Architektura Studio",
    category: "Strony WWW",
    description: "Portfolio dla biura architektonicznego z galerią projektów i formularzem kontaktowym.",
    tech: ["Next.js", "Framer Motion"],
    image: "from-slate-500/20 to-zinc-600/20",
  },
  {
    id: 6,
    title: "ModaOnline",
    category: "E-commerce",
    description: "Platforma e-commerce dla marki odzieżowej z konfiguratorem produktów.",
    tech: ["Shopify", "React", "GraphQL"],
    image: "from-fuchsia-500/20 to-purple-600/20",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filteredProjects =
    activeCategory === "Wszystkie"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Nasze <span className="text-accent">realizacje</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Poznaj projekty, które zrealizowaliśmy dla naszych klientów. Każdy z
            nich to unikalne wyzwanie i satysfakcjonujące rozwiązanie.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br flex items-center justify-center ${project.image}`}>
                <div className="w-16 h-16 rounded-xl bg-background/10 backdrop-blur-sm flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-foreground/70" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs text-accent font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-accent hover:border-accent hover:text-accent-foreground">
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
