import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function PodminkyPouzivaniPage() {
  return (
    <>
      <Header variant="dark" />
      <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Podmínky používání aplikace QIK
            </h1>
            <p className="text-lg text-gray-600">
              <strong>Provozovatel:</strong> QIK Solutions s.r.o. |{" "}
              <strong>Platnost od:</strong> 1. 1. 2026 |{" "}
              <strong>Kontakt:</strong> podpora@qikx.cz
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12">
            <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900">
              <h2>1. Úvodní ustanovení</h2>
              <p>
                Tyto podmínky používání (dále jen &bdquo;Podmínky&ldquo;)
                upravují vztah mezi provozovatelem aplikace QIK, dostupné na
                doméně qikapp.cz a projektova-dokumentace.cz (dále jen
                &bdquo;Aplikace&ldquo;), a jejími uživateli (dále jen
                &bdquo;Uživatel&ldquo;).
              </p>
              <p>
                Používáním Aplikace Uživatel vyjadřuje souhlas s těmito
                Podmínkami. Pokud s Podmínkami nesouhlasí, není oprávněn Aplikaci
                používat.
              </p>

              <hr />

              <h2>2. Popis služby</h2>
              <p>
                QIK je softwarová aplikace určená pro odborníky v oblasti
                stavebnictví. Umožňuje zejména:
              </p>
              <ul>
                <li>
                  správu a generování projektové dokumentace s využitím AI,
                </li>
                <li>vedení stavebního deníku,</li>
                <li>evidenci vad a nedodělků,</li>
                <li>nahrávání a správu podkladů a příloh.</li>
              </ul>

              <hr />

              <h2>3. Registrace a uživatelský účet</h2>
              <p>
                3.1. Přístup k Aplikaci vyžaduje registraci a vytvoření
                uživatelského účtu.
              </p>
              <p>
                3.2. Uživatel je povinen uvádět pravdivé a aktuální údaje.
                Provozovatel nenese odpovědnost za škody vzniklé v důsledku
                uvedení nepravdivých údajů.
              </p>
              <p>
                3.3. Uživatel je odpovědný za ochranu svých přihlašovacích údajů
                a za veškeré aktivity provedené pod jeho účtem.
              </p>
              <p>
                3.4. Provozovatel si vyhrazuje právo zrušit účet Uživatele,
                který porušuje tyto Podmínky.
              </p>

              <hr />

              <h2>4. Ukládání dat a zpracování souborů</h2>

              <h3>4.1. Soubory a přílohy</h3>
              <p>
                Nahrané soubory a přílohy jsou ukládány na serverech společnosti
                Cloudflare, Inc. Data jsou uložena v datových centrech na území
                Evropské unie a neopouštějí EU.
              </p>

              <h3>4.2. AI funkce</h3>
              <p>
                Aplikace nabízí funkce s podporou umělé inteligence. Tyto funkce
                fungují následovně:
              </p>
              <ul>
                <li>
                  Soubory <strong>nejsou</strong> odesílány do AI systémů
                  automaticky. Uživatel musí vždy explicitně určit, které
                  soubory mají být pro AI funkce použity.
                </li>
                <li>
                  Takto určené soubory jsou dočasně zpracovány prostřednictvím
                  externích AI služeb třetí strany.
                </li>
                <li>
                  Tato třetí strana garantuje, že soubory nejsou použity pro
                  trénování AI modelů.
                </li>
                <li>
                  Data jsou uchovávána po omezenou dobu nezbytnou pro provoz
                  služby; přesná délka uchovávání ani geografická lokace
                  zpracování nejsou touto třetí stranou specifikovány.
                </li>
              </ul>
              <p>
                Uživatel bere na vědomí výše uvedené podmínky zpracování a
                používáním AI funkcí s nimi souhlasí.
              </p>

              <hr />

              <h2>5. Ochrana osobních údajů</h2>
              <p>
                Zpracování osobních údajů se řídí samostatným dokumentem –{" "}
                <strong>Zásadami ochrany osobních údajů</strong> (GDPR), které
                jsou dostupné na webových stránkách Aplikace.
              </p>

              <hr />

              <h2>6. Práva a povinnosti uživatele</h2>
              <p>
                6.1. Uživatel se zavazuje používat Aplikaci v souladu s platnými
                právními předpisy České republiky a EU.
              </p>
              <p>6.2. Uživatel nesmí:</p>
              <ul>
                <li>sdílet přístupové údaje s třetími osobami,</li>
                <li>
                  používat Aplikaci způsobem, který by mohl poškodit
                  provozovatele nebo ostatní uživatele,
                </li>
                <li>
                  pokoušet se o neoprávněný přístup k datům jiných uživatelů,
                </li>
                <li>
                  provádět reverse engineering nebo jakoukoliv dekompilaci
                  Aplikace.
                </li>
              </ul>
              <p>
                6.3. Uživatel odpovídá za obsah dat, která do Aplikace nahrává,
                a prohlašuje, že disponuje potřebnými právy k jejich použití.
              </p>

              <hr />

              <h2>7. Práva a povinnosti provozovatele</h2>
              <p>
                7.1. Provozovatel se zavazuje vyvíjet přiměřené úsilí k
                zajištění dostupnosti a funkčnosti Aplikace.
              </p>
              <p>7.2. Provozovatel si vyhrazuje právo:</p>
              <ul>
                <li>
                  Aplikaci nebo její části dočasně odstavit za účelem údržby,
                </li>
                <li>jednostranně měnit rozsah poskytovaných funkcí,</li>
                <li>
                  tyto Podmínky aktualizovat, přičemž o změnách Uživatele
                  informuje.
                </li>
              </ul>
              <p>
                7.3. Provozovatel nenese odpovědnost za škody vzniklé v
                důsledku výpadku Aplikace, ztráty dat nebo nedostupnosti služby
                třetí strany (Cloudflare, Google).
              </p>

              <hr />

              <h2>8. Platba a předplatné</h2>
              <p>
                8.1. Aplikace je poskytována na základě předplatného dle
                aktuálního ceníku zveřejněného na webových stránkách.
              </p>
              <p>
                8.2. Provozovatel si vyhrazuje právo změnit ceny předplatného,
                přičemž o změně informuje Uživatele nejméně 30 dní předem.
              </p>
              <p>
                8.3. Předplatné se automaticky obnovuje, pokud není Uživatelem
                zrušeno před koncem fakturačního období.
              </p>

              <hr />

              <h2>9. Duševní vlastnictví</h2>
              <p>
                9.1. Veškerá práva k Aplikaci, jejímu designu, kódu a obsahu
                náleží provozovateli.
              </p>
              <p>
                9.2. Data a dokumenty vytvořené Uživatelem v rámci Aplikace
                zůstávají majetkem Uživatele.
              </p>
              <p>
                9.3. Uživatel uděluje provozovateli nevýhradní licenci k využití
                dat výhradně v rozsahu nezbytném pro provoz Aplikace.
              </p>

              <hr />

              <h2>10. Omezení odpovědnosti</h2>
              <p>
                10.1. Aplikace je poskytována &bdquo;tak, jak je&ldquo;
                (as-is). Provozovatel neposkytuje záruky za správnost, úplnost
                ani vhodnost výstupů generovaných s pomocí AI pro jakýkoliv
                konkrétní účel.
              </p>
              <p>
                10.2. Výstupy generované AI funkcemi Aplikace mají pouze pomocný
                charakter a{" "}
                <strong>
                  nenahrazují odborný posudek autorizované osoby
                </strong>
                . Uživatel je povinen výstupy ověřit před jejich použitím v
                projektové dokumentaci.
              </p>
              <p>
                10.3. Celková odpovědnost provozovatele za škody vzniklé v
                souvislosti s užíváním Aplikace je omezena na výši předplatného
                uhrazeného Uživatelem za poslední 3 měsíce.
              </p>

              <hr />

              <h2>11. Rozhodné právo a řešení sporů</h2>
              <p>
                11.1. Tyto Podmínky se řídí právním řádem České republiky.
              </p>
              <p>
                11.2. Veškeré spory budou řešeny přednostně dohodou. Pokud
                nedojde k dohodě, jsou příslušné soudy České republiky.
              </p>

              <hr />

              <h2>12. Závěrečná ustanovení</h2>
              <p>
                12.1. Tyto Podmínky nabývají účinnosti dnem jejich zveřejnění.
              </p>
              <p>
                12.2. Provozovatel si vyhrazuje právo tyto Podmínky kdykoliv
                změnit. Aktuální verze je vždy dostupná v Aplikaci a na webových
                stránkách.
              </p>
              <p>
                12.3. Pokud by bylo některé ustanovení těchto Podmínek shledáno
                neplatným, ostatní ustanovení zůstávají v platnosti.
              </p>

              <hr />

              <p className="text-sm text-gray-500 italic">
                QIK Solutions s.r.o. | Zlín | podpora@qikx.cz
              </p>
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -left-20 w-60 h-60 bg-primary-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-primary-100/40 rounded-full blur-2xl" />
        </div>
      </main>
      <Footer />
    </>
  );
}
