import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function OchranaOsobnichUdajuPage() {
  return (
    <>
      <Header variant="dark" />
      <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Zásady ochrany osobních údajů
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
                Tyto zásady ochrany osobních údajů (dále jen
                &bdquo;Zásady&ldquo;) informují o tom, jakým způsobem QIK
                Solutions s.r.o. (dále jen &bdquo;Správce&ldquo;) zpracovává
                osobní údaje uživatelů aplikace QIK, dostupné na doméně
                qikapp.cz a projektova-dokumentace.cz (dále jen
                &bdquo;Aplikace&ldquo;).
              </p>
              <p>
                Správce zpracovává osobní údaje v souladu s Nařízením Evropského
                parlamentu a Rady (EU) 2016/679 (GDPR) a zákonem č. 110/2019
                Sb., o zpracování osobních údajů.
              </p>

              <hr />

              <h2>2. Správce osobních údajů</h2>
              <p>
                <strong>QIK Solutions s.r.o.</strong>
                <br />
                Jana Růžičky 1165/2a, Kunratice, 148 00 Praha
                <br />
                IČO: 19669674
                <br />
                Zapsáno: Městský soud v Praze, sp. zn. C 389960
                <br />
                Kontaktní e-mail: podpora@qikx.cz
              </p>
              <p>
                Správce nejmenoval pověřence pro ochranu osobních údajů (DPO),
                neboť mu tato povinnost nevzniká.
              </p>

              <hr />

              <h2>3. Jaké osobní údaje zpracováváme</h2>
              <p>Správce zpracovává následující osobní údaje:</p>
              <ul>
                <li>
                  <strong>Jméno a příjmení</strong> — za účelem identifikace
                  uživatelského účtu
                </li>
                <li>
                  <strong>E-mailová adresa</strong> — za účelem přístupu k účtu,
                  komunikace a zasílání provozních oznámení
                </li>
              </ul>
              <p>
                Správce nezpracovává zvláštní kategorie osobních údajů (tzv.
                citlivé údaje).
              </p>

              <hr />

              <h2>4. Účel a právní základ zpracování</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Účel zpracování</th>
                      <th>Právní základ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vytvoření a správa uživatelského účtu</td>
                      <td>
                        Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Provozní komunikace (oznámení o změnách, výpadcích)
                      </td>
                      <td>
                        Oprávněný zájem správce (čl. 6 odst. 1 písm. f) GDPR)
                      </td>
                    </tr>
                    <tr>
                      <td>Ochrana před zneužitím a bezpečnost systému</td>
                      <td>
                        Oprávněný zájem správce (čl. 6 odst. 1 písm. f) GDPR)
                      </td>
                    </tr>
                    <tr>
                      <td>Plnění právních povinností</td>
                      <td>
                        Právní povinnost (čl. 6 odst. 1 písm. c) GDPR)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr />

              <h2>5. Zpracování souborů a dokumentů v Aplikaci</h2>

              <h3>5.1. Soubory nahrané uživatelem</h3>
              <p>
                Soubory a přílohy nahrané do Aplikace jsou ukládány na serverech
                společnosti Cloudflare, Inc. Data jsou uložena v datových
                centrech na území Evropské unie.
              </p>

              <h3>5.2. Zpracování prostřednictvím AI funkcí</h3>
              <p>
                Pokud uživatel využije AI funkce Aplikace, soubory, které k tomu
                explicitně určí, jsou dočasně zpracovány prostřednictvím
                externích AI služeb třetí strany. Tato třetí strana garantuje, že
                soubory nejsou použity pro trénování AI modelů. Přesná délka
                uchovávání ani geografická lokace zpracování nejsou touto třetí
                stranou specifikovány.
              </p>
              <p>
                Uživatel bere na vědomí výše uvedené podmínky a používáním AI
                funkcí s nimi vyjadřuje souhlas.
              </p>

              <hr />

              <h2>6. Příjemci osobních údajů</h2>
              <p>Osobní údaje mohou být předány následujícím zpracovatelům:</p>
              <ul>
                <li>
                  <strong>Cloudflare, Inc.</strong> — ukládání souborů a příloh
                  (CDN a objektové úložiště)
                </li>
                <li>
                  <strong>Railway Corp.</strong> — provoz aplikační
                  infrastruktury (hosting)
                </li>
                <li>
                  <strong>Mailgun Technologies, Inc.</strong> — odesílání
                  provozních e-mailů (e-mailová adresa)
                </li>
                <li>
                  <strong>Poskytovatel AI služeb</strong> — dočasné zpracování
                  souborů v rámci AI funkcí (pouze soubory explicitně určené
                  uživatelem)
                </li>
                <li>
                  <strong>Orgány veřejné moci</strong> — v případě, kdy to
                  ukládá právní předpis
                </li>
              </ul>
              <p>
                Správce osobní údaje neprodává ani neposkytuje třetím stranám za
                marketingovými účely.
              </p>

              <hr />

              <h2>7. Předání osobních údajů do třetích zemí</h2>
              <p>
                Osobní údaje (jméno, e-mail) uložené na serverech Cloudflare jsou
                uchovávány v rámci EU.
              </p>
              <p>
                V případě zpracování souborů prostřednictvím AI funkcí může dojít
                k dočasnému přenosu dat mimo EU. Tento přenos probíhá na základě
                standardních smluvních doložek nebo jiného vhodného ochranného
                mechanismu ve smyslu čl. 46 GDPR.
              </p>

              <hr />

              <h2>8. Doba uchovávání osobních údajů</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Kategorie údajů</th>
                      <th>Doba uchovávání</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Údaje uživatelského účtu (jméno, e-mail)</td>
                      <td>
                        Po dobu trvání účtu, poté do 30 dnů od zrušení
                      </td>
                    </tr>
                    <tr>
                      <td>Fakturační záznamy</td>
                      <td>10 let (zákonná povinnost)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Po uplynutí doby uchovávání jsou údaje bezpečně smazány nebo
                anonymizovány.
              </p>

              <hr />

              <h2>9. Práva subjektu údajů</h2>
              <p>
                Uživatel má ve vztahu ke svým osobním údajům tato práva:
              </p>
              <ul>
                <li>
                  <strong>Právo na přístup</strong> — získat potvrzení, zda jsou
                  jeho údaje zpracovávány, a přístup k nim
                </li>
                <li>
                  <strong>Právo na opravu</strong> — požádat o opravu nepřesných
                  nebo neúplných údajů
                </li>
                <li>
                  <strong>Právo na výmaz</strong> (&bdquo;právo být
                  zapomenut&ldquo;) — požádat o smazání osobních údajů, pokud
                  odpadl důvod jejich zpracování
                </li>
                <li>
                  <strong>Právo na omezení zpracování</strong> — požádat o
                  dočasné omezení zpracování
                </li>
                <li>
                  <strong>Právo na přenositelnost</strong> — obdržet své údaje
                  ve strojově čitelném formátu
                </li>
                <li>
                  <strong>Právo vznést námitku</strong> — proti zpracování na
                  základě oprávněného zájmu
                </li>
                <li>
                  <strong>Právo odvolat souhlas</strong> — pokud je zpracování
                  založeno na souhlasu
                </li>
              </ul>
              <p>
                Žádosti lze podávat e-mailem na adresu:{" "}
                <strong>podpora@qikx.cz</strong>
              </p>
              <p>
                Správce odpoví bez zbytečného odkladu, nejpozději do{" "}
                <strong>30 dnů</strong> od obdržení žádosti.
              </p>

              <hr />

              <h2>10. Právo podat stížnost</h2>
              <p>Uživatel má právo podat stížnost u dozorového úřadu:</p>
              <p>
                <strong>Úřad pro ochranu osobních údajů (ÚOOÚ)</strong>
                <br />
                Pplk. Sochora 27, 170 00 Praha 7
                <br />
                www.uoou.cz
              </p>

              <hr />

              <h2>11. Cookies</h2>
              <p>
                Aplikace může využívat technické cookies nezbytné pro její provoz
                (přihlašování, bezpečnost relace). Tyto cookies nepodléhají
                souhlasu, neboť jsou nezbytné pro fungování služby. Aplikace
                nevyužívá analytické ani marketingové cookies.
              </p>

              <hr />

              <h2>12. Zabezpečení osobních údajů</h2>
              <p>
                Správce přijal technická a organizační opatření k ochraně
                osobních údajů před neoprávněným přístupem, ztrátou nebo
                zničením, včetně šifrování přenosu dat (HTTPS) a přístupu k
                datům pouze oprávněným osobám.
              </p>

              <hr />

              <h2>13. Změny Zásad</h2>
              <p>
                Správce si vyhrazuje právo tyto Zásady aktualizovat. O
                podstatných změnách bude uživatel informován e-mailem nebo
                oznámením v Aplikaci. Aktuální verze je vždy dostupná na webových
                stránkách Aplikace.
              </p>

              <hr />

              <p className="text-sm text-gray-500 italic">
                QIK Solutions s.r.o. | Jana Růžičky 1165/2a, Praha | IČO:
                19669674 | podpora@qikx.cz
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
