import React from "react";

const regulamin = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "rgba(225, 153, 9,0.1)",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1250px",
          height: "100%",
          marginTop: "7rem",
          textAlign: "start",
          alignItems: "flex-start",
          padding: "0.5rem",
          color: "rgb(95, 94, 94)",
        }}
      >
        <h2 style={{ color: "rgb(95, 94, 94)" }}>Regulamin</h2>
        <h4 style={{ color: "rgb(95, 94, 94)" }}>§1 DEFINICJE</h4>
        <p>Użyte w niniejszym Regulaminie pojęcia oznaczają:</p>
        <ul style={{ listStyleType: "none" }}>
          <li>
            1. SKLEP INTERNETOWY – sklep działający pod adresem
            http://www.chlodnice-konarscy.com, w którym Klient może za
            pośrednictwem Internetu zawrzeć Umowę sprzedaży lub umowę o
            świadczenie Usługi elektronicznej produktów oferowanych przez miody
            Konarscy;
          </li>
          <li>
            2. KLIENT – osoba fizyczna posiadająca pełną zdolność do czynności
            prawnych, a w wypadkach przewidzianych przez przepisy powszechnie
            obowiązujące także osoba fizyczna posiadająca ograniczoną zdolność
            do czynności prawnych; osoba prawna albo jednostka organizacyjna
            nieposiadająca osobowości prawnej, której ustawa przyznaje zdolność
            prawną, a która zamierza zawrzeć lub zawarła Umowę sprzedaży lub
            umowę o świadczenie Usługi elektronicznej oraz, która na zasadach
            określonych w niniejszym regulaminie dokonuje rejestracji lub
            zarejestrowała się w Sklepie Internetowym;
          </li>
          <li>
            3. KONSUMENT – Klient będący osobą fizyczną, korzystającą ze Sklepu
            Internetowego w celu niezwiązanym bezpośrednio z jego działalnością
            gospodarczą lub zawodową, który na zasadach określonych w niniejszym
            regulaminie dokonuje rejestracji lub zarejestrowała się w Sklepie
            Internetowym;
          </li>
          <li>
            4. DNI ROBOCZE – wszystkie dni tygodnia od poniedziałku do piątku, z
            wyłączeniem dni ustawowo wolnych od pracy;
          </li>
          <li>
            5. CZAS REALIZACJI ZAMÓWIENIA – czas, w jakim miody Konarscy
            skompletuje zamówienie i przekaże do wysłania za pośrednictwem
            poczty lub kuriera, na adres wskazany przez Klienta;
          </li>
          <li>
            6. NEWSLETTER – gazetka (elektroniczna) wydawana periodycznie przez
            miody Konarscy, w której zamieszczane są m.in. informacje na temat
            oferty Sklepu Internetowego oraz o promocjach;
          </li>
          <li>
            7. BAZA SKLEPU INTERNETOWEGO – baza zawierająca dane na temat
            przeprowadzanych transakcji oraz towarów, które są oferowane w
            Sklepie Internetowym. W bazie przechowywane są również dane na temat
            Klientów korzystających ze Sklepu Internetowego służące do
            realizacji składanych przez nich zamówień;
          </li>
          <li>
            8. KOSZYK – element Sklepu Internetowego, za pomocą którego Klient
            precyzuje szczegóły zamówienia takie jak: ilość produktów, adres
            dostawy, dane do faktury, sposób dostawy, sposób płatności, itp.;
          </li>
          <li>
            9. STRONA PRODUKTOWA – strona w Sklepie Internetowym, na której
            przedstawione są informacje na temat produktu;
          </li>
          <li>
            10. ODDZIAŁ miody KONARSCY – tradycyjny, stacjonarny punkt usługowy
            i sprzedaży detalicznej.
          </li>
          <li>
            11. URUCHOMIENIE LINKU– naciśnięcie i zwolnienie lewego przycisku
            myszy po przeniesieniu kursora myszy na określony obiekt na stronie
            internetowej lub w treści wiadomości e-mail.
          </li>
          <li>
            12. REJESTRACJA – jednorazowa czynność, polegająca na utworzeniu
            przez Klienta Konta, dokonana z wykorzystaniem formularza
            rejestracyjnego udostępnionego przez Usługodawcę na stronie Sklepu.
          </li>
          <li>
            13. PRODUKT – rzecz ruchoma dostępna w Sklepie internetowym będąca
            przedmiotem Umowy sprzedaży między Klientem, a Sprzedawcą.
          </li>
          <li>
            14. REGULAMIN – niniejszy regulamin Sklepu internetowego miody
            Konarscy.
          </li>
          <li>
            15. SPRZEDAWCA – Konarski Sławomir Skup, Sprzedaż, Regeneracja
            Chłodnic, z siedzibą przy ul. Elizy Orzeszkowej 2a, 05-660 Warka,
            NIP: 797-124-89-01, REGON 670882053, wpisaną do rejestru
            przedsiębiorców prowadzonego przez Urząd Miasta i Gminy Warka pod
            numerem 1638, zwanym dalej miody Konarscy.
          </li>
          <li>16. STRONA – Usługodawca, Sprzedawca lub Klient.</li>
          <li>
            17. UMOWA SPRZEDAŻY (UMOWA) – umowa sprzedaży Produktu w rozumieniu
            Kodeksu cywilnego zawierana za pośrednictwem Sklepu internetowego.
          </li>
          <li>
            18. USŁUGA ELEKTRONICZNA – usługa świadczona drogą elektroniczną
            przez Usługodawcę za pośrednictwem Sklepu internetowego.
          </li>
          <li>
            19. USŁUGODAWCA – Konarski Sławomir Skup, Sprzedaż, Regeneracja
            Chłodnic, z siedzibą przy ul. Elizy Orzeszkowej 2a, 05-660 Warka,
            NIP: 797-124-89-01, REGON 670882053, wpisaną do rejestru
            przedsiębiorców prowadzonego przez Urząd Miasta i Gminy Warka pod
            numerem 1638, zwanym dalej miody Konarscy.
          </li>
          <li>
            20. ZAMÓWIENIE – oświadczenie woli Klienta zmierzające bezpośrednio
            do zawarcia Umowy sprzedaży Produktu i określające istotne jej
            warunki.
          </li>
          <li>
            21. KODEKS CYWILNY – ustawa Kodeks cywilny z dn. 23 kwietnia 1964 r.
            (Dz. U. Nr 16, poz. 93 ze zm.).
          </li>
          <li>
            22. HASŁO – ciąg znaków alfanumerycznych konieczny do dokonania
            autoryzacji w trakcie uzyskiwania dostępu do Konta, ustalany
            samodzielnie przez Klienta podczas procesu Rejestracji.
          </li>
          <li>
            23. KONTO (KONTO KLIENTA) – podstrona Sklepu, w ramach której
            gromadzone są m.in informacje o Zamówieniach Klienta w Sklepie
            internetowym.
          </li>
        </ul>
        <h4 style={{ color: "rgb(95, 94, 94)" }}>§2 POSTANOWIENIA OGÓLNE</h4>
        <ul style={{ listStyleType: "none" }}>
          <li>
            2. Postanowienia niniejszego Regulaminu nie mają na celu wyłączać
            ani ograniczać jakichkolwiek praw Klienta będącego jednocześnie
            Konsumentem przysługujących mu na mocy bezwzględnie wiążących
            przepisów prawa. W przypadku niezgodności postanowień niniejszego
            Regulaminu z powyższymi przepisami, pierwszeństwo mają te przepisy.
          </li>
          <li>
            3. Regulamin określa zasady korzystania przez Klientów ze Sklepu
            Internetowego.
          </li>
          <li>
            4. Niniejszy Regulamin jest regulaminem, o którym mowa w art. 8
            ustawy z dnia 18 lipca 2002 r. oświadczeniu usług drogą
            elektroniczną (Dz. U. z 2002 r. Nr 144, poz. 1204 ze zm.), a także
            reguluje warunki zawierania Umów sprzedaży w Sklepie internetowym.
          </li>
          <li>
            5. Sklep Internetowy miody Konarscy działający pod adresem
            http://www.miodykonarscy.pl, stanowi teleinformatyczną platformę
            sprzedażową prowadzoną przez:
          </li>
        </ul>
        <p>
          6. Usługodawca świadczy za pośrednictwem Sklepu internetowego
          następujące Usługi elektroniczne:
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li>Konto Klienta w Sklepie internetowym;</li>
          <li>
            Interaktywny formularz umożliwiający Klientom złożenie Zamówienia w
            Sklepie internetowym.
          </li>
        </ul>
        <p>
          7. Minimalne wymagania techniczne niezbędne do współpracy z systemem
          teleinformatycznym, którym posługuje się Usługodawca:
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li>- Komputer z dostępem do Internetu;</li>
          <li>- Dostęp do poczty elektronicznej.</li>
          <li>- Zalecana rozdzielczość monitora: 1024x768 pikseli;</li>
          <li>
            - Przeglądarka internetowa: Internet Explorer w wersji 7.0 lub
            nowszej z włączoną obsługą, JavaScript i cookies; Mozilla Firefox w
            wersji 3.0 lub nowszej z włączoną obsługą JavaScript i cookies; albo
            Google Chrome w wersji 8 lub nowszej.
          </li>
        </ul>
        <p>
          8. Klienta obowiązuje zakaz dostarczania treści o charakterze
          bezprawnym.
        </p>
        <p>
          9. Klient obowiązany jest do wprowadzania danych zgodnych ze stanem
          faktycznym.
        </p>
        <p>
          10. Klient obowiązany jest do korzystania ze Sklepu internetowego w
          sposób zgodny z prawem i dobrymi obyczajami mając na uwadze
          poszanowanie dóbr osobistych i praw własności intelektualnej osób
          trzecich.
        </p>
        <p>
          11. W celu zapewnienia bezpieczeństwa przekazu komunikatów Usługodawca
          podejmuje środki techniczne i organizacyjne odpowiednie do stopnia
          zagrożenia bezpieczeństwa świadczonej Usługi elektronicznej.
        </p>
        <h4 style={{ color: "rgb(95, 94, 94)" }}>
          § 3 ŚWIADCZENIE USŁUG ELEKTRONICZNYCH
        </h4>
        <p>
          1. W ramach Sklepu Usługodawca zobowiązuje się do świadczenia Usług
          elektronicznych w zakresie i na warunkach określonych w niniejszym
          Regulaminie.
        </p>
        <p>
          2. Świadczenie przez Usługodawcę Usług elektronicznych jest bezpłatne.
        </p>
        <p>3. Warunki zawierania umów o świadczenie Usług elektronicznych:</p>
        <ul style={{ listStyleType: "none" }}>
          <li>
            - Umowa o świadczenie Usługi elektronicznej polegającej na
            prowadzeniu Konta Klienta w Sklepie internetowym zostaje zawarta w
            momencie dokonania Rejestracji.
          </li>
          <li>
            Do dokonania Rejestracji niezbędne jest podanie w formularzu
            rejestracyjnym następujących danych przez Klienta: adres e-mail oraz
            hasło.
          </li>
          <li>
            Umowa o świadczenie Usługi elektronicznej polegającej na
            udostępnieniu interaktywnego formularza umożliwiającego złożenie
            Zamówienia w Sklepie internetowym zostaje zawarta w momencie
            rozpoczęcia korzystania z powyższej Usługi (dodanie Produktu do
            koszyka).
          </li>
        </ul>
        <p>
          4. Umowa o świadczenie Usługi elektronicznej polegającej na
          prowadzeniu Konta Klienta w Sklepie internetowym jest zawierana na
          czas nieoznaczony.
        </p>
        <p>
          5. Umowa o świadczenie Usługi elektronicznej polegającej na
          udostępnieniu interaktywnego formularza umożliwiającego złożenie
          Zamówienia w Sklepie internetowym jest zawierana na czas oznaczony i
          ulega rozwiązaniu z chwilą złożenia Zamówienia.
        </p>
        <p>
          6. Warunki rozwiązywania umów o świadczenie Usług elektronicznych:
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li>
            Klient może wypowiedzieć umowę o świadczenie Usługi elektronicznej
            zawartą na czas nieoznaczony w każdym czasie i bez wskazania
            przyczyn, z zachowaniem 7–dniowego terminu wypowiedzenia.
          </li>
          <li>
            Usługodawca może wypowiedzieć umowę o świadczenie Usługi
            elektronicznej zawartą na czas nieoznaczony w wypadku, gdy Klient
            obiektywnie rażąco lub uporczywie narusza Regulamin, w szczególności
            gdy dostarcza treści o charakterze bezprawnym. Naruszenie regulaminu
            musi mieć charakter obiektywny i bezprawny. Wypowiedzenie może być
            złożone po bezskutecznym co najmniej jednokrotnym wezwaniu do
            zaprzestania lub usunięcia naruszeń z wyznaczeniem stosownego
            terminu. Rozwiązanie umowy następuje w takim wypadku z zachowaniem
            14–dniowego okresu wypowiedzenia.
          </li>
          <li>
            Wypowiedzenie umowy o świadczenie Usługi elektronicznej zawartej na
            czas nieoznaczony przez którąkolwiek ze Stron nie narusza praw lub
            świadczeń nabytych przez Strony w czasie trwania umowy.
          </li>
          <li>
            Niezależnie od powyższych postanowień Strony mogą rozwiązać umowę o
            świadczenie Usługi elektronicznej w każdym czasie w drodze
            porozumienia Stron.
          </li>
        </ul>
        <h4 style={{ color: "rgb(95, 94, 94)" }}>
          § 4 WARUNKI ZAWIERANIA UMOWY SPRZEDAŻY
        </h4>
        <p>
          1. Klient może składać zamówienia przez 24 (dwadzieścia cztery)
          godziny na dobę za pośrednictwem strony internetowej
          http://www.miodykonarscy.pl. Klient po zarejestrowaniu się i
          zalogowaniu, składa zamówienie, wskazując na Stronie produktowej
          produktu, którym jest zainteresowany, poprzez uruchomienie linku
          ukrytego pod polem „Dodaj do koszyka”, a następnie w Koszyku wskazuje
          sposób odbioru i płatności za zamówienie.
        </p>
        <ul style={{ listStyleType: "none" }}>
          2. W zamówieniu (w Koszyku), Klient wskazuje:
          <li>zamawiany towar;</li>
          <li>adres, na jaki ma być dostarczony towar;</li>
          <li>sposób dostawy;</li>
          <li>sposób płatności.</li>
        </ul>
        <p>
          3. Procedura składania zamówienia kończy się w momencie uruchomienia
          przez Klienta linku ukrytego pod polem „Złóż zamówienie”. Dokonanie
          tej czynności oznacza złożenie zamówienia i zawarcie z miody Konarscy
          umowy kupna-sprzedaży produktów objętych zamówieniem.
        </p>
        <p>
          4. Na adres email wskazany podczas rejestracji miody Konarscy wysyła
          wiadomość potwierdzającą przyjęcie zamówienia do realizacji.
        </p>
        <p>
          5. Klient dokonując wyboru sposobu płatności ma zawsze możliwość
          wyboru płatności przy odbiorze zamówionych produktów.
        </p>
        <h4 style={{ color: "rgb(95, 94, 94)" }}>§ 5 CENY TOWARÓW</h4>
        <p>
          1. Sklep Internetowy zamieszcza informacje na temat swojej oferty na
          stronie http://www.miodykonarscy.pl i oferuje towary znajdujące się w
          bazie Sklepu Internetowego za pośrednictwem Internetu.
        </p>
        <p>
          2. Ceny na stronie Sklepu Internetowego zamieszczone przy oferowanym
          produkcie na Stronie produktowej:
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li>1. zawierają podatek VAT i podawane są w złotych polskich;</li>
          <li>2. nie zawierają informacji na temat kosztów przesyłki;</li>
        </ul>
        <p>
          Ceną wiążącą i ostateczną produktu jest jego cena podana na Stronie
          produktowej w chwili składania zamówienia przez Klienta.
        </p>
        <p>
          Informacja na temat całkowitej wartości zamówienia obejmująca również
          koszty przesyłki, przedstawiana jest na stronie
          http://www.miodykonarscy.pl, po dokonaniu przez Klienta wyboru formy
          dostawy zamówienia i formy płatności (patrz §4).
        </p>
        <p>
          miody Konarscy zastrzega sobie prawo do dokonania na bieżąco zmian w
          cenach towarów znajdujących się w ofercie oraz przeprowadzania i
          odwoływania wszelkiego rodzaju akcji promocyjnych oraz wyprzedaży.
          Uprawnienie, o którym mowa w zdaniu poprzednim nie ma wpływu na
          zamówienia złożone przed datą wejścia w życie zmiany ceny, warunków
          akcji promocyjnych lub wyprzedaży i będą one realizowane na zasadach
          dotychczasowych.
        </p>
        <p>
          Promocje w Sklepie Internetowym nie podlegają łączeniu o ile regulamin
          danej promocji nie stanowi inaczej.
        </p>
        <p>
          Ceny towarów obowiązujące w Sklepie Internetowym obowiązują jedynie
          przy składaniu zamówienia za pośrednictwem Internetu na stronie
          internetowej http://www.miodykonarscy.pl. W przypadku dokonywania
          zakupów w Oddziale miody Konarscy obowiązują ceny określone dla
          produktów sprzedawanych bezpośrednio w Oddziale.
        </p>
        <h4 style={{ color: "rgb(95, 94, 94)" }}>
          § 6 FORMY PŁATNOŚCI I DOSTAWY
        </h4>
        <p>1. Zapłaty za zamówione produkty można dokonać:</p>
        <ul style={{ listStyleType: "none" }}>
          <li>
            gotówką w przypadku dostarczenia zamówienia za pośrednictwem firmy
            spedycyjnej lub innego podmiotu dostarczającego przesyłki;
          </li>
          <li>przelewem elektronicznym,</li>
          <li>zwykłym przelewem na rachunek bankowy</li>
        </ul>
        <p>
          2. miody Konarscy umożliwi dokonywanie płatności elektronicznych za
          zamówione produkty za pomocą system oferowanego przez PayU S.A. -
          spółka PayU S.A. z siedzibą w Poznaniu (adres siedziby: ul.
          Grunwaldzka 182, 60-166 Poznań), wpisana do Rejestru Przedsiębiorców
          Krajowego Rejestru Sądowego pod numerem 0000274399, akta rejestrowe
          przechowywane przez Sąd Rejonowy Poznań – Nowe Miasto i Wilda w
          Poznaniu, kapitał zakładowy w wysokości 4.000.000 zł w całości
          opłacony, NIP: 779-23-08-495, udostępniając następujące sposoby
          płatności: Inteligo, mBank, BZ WBK, BPH, ING, KredytBank, InvestBank,
          Lukas Bank, Pekao, BGŻ, Millenium, PKO BP, MultiBank, BOŚ, Citi
          Handlowy, Nordea, Deutsche Bank, Fortis, Euro Bank, Raiffeisen, SGB,
          Alior, Bank Pocztowy, GetIn, Volkswagen Bank, Polbank, FM Bank,
          MeritumBank, Bank HSBC, Karty, PayPal, Moneybookers.
        </p>
        <p>
          3. W przypadku gdy rachunek bankowy sprzedawcy nie został uznany kwotą
          należności w ciągu 5 dni od dnia zatwierdzenia zamówienia umowa
          zawarta między Klientem a Sprzedawcą ulega rozwiązaniu.
        </p>
        <p>
          4. Dostawa zamówionych towarów odbywa się za pośrednictwem firmy
          spedycyjnej.
        </p>
        <p>
          5. Dostawa zamówionych towarów odbywa się wyłącznie na terytorium
          Rzeczypospolitej Polskiej.
        </p>
        <p>
          6. W przypadku woli złożenia przez Klienta zamówienia, które miałoby
          zostać dostarczone poza granice Rzeczypospolitej Polskiej, Klient
          powinien skontaktować się z przedstawicielem miody Konarscy mailowo,
          na adres: admin@chlodnice-konarscy.com lub telefonicznie, na numer
          telefonu: 48 667 20 01 w celu indywidualnego ustalenia warunków
          realizacji takiego zamówienia, w tym w szczególności kosztów dostawy
          produktów objętych takim zamówieniem.
        </p>
        <h4 style={{ color: "rgb(95, 94, 94)" }}>§ 7 REALIZACJA ZAMÓWIEŃ</h4>
        <p>
          Przez zrealizowanie zamówienia należy rozumieć dostarczenie
          zamówionych produktów do Klienta.
        </p>
        <p>Zamówienia będą realizowane niezwłocznie po ich złożeniu.</p>
        <p>
          Zamówienie zostanie zrealizowane najpóźniej w terminie czternastu dni
          po złożeniu przez konsumenta zamówienia.
        </p>
        <p>
          Jeżeli miody Konarscy nie może zrealizować zamówienia z powodu
          niedostępności zamówionego produktu, niezwłocznie, najpóźniej jednak w
          terminie czternastu dni od dnia złożenia przez Klienta zamówienia,
          zawiadomi o tym Klienta i jeżeli otrzymał zapłatę zwrócić całą
          otrzymaną od Klienta sumę pieniężną.
        </p>
        <h4 style={{ color: "rgb(95, 94, 94)" }}>
          § 8 WARUNKI REKLAMACJI (ZGŁOSZENIE NIEZGODNOŚCI TOWARU Z UMOWĄ)
        </h4>
        <p>1. Reklamacje należy składać na adres miody Konarscy.</p>
        <p>
          2. Składając reklamację należy dostarczyć do miody Konarscy
          reklamowany produkt wraz z dowodem zakupu i wypełnionym zgłoszeniem
          reklamacyjnym, dostępnym pod adresem: ….
        </p>
        <p>
          3. miody Konarscy rozpatrzy reklamację w terminie 14 (czternaście) dni
          od dnia złożenia reklamacji.
        </p>
        <p>
          4. W przypadku rozpatrzenia reklamacji na korzyść Klienta miody
          Konarscy naprawi lub wymieni reklamowany towar na nowy,
          pełnowartościowy lub zwróci wartość kupionego towaru.
        </p>
        <h4 style={{ color: "rgb(95, 94, 94)" }}>
          § 9 PRAWO DO ODSTĄPIENIA OD UMOWY / ZWROT PRODUKTÓW
        </h4>
        <p>
          Kupujący, w ciągu 14 dni od daty odebrania przesyłki może zrezygnować
          z zakupu (odstąpić od umowy kupna bez podania przyczyny) towaru
          kupionego w Sklepie internetowym.
        </p>
        <p>
          Dla zachowania 14 dniowego terminu wystarczy wysłanie oświadczenia o
          odstąpieniu od umowy w tym terminie.
        </p>
        <p>
          W przypadku odstąpienia przez Konsumenta od umowy na zasadach
          opisanych powyżej, jest on zobowiązany do zwrotu produktów objętych
          umową, od której odstąpił. Zwrot powinien nastąpić nie później niż w
          terminie 14 dni od dnia odstąpienia od umowy, na adres miody Konarscy
          wskazany w §2 pkt 5) regulaminu.
        </p>
        <p>
          Konsumentowi zgodnie z art 38 Prawa konsumenckiego nie przysługuje
          prawo do odstąpienia od mowy, w której przedmiotem świadczenia jest
          rzecz nieprefabrykowana, wyprodukowana według specyfikacji konsumenta
          lub służąca zaspokojeniu jego zindywidualizowanych potrzeb.
        </p>
        <h4 style={{ color: "rgb(95, 94, 94)" }}>§ 11 DANE OSOBOWE</h4>
        <p>Rozporządzenie o ochronie danych osobowych</p>
        <p>
          25 maja 2018 roku zaczęło obowiązywać Rozporządzenie Parlamentu
          Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku w
          sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
          osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE (określane jako „RODO”, „ORODO”, „GDPR”
          lub „Ogólne Rozporządzenie o Ochronie Danych”). Z tego powody
          informujemy Państwa o przetwarzaniu Państwa danych oraz o zasadach, na
          jakich będzie się to odbywało po dniu 25 maja 2018 roku. Poniżej
          znajdą Państwo podstawowe informacje na ten temat. Kto jest
          administratorem Państwa danych? Administratorem Państwa danych
          osobowych jest Skup, Sprzedaż, Regeneracja Chłodnic z siedzibą w Warce
          ul. E. Orzeszkowej 2a, 05-660 Warka.
        </p>
        <p>Jaki jest zakres przetwarzanych danych osobowych?</p>
        <p>
          Pana/Pani dane osobowe przetwarzane są w związku z zawartą umową
          sprzedaży i obsługą gwarancyjną zakupionego towaru. W tym celu
          Pana/Pani dane osobowe są przetwarzane wyłącznie w celu realizacji
          przedmiotu umowy oraz realizacji transportu zakupionego towaru.
        </p>
        <p>
          Jakie są Państwa prawa w stosunku do przekazanych danych osobowych?
        </p>
        <p>
          Administrator informuje, iż ma Pan/Pani prawo do dostępu do swoich
          danych, sprostowania, usunięcia lub ograniczenia przetwarzania, prawo
          do sprzeciwu, prawo wniesienia skargi do organu nadzorczego oraz
          przeniesienia danych, o ile prawo na to zezwala. Dane kontaktowe
          Administratora danych osobowych W przypadku pytań dotyczących ochrony
          danych osobowych należy kontaktować się listownie (adres do
          korespondencji Skup, Sprzedaż, Regeneracja Chłodnic 05-660 Warka ul.
          E. Orzeszkowej 2a telefonicznie (tel: +48 667 20 01, bądź za
          pośrednictwem poczty elektronicznej, pisząc na adres e-mail:
          admin@chlodnice-konarscy.com
        </p>
        <h4 style={{ color: "rgb(95, 94, 94)" }}>§ 12 POSTANOWIENIA KOŃCOWE</h4>
        <ul style={{ listStyleType: "none" }}>
          <li>
            Administrator zastrzega sobie prawo do zaprzestania świadczenia
            usług poprzez zablokowanie Konta Użytkownika, którego umyślne
            działania będą szkodliwe dla Witryny, Administratora bądź innych
            Użytkowników, oraz który łamie którekolwiek z postanowień
            niniejszego Regulaminu. Ponowienie świadczenia usług poprzez
            odblokowanie konta Użytkownika jest uzależnione od decyzji
            Administratora. Zaprzestanie świadczenia usług nie ma wpływu na
            wykonanie umów, które zawarli Sprzedawca oraz Klient, którego konto
            Użytkownika zostało zablokowane.
          </li>
          <li>
            W sprawach nieuregulowanych w niniejszym regulaminie mają
            zastosowanie przepisy powszechnie obowiązującego prawa, a zwłaszcza
            Kodeksu Cywilnego oraz przepisy Ustawy o szczególnych warunkach
            sprzedaży konsumenckiej oraz zmianie Kodeksu cywilnego (Dz. U. Nr
            141 z 2002 r. poz. 1176) i Ustawy o ochronie niektórych praw
            konsumentów oraz o odpowiedzialności za szkodę wyrządzoną przez
            produkt niebezpieczny (Dz. U. Nr 22 z 2000 r. poz. 271).
          </li>
          <li>
            Wszystkie nazwy towarów oferowanych do sprzedaży przez miody
            Konarscy w Sklepie Internetowym są używane w celach
            identyfikacyjnych i mogą być chronione i zastrzeżone na podstawie
            przepisów Ustawy Prawo własności przemysłowej (Dz. U. Nr 119 z 2003
            r. poz. 1117).
          </li>
          <li>
            W przypadku zmiany Regulaminu zamówienia złożone przed datą
            wprowadzenia zmian do niniejszego regulaminu będą realizowane na
            podstawie zasad obowiązujących przed wprowadzeniem zamian.
          </li>
          <li>Niniejszy Regulamin obowiązuje od 10 grudnia 2022 roku.</li>
          <li>
            Niniejszy regulamin dostępny jest w siedzibie miody Konarscy, a
            także pod adresem http://www.miodykonarscy/regulamin.pl
          </li>
        </ul>
      </div>
    </div>
  );
};

export default regulamin;
