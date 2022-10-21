import React from "react";
import ulo from "../public/images/honey7.jpg";
import Image from "next/image";
import Layout from "../components/Layout";
const uloterapia = () => {
  return (
    <Layout title="Uloterapia">
      <div className="app__ulo-page">
        <div className="productdetails-banner" />
        <p
          style={{
            color: "rgba(222,151,9,255)",
            textAlign: "start",
            fontSize: "1.2rem",
            borderRight: "2px dotted rgba(222,151,9,255)",
            borderLeft: "2px dotted rgba(222,151,9,255)",
            width: "90%",
            maxWidth: "750px",
            padding: "1rem",
          }}
        >
          &quot; Kiedy pszczoła zniknie z powierzchni Ziemi, człowiekowi
          pozostaną już tylko cztery lata życia. <br /> Skoro nie będzie
          pszczół, nie będzie też zapylania. <br /> Zabraknie więc roślin, potem
          zwierząt, wreszcie przyjdzie kolej na człowieka... &quot; <br /> ~
          Karol Darwin
        </p>
        <div className="app__ulo-page-container">
          <div className="app__ulo-text">
            <p style={{ margin: "0" }}>
              <span className="yellow-span">Apiinhalacja</span>, potocznie
              nazywana uloterapią, jest jednym z elementów stosowanej w
              medycynie naturalnej tzw. Apiterapii, czyli leczenia produktami
              pszczelego pochodzenia.
            </p>
            <p style={{ margin: "1rem 0 0 0" }}>
              <span className="yellow-span">Uloterapia</span> (apiinhalacja), to
              nic innego jak oddychanie powietrzem z wnętrza ula. Tych z bogatą
              wyobraźnią uspokajamy - nie musicie w tym celu przytulać się do
              pszczół. Domek, w którym odbywa się apiinhalacja, został
              skonstruowany tak, aby był bezpieczny zarówno dla dzieci jak i
              dorosłych. Pszczoły nie mają bezpośredniego kontaktu z
              człowiekiem, a więc nie musimy się martwić ani koniecznością
              podtrzymywania rozmowy, ani groźbą ewentualnego użądlenia w
              przypadku odmiennych poglądów.
            </p>
            <p style={{ margin: "1rem 0 0 0" }}>
              Przy okazji bezpieczeństwa, należy również zaznaczyć, że znane z
              pracowitości pszczoły, z pedantyczną starannością dbają o czystość
              w ulu, dlatego w wdychanym powietrzu nie ma żadnych wirusów,
              bakterii ani grzybów. Z apiinhalacji mogą skorzystać zarówno
              dzieci jak i dorośli.
            </p>
            <p style={{ margin: "1rem 0 0 0" }}>
              Brak przeciwskazań terapii, sprawia, że może z niej skorzystać
              dosłownie każdy. Leczniczy wpływ produktów pszczelich znany jest
              od czasów starożytnych.Ponadto dzięki uloterapii, możemy znaleźć
              się niezwykle blisko natury, czerpiąc z niej dobrą leczniczą
              energię,
            </p>
            <p style={{ margin: "1rem 0 0 0" }}>
              Medycyna zna wiele przypadków wyleczenia przy pomocy tej terapii
              chorób zwyrodnieniowych, chorób stawów, bronchitu, astmy,
              bezsenności, chorób układu oddechowego czy chorób serca. Pszczele
              powietrze, uznawane jest również za najlepszy środek inhalujący,
              dlatego jest jedną ze skuteczniejszych metod leczenia dziecięcych
              przeziębień.
            </p>
          </div>
          <div className="app__ulo-image">
            <Image alt="ulo" src={ulo}></Image>
          </div>
        </div>
        <div className="app__ulo-more-container">
          <div className="app__ulo-more-wskazania">
            <h1 className="yellow-span">
              Wskazaniami do zastosowania apiinhalacji są:
            </h1>
            <ul className="app__ulo-page-ul">
              <li>
                Bezsenność, choroby układu nerwowego (niedowład, zapalenia
                nerwów, stwardnienie rozsiane, porażenie mózgowe)
              </li>
              <li>Syndrom ciągłego zmęczenia</li>
              <li>
                Choroby układu moczoweg (zapalenie nerek, zapalenie gruczołu
                krokowego)
              </li>
              <li>Choroby reumatyczne</li>
              <li>Choroby serca (podwyższone ciśnienie krwi)</li>
              <li>
                Choroby układu oddechowego (częste infekcje dróg oddechowych,
                przewlekłe zapalenia płuc, astma oskrzelowa i inne)
              </li>
              <li>Chroniczny ból głowy, częste migreny</li>
              <li>Stany depresji i stres</li>
              <li>Alergie</li>
              <li>Osłebienie układu odpornościowego</li>
              <li>Profilaktyka wspomagania leczenia wielu innych chorób</li>
            </ul>
            <p
              style={{
                color: "rgba(222,151,9,255)",
                fontWeight: "500",
                letterSpacing: "1px",
              }}
            >
              Nie należy również zapominać o uspokajających właściwościach
              terapii. Jak wynika z wieloletniego doświadczenia lekarzy
              psychiatrów, bzyczenie pszczół jest jedną z najlepszych metod
              terapii &quot;nerwowych&quot; pacjentów.
            </p>
          </div>
          <div className="app__ulo-more-knowhow">
            <h1 className="yellow-span">Czy wiesz, że...</h1>
            <ul className="app__ulo-page-ul">
              <li>
                Uloterapia dzięki swojemu uspakajającemu działaniu,
                wykorzystywana jest do leczenia pacjentów szpitali
                psychiatrycznych.
              </li>
              <li>
                Jednym z powodów skuteczności apiinhalacji jest korzysstne pole
                magnetyczne wytwarane przez pszczoły, którego zasięg wynosi
                ponad pół metra.
              </li>
              <li>
                Pszczoły powodują jonizację powietrza, nadając mu tym samym
                przyjazny dla człowieka ładunek. Już po pierwszym seansie
                odczuwa się polepszenie stanu fizycznego i psychicznego oraz
                przypływ sił witalnych. Jedna sesja trwa 30min. Pakiet sesji
                można wykorzystać w dowolny sposób - jednorazowy lub z podziałem
                na kilka sesji każdego dnia 10 razy po 30 minut.
              </li>
            </ul>
            <p
              style={{
                color: "rgba(222,151,9,255)",
                fontWeight: "500",
                letterSpacing: "1px",
              }}
            >
              Ze względów zdrowotnych pszczół i kuracjuszy zabronione jest
              wnoszenie do domku urządzeń elektronicznych, szczególnie telefonów
              komórkowych ale śmiało możecie zabrać ze sobą ulubioną książkę,
              kocyk lub poduszeczkę, dzięki której poczujecie się jak w domu.
            </p>
          </div>
        </div>
        <div className="app__ulo-more-info">
          <h1>Zapraszamy od maja do września</h1>
          <p>Rezerwację prosimy uzgodnić pod numerem telefonu 507 101 771</p>
          <p>Adres: E.Orzeszkowej 2a 05-660 Warka</p>
        </div>
      </div>
    </Layout>
  );
};

export default uloterapia;
