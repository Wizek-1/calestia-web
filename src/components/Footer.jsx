import { Button } from "./ui/Button";
import { ArrowRight, Mail } from "lucide-react";

export function Footer({ onOpenContact }) {
  return (
    <footer id="kontakt" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Gotowy na nowy <span className="text-accent">projekt</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Porozmawiajmy o Twoich potrzebach. Bezpłatna konsultacja to pierwszy
            krok do sukcesu Twojego biznesu online.
          </p>
          <Button size="lg" onClick={onOpenContact} className="gap-2">
            Zacznijmy współpracę
            <ArrowRight size={18} />
          </Button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-border">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#start" className="text-2xl font-bold tracking-tight" onClick={() => { window.location.hash = ''; }}>
              Calestia<span className="text-accent">Dev</span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Tworzymy nowoczesne strony internetowe i aplikacje webowe, które
              pomagają biznesom rosnąć w cyfrowym świecie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-3">
              {[
                { href: "#start", label: "Start" },
                { href: "#o-nas", label: "O nas" },
                { href: "#proces", label: "Proces" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#opinie", label: "Opinie" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      if (window.location.hash.startsWith('#/')) {
                        // User is on a legal page, going back home
                        window.location.hash = '';
                        setTimeout(() => {
                          const id = link.href.replace('#', '');
                          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:calestiagroup@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail size={16} />
                  calestiagroup@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CalestiaDev. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6">
            <a
              href="#/polityka-prywatnosci"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Polityka prywatności
            </a>
            <a
              href="#/regulamin"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
