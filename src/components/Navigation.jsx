import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
  { href: "#start", label: "Start" },
  { href: "#o-nas", label: "O nas" },
  { href: "#proces", label: "Proces" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#opinie", label: "Opinie" },
];

export function Navigation({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#start" className="text-2xl font-bold tracking-tight" onClick={() => { window.location.hash = ''; }}>
          Calestia<span className="text-accent">Dev</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => {
                  if (window.location.hash.startsWith('#/')) {
                    window.location.hash = '';
                    setTimeout(() => {
                      const id = link.href.replace('#', '');
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button onClick={onOpenContact}>
            Skontaktuj się
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-lg ${
          isMobileMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium block py-2"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (window.location.hash.startsWith('#/')) {
                    window.location.hash = '';
                    setTimeout(() => {
                      const id = link.href.replace('#', '');
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button className="w-full" onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenContact();
            }}>
              Skontaktuj się
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
