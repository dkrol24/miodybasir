import React from "react";
import { pierzga } from "./data";
const Pierzga = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          borderLeft: "5px dotted rgba(222,151,9,255)",
          borderRight: "5px dotted rgba(222,151,9,255)",
          padding: "1rem",
        }}
        className="banner-h1"
      >
        Dowiedz się więcej
      </h1>
      <div className="productdetail-kit">
        <p className="grey-ptext" style={{ maxWidth: "700px" }}>
          <span className="yellow-span">Pierzga zawiera</span> wiele
          dobroczynnych składników, które pozytywnie wpływają na stan zdrowia i
          samopoczucie. W jej składzie znajduje się:
        </p>
        <ul
          style={{
            width: "100%",
            listStyle: "none",
            maxWidth: "700px",
            margin: "0",
            padding: "0",
          }}
        >
          <li className="grey-ptext">
            <span style={{ color: "rgba(222,151,9,255)" }}>mikroelementy:</span>
            magnez, potas, sód, fosfor, żelazo, nikiel, cynk, selen, miedź,
            kobalt, krzem, chrom,
          </li>
          <li className="grey-ptext">
            <span style={{ color: "rgba(222,151,9,255)" }}>
              bogactwo witamin:
            </span>
            A, B1, B2, B3, B6, B12, C, PP, E, D, K, H
          </li>
          <li className="grey-ptext">
            <span style={{ color: "rgba(222,151,9,255)" }}>enzymy:</span>
            inwertaza, kataliza, pepsyna, trycyna, lipaza, laktaza.
          </li>
        </ul>
      </div>
      <div className="productdetail-kit">
        <h1 className="yellow-span">Właściwości lecznicze pierzgi</h1>
        <p className="grey-ptext" style={{ maxWidth: "700px" }}>
          Pierzga posiada właściwości odżywcze, antybakteryjne, odtruwające,
          dlatego zalecana jest do regeneracji organizmu po:
        </p>
        <ul
          style={{
            width: "100%",
            listStyle: "none",
            maxWidth: "700px",
            margin: "0",
            padding: "0",
          }}
        >
          <li className="grey-ptext">
            <span style={{ color: "rgba(222,151,9,255)" }}>
              • operacji, zawale serca, kuracji antybiotykiem, intensywnym
              treningu
            </span>
          </li>
          <li className="grey-ptext">
            • wzmocnienie organizmu, stymulacja układu nerwowego, zapobieganie
            infekcjom, wzmocnienie odporności działa antybakteryjnie, poprawia
            apetyt,
          </li>
          <li className="grey-ptext">
            • wspomaga układ pokarmowy (wrzody żołądka, zaparcia, biegunki).
          </li>
        </ul>
        <h1 className="yellow-span">
          Wspiera walkę z wieloma chorobami i schorzeniami, takimi jak:
        </h1>
        <ul
          style={{
            width: "100%",
            listStyle: "none",
            maxWidth: "700px",
            margin: "0",
            padding: "0",
          }}
        >
          <li className="grey-ptext">• chorobami jelit</li>
          <li className="grey-ptext">• nadciśnieniu</li>
          <li className="grey-ptext">• choroby skóry typu łuszczyca</li>
          <li className="grey-ptext">• nowotwór</li>
          <li className="grey-ptext">
            • stan zapalny jamy ustnej, gardła i przełyku
          </li>
          <li className="grey-ptext">• dolegliwości trawienne</li>
          <li className="grey-ptext">• zaburzenia przemiany materii,</li>
          <li className="grey-ptext">• choroby żołądka i jelit</li>
          <li className="grey-ptext">• zaparcia</li>
          <li className="grey-ptext">• choroby wątroby</li>
          <li className="grey-ptext">
            • choroby pęcherza żółciowego i trzustki
          </li>
          <li className="grey-ptext">• cukrzyca</li>
          <li className="grey-ptext">• dna moczanowa</li>
          <li className="grey-ptext">• przerost prostaty</li>
          <li className="grey-ptext">• choroby nerek</li>
          <li className="grey-ptext">• katar sienny</li>
          <li className="grey-ptext">• astma</li>
          <li className="grey-ptext">• reumatoidalne zapalenie stawów</li>
          <li className="grey-ptext">• depresja</li>
          <li className="grey-ptext">• choroby immunologiczne</li>
          <li className="grey-ptext">• schorzenia wieku starczego</li>
          <li className="grey-ptext">• problemy ze wzrokiem</li>
          <li className="grey-ptext">• ogólne osłabienie</li>
          <li className="grey-ptext">• menopauza</li>
        </ul>
      </div>

      <div className="productdetail-kit">
        <h1 className="yellow-span">Pierzga - dawkowanie</h1>
        <p className="grey-ptext">
          Pierzga często jest stosowana w celu wzmocnienia organizmu oraz
          zaspokojenia zapotrzebowania na witaminy. Dzieci w wieku 3-12 lat
          powinny spożywać 10-15 gramów dziennie, natomiast dzieci powyżej 12
          lat i dorośli – 20-30 gramów na dobę.
        </p>
        <p className="grey-ptext">
          Najlepiej spożywać ją dwa razy dziennie - rano na czczo i wieczorem
          przed snem. Można zażywać ją również trzy razy dziennie, 1-2 godziny
          po posiłku. Według zachodniej literatury zwiększenie dawkowania
          pierzgi do 4 łyżeczek dziennie jest zalecane po kuracji antybiotykiem,
          ludziom starszym, osobom intensywnie trenującym i osobom wycieńczonych
          nerwowo. Kurację pierzgą najlepiej przeprowadzać dwa razy w roku przez
          30-60 dni, najlepiej w czasie wiosny i jesieni. Przerwa powinna
          wynosić trzy miesiące.
        </p>
        <p className="grey-ptext">
          <span className="yellow-span">Stosowanie pierzgi</span>
          Pierzgę można stosować na wiele różnych sposobów, ponieważ w smaku nie
          różni się znacząco od miodu. Można po prostu zjeść odpowiednią ilość
          produktu lub rozpuścić ziarenka w filiżance z wodą, sokiem, mlekiem,
          jogurtem lub miodem. Ważne, by płyn nie był gorący, temperatura
          powyżej 40 stopni Celsjusza dezaktywuje większość wartości odżywczych.
          Pierzgę można również zalać wieczorem i wypić dopiero rano. Osoby
          żywione sztucznie mogą wprowadzać do żołądka lub jelit pierzgę
          rozpuszczoną w wodzie. Kurację można też łączyć z zażywaniem leków
          farmaceutycznych.
        </p>
        <p className="grey-ptext">
          <span className="yellow-span">Przeciwwskazania</span>
          Pierzga pszczela to substancja, która jest bardzo dobrze tolerowana
          przez organizm i nie wywołuje żadnych skutków ubocznych. Wyjątkiem
          jest uczulenie na produkty pszczele, w takiej sytuacji stosowanie
          produktu nie jest zalecane, ponieważ może wystąpić reakcja alergiczna.
          Pierzga nie powinna być również zażywana w nadmiarze, ponieważ
          przyczynia się do przybierania na wadze ze względu na wysoką zawartość
          cukru.
        </p>
      </div>
      <div className="productdetail-kit">
        <h1 className="yellow-span">Pierzga - zastosowanie w kosmetyce</h1>
        <p className="grey-ptext">
          Pierzga pszczela ze względu na wysoką zawartość kwasu L-mlekowego
          stabilizuje odnowę komórkową skóry i usuwa zrogowaciałe komórki. Jest
          odpowiedzialna za poprawę struktury i kolorytu skóry. Kwas mlekowy
          sprawia, że skóra lepiej wchłania składniki zawarte w kremach, nie
          traci wody i dłużej utrzymuje nawilżenie. Tworzy większe ilości
          kolagenu, który zwiększa grubość cery, wygładza mniejsze zmarszczki i
          ujędrnia.
        </p>
        <p className="grey-ptext">
          Pierzga sprawia, że znika problem z zablokowanymi porami, ogniska
          zapalne, wypryski i zaskórniki. Obecna w składzie witamina K naprawia
          uszkodzenia naczyń krwionośnych, redukuje cienie pod oczami i
          podskórne wylewy.
        </p>
        <p className="grey-ptext">
          Na rynku obecnie nie ma kremów z witaminą K, ponieważ wywoływały
          reakcje alergiczne. Obecnie najlepszych sposobem jest uzupełnianie tej
          substancji za pomocą diety, na przykład poprzez spożywanie pierzgi i
          pietruszki.
        </p>
        <p className="grey-ptext">
          Pierzga pszczela świetnie działa stosowana bezpośrednio na skórę jako
          składnik domowych maseczek. Można ją traktować jako lepszy zamiennik
          miodu w kosmetykach.
        </p>
      </div>
      <div className="productdetail-kit">
        <h1 className="yellow-span">Pierzga - zastosowanie lecznicze</h1>
        <ul
          style={{
            width: "100%",
            listStyle: "none",
            maxWidth: "700px",
            margin: "0",
            padding: "0",
          }}
        >
          <li style={{ margin: "1.5rem 0 1.5rem 0" }} className="grey-ptext">
            <span style={{ color: "rgba(222,151,9,255)" }}>
              • Przewlekłe zapalenie wątroby{" "}
            </span>
            zarówno na tle bakteryjnym jak i wirusowym. Produkt wpływa na
            rozkład obumarłych komórek i martwych mikroorganizmów, osłania
            wątrobę, reguluje jej pracę, obniża poziom bilirubiny, ochrania
            komórki wątrobowe przed działaniem czynników toksycznych. Sprawdza
            się w leczeniu ostrego i przewlekłego zapalenia wątroby, jej
            uszkodzeń, zarówno pourazowych jak i toksycznych. Potrafi zahamować
            proces zapalny, martwicę i stłuszczenie komórek wątrobowych.
            Ponadto, pobudza organizm do tworzenia hemoglobiny i czerwonych
            ciałek, nawet w przypadkach, w których nie skutkowały preparaty
            zawierające żelazo.
          </li>
          <li style={{ margin: "1.5rem 0 1.5rem 0" }} className="grey-ptext">
            <span style={{ color: "rgba(222,151,9,255)" }}>
              • Poprawia strukturę anatomiczną i funkcjonowanie błony śluzowej
              żołądka, reguluje procesy przemiany materii, pobudza funkcje
              organizmu, zwłaszcza trawienie
            </span>{" "}
            przejawia niezwykłą mądrość natury, przeciwdziała i nadwadze, i
            niedowadze. Leczy ostre zaparcia, łagodzi uporczywe biegunki, pomaga
            w chorobie wrzodowej żołądka i dwunastnicy, w zapaleniach
            wrzodziejącego jelita grubego. Pierzga zawiera antybiotyki, hamujące
            rozwój bakterii, działa w zakażeniach bakteryjnych i wirusowych,
            niszczy szkodliwe mikroorganizmy np. salmonelle, sprzyja rozwijaniu
            się pożytecznych. Dzięki zawartości biopierwiastków i witamin w
            odpowiednich proporcjach, jest cennym środkiem wzmacniającym system
            odpornościowy, wypróbowanym w profilaktyce chorób. Produkt ten
            uchodzi za doskonałą odzywkę ogólnoustrojową, rekonwalescentom
            pozwala szybciej wrócić do pełni sił.
          </li>
          <li style={{ margin: "1.5rem 0 1.5rem 0" }} className="grey-ptext">
            • Pierzga jest pomocna w{" "}
            <span style={{ color: "rgba(222,151,9,255)" }}>
              zaburzeniach wzrostu
            </span>
            , procesach rozwojowych. Ale też przy dolegliwościach w{" "}
            <span style={{ color: "rgba(222,151,9,255)" }}>
              okresie klimakterium
            </span>
            , wypadaniu włosów, łamiących się paznokciach, zmianach skórnych.
          </li>
          <li style={{ margin: "1.5rem 0 1.5rem 0" }} className="grey-ptext">
            <span style={{ color: "rgba(222,151,9,255)" }}>
              • Obniża poziom cholesterolu{" "}
            </span>
            oraz{" "}
            <span style={{ color: "rgba(222,151,9,255)" }}>
              hamuje zlepianie się płytek krwi
            </span>
            Pierzga pomaga w stanach pozawałowych, zaburzeniach krążenia
            obwodowego, nadciśnieniu tętniczym, miażdżycy naczyń wieńcowych
            serca.
          </li>
          <li style={{ margin: "1.5rem 0 1.5rem 0" }} className="grey-ptext">
            • Przyjmowanie pierzgi{" "}
            <span style={{ color: "rgba(222,151,9,255)" }}>
              wzmacnia ośrodkowy układ nerwowy{" "}
            </span>
            , obniża stany napięcia nerwowego i pobudzenia psycho – ruchowego,
            poprawia samopoczucie, działa uspakajająco. Jest więc zalecana,
            zwłaszcza w chorobach psychicznych, zaburzeniach starczych,
            nerwicach, stanach wyczerpania psychicznego. Wzmacniając produkcję
            endorfin w mózgu, pomaga w leczeniu depresji, wspomaga działanie
            leków przeciwdepresyjnych, pozwala na zastosowanie ich zmniejszonych
            dawek. Redukuje objawy niepożądane leków antydepresyjnych,
            podtrzymuje pacjenta w dobrej kondycji po ich odstawieniu.
          </li>
          <li style={{ margin: "1.5rem 0 1.5rem 0" }} className="grey-ptext">
            • Pierzga pobudza zamierające komórki,{" "}
            <span style={{ color: "rgba(222,151,9,255)" }}>
              Poprawia ukrwienie tkanki nerwowej
            </span>
            , sprawność umysłową, koncentrację, ułatwia przyswajanie wiadomości,
            poprawia pamięć. Szczególnie dobre wyniki leczeniem pierzgą
            obserwuje się u osób starszych, u których spadek sił życiowych i
            depresje uzależnione są bardziej od wieku niż od czynników
            środowiskowych. Pomaga przywracać sprawność w przypadkach wczesnego
            starzenia się.
          </li>
          <li style={{ margin: "1.5rem 0 1.5rem 0" }} className="grey-ptext">
            • Zastosowanie substancji tworzonej przez pszczoły korzystnie działa
            w{" "}
            <span style={{ color: "rgba(222,151,9,255)" }}>
              chorobach narządu wzroku
            </span>
            , zapaleniach siatkówki, rogówki, spojówek. Kuracja pierzgą pszczelą
            pobudza rozwój nerwu wzrokowego u dzieci. Osoby ją zażywające,
            zauważają poprawę widzenia, ostrości wzroku.
          </li>
          <li style={{ margin: "1.5rem 0 1.5rem 0" }} className="grey-ptext">
            • Pyłkowa kuracja zalecana jest też{" "}
            <span style={{ color: "rgba(222,151,9,255)" }}>
              u dzieci rachitycznych
            </span>
            , z opóźnieniami rozwoju umysłowego i wzrostu.
          </li>
          <li style={{ margin: "1.5rem 0 1.5rem 0" }} className="grey-ptext">
            • Pierzga pszczela zdobywa popularność w{" "}
            <span style={{ color: "rgba(222,151,9,255)" }}>
              leczeniu zmian zapalnych i przerostowych gruczołu krokowego
            </span>
            , występujących u ok. 30% mężczyzn w wieku 50 - 60 lat.
          </li>
          <li style={{ margin: "1.5rem 0 1.5rem 0" }} className="grey-ptext">
            • Pierzga jest wymieniana jako środek pomocny{" "}
            <span style={{ color: "rgba(222,151,9,255)" }}>
              w bólach mięśni i kręgosłupa
            </span>
            , chronicznym zmęczeniu, depresji nerwicowej, dysleksji u dzieci,
            dystrofii mięśniowej, jadłowstręcie psychicznym, łysieniu, siwieniu
            włosów, łuszczycy, w leczeniu marskości wątroby, nadczynności
            tarczycy, ropnych procesów wokół zębów, stwardnienia rozsianego,
            szkarlatyny, zapalenia zatok, w zaburzeniach seksualnych,
            dolegliwościach prostaty, niepłodności męskiej, osłabieniu popędu
            płciowego.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pierzga;
