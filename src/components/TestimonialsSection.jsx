import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anna Kowalska",
    role: "CEO, TechFlow",
    content: "Współpraca z CalestiaDev to czysta przyjemność. Zespół doskonale zrozumiał nasze potrzeby i dostarczył produkt, który przekroczył nasze oczekiwania.",
    rating: 5,
    avatar: "AK",
  },
  {
    id: 2,
    name: "Piotr Nowak",
    role: "Właściciel, Natura Shop",
    content: "Nowy sklep internetowy zwiększył naszą sprzedaż o 150% w pierwszym kwartale. Profesjonalne podejście i świetna komunikacja.",
    rating: 5,
    avatar: "PN",
  },
  {
    id: 3,
    name: "Marta Wiśniewska",
    role: "Partner, Kancelaria MK",
    content: "Strona, którą otrzymaliśmy, idealnie oddaje charakter naszej kancelarii. Klienci chwalą jej przejrzystość i łatwość nawigacji.",
    rating: 5,
    avatar: "MW",
  },
];

export function TestimonialsSection() {
  return (
    <section id="opinie" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Opinie klientów
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Co mówią o nas <span className="text-accent">klienci</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Zadowolenie klientów to nasza największa nagroda. Poznaj opinie
            tych, którzy nam zaufali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-border group-hover:text-accent/20 transition-colors duration-300" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                {`"${testimonial.content}"`}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
