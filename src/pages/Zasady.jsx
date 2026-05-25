import React, { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto bg-card border border-border p-8 md:p-12 rounded-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Regulamin <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">Usług</span>
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Postanowienia ogólne</h2>
            <p>
              Mniejszy dokument ("Regulamin") określa zasady współpracy w ramach tworzenia stron internetowych, aplikacji webowych oraz świadczenia powiązanych usług programistycznych i projektowych przez <strong>CalestiaGroup</strong> (Wykonawcę) dla firmy lub osoby fizycznej zlecającej prace (Zleceniodawcy).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Zawarcie umowy i wyceny</h2>
            <p>
              Przesłanie formularza (briefu) nie stanowi wiążącej umowy. Umowa o dzieło lub zlecenie zostaje zawarta z momentem akceptacji przez obie strony ostatecznej wyceny, harmonogramu oraz specyfikacji wymagań technologicznych za pośrednictwem poczty e-mail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Obowiązki Zleceniodawcy</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dostarczenie niezbędnych materiałów (tekstów, zdjęć, dostępów do serwerów) w terminie ustalonym w umowie.</li>
              <li>Uczestnictwo w akceptacji kluczowych etapów projektu (np. makiety, wdrożenie).</li>
              <li>Opóźnienia ze strony Zleceniodawcy automatycznie przesuwają termin końcowej realizacji dzieła.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Płatności i Prawa Autorskie</h2>
            <p className="mb-2">
              Jeżeli umowa nie stanowi inaczej, rozliczenie następuje na podstawie faktury VAT / rachunku wystawianego po zaakceptowaniu danego etapu prac lub całości zlecenia. Wykonawca ma prawo pobrać opłatę z góry (zaliczkę/zadatek).
            </p>
            <p><strong>Niezwykle ważne:</strong> Majątkowe prawa autorskie do kodu źródłowego, designu i grafik przechodzą na Zleceniodawcę <strong>dopiero z momentem uregulowania pełnej płatności</strong> za zlecenie. Do tego czasu Wykonawca pozostaje wyłącznym właścicielem wykonanego projektu.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Odpowiedzialność i Gwarancja</h2>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Wykonawca nie odpowiada za błędy wynikające z działania usług podmiotów trzecich (np. dostawców hostingu, awarii bramek płatności, aktualizacji zewnętrznych API).</li>
              <li>Wykonawca nie odpowiada za niedziałanie strony z powodu działań osób trzecich, w tym ataków hakerskich czy nieprawidłowej modyfikacji kodu przez Zleceniodawcę.</li>
              <li>Poprawki w ramach darmowej gwarancji obejmują wyłącznie naprawę błędów zawinionych przez Wykonawcę, które wynikły niezgodnie ze specyfikacją projektową. Jakiekolwiek nowe funkcjonalności wykraczające poza specyfikację są wyceniane oddzielnie.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Postanowienia końcowe</h2>
            <p>
              Wykonawca zastrzega sobie prawo zmieszczania informacji o wykonanym projekcie (logo, screeny strony) we własnym portfolio na stronie CalestiaDev, chyba że ustaleinia poufności (NDA) przed rozpoczęciem zlecenia stanowią inaczej. Ewentualne spory będą w miarę możliwości rozstrzygane polubownie.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
