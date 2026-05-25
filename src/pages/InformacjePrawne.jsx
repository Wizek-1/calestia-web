import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto bg-card border border-border p-8 md:p-12 rounded-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Polityka <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">Prywatności</span>
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Administrator Danych Osobowych</h2>
            <p>
              Administratorem Twoich danych osobowych jest <strong>CalestiaGroup</strong> (zwana dalej „Administratorem”). Możesz skontaktować się z nami w sprawach związanych z ochroną danych pisząc na adres e-mail: <a href="mailto:calestiagroup@gmail.com" className="text-accent hover:underline">calestiagroup@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Jakie dane przetwarzamy i w jakim celu?</h2>
            <p className="mb-2">Przetwarzamy dane osobowe udostępniane przez Ciebie dobrowolnie, przede wszystkim za pośrednictwem formularza kontaktowego lub formularza briefu. Należą do nich m.in.: imię i nazwisko, adres e-mail, numer telefonu oraz inne informacje dobrowolnie przekazane w wiadomości.</p>
            <p>Cele przetwarzania:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Komunikacja z Tobą i obsługa zapytań (art. 6 ust. 1 lit. f RODO).</li>
              <li>Przedstawienie oferty i wycena projektu na Twoje żądanie (art. 6 ust. 1 lit. b RODO).</li>
              <li>Realizacja umowy, w przypadku jej zawarcia (art. 6 ust. 1 lit. b RODO).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Odbiorcy danych</h2>
            <p>
              Twoje dane nie są udostępniane podmiotom trzecim w celach marketingowych. Odbiorcami danych mogą być podmioty świadczące dla nas usługi infrastrukturalne (np. dostawcy hostingu, dostawca usług poczty e-mail - m.in. usługi Google czy EmailJS, które uczestniczą w przesyłaniu formularza).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Prawa użytkowników</h2>
            <p className="mb-2">Zgodnie z przepisami RODO posiadasz prawo do:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dostępu do swoich danych oraz otrzymania ich kopii.</li>
              <li>Sprostowania (poprawiania) swoich danych.</li>
              <li>Usunięcia danych (tzw. "prawo do bycia zapomnianym").</li>
              <li>Ograniczenia przetwarzania danych.</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania danych.</li>
              <li>Przenoszenia danych.</li>
            </ul>
            <p className="mt-2">W celu realizacji tych praw skontaktuj się z nami mailowo.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Pliki Cookies</h2>
            <p>
              Nasza strona może wykorzystywać pliki cookies (tzw. ciasteczka) w celu zapewnienia jej prawidłowego działania, do celów analitycznych oraz do pamiętania Twoich preferencji. W każdej chwili możesz zablokować pliki cookies w ustawieniach swojej przeglądarki internetowej.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
