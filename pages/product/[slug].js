import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import { useContext, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Layout from "../../components/Layout";
import classes from "../../utils/classes";
import client from "../../utils/client";
import { urlFor, urlForThumbnail } from "../../utils/image";
import { Store } from "../../utils/Store";
import axios from "axios";
import { useRouter } from "next/router";
import image from "../../public/images/banner.jpg";
export default function ProductScreen(props) {
  const router = useRouter();
  const { slug } = props;
  const {
    state: { cart },
    dispatch,
  } = useContext(Store);
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    product: null,
    loading: true,
    error: "",
  });
  const { product, loading, error } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch(
          `
            *[_type == "product" && slug.current == $slug][0]`,
          { slug }
        );
        setState({ ...state, product, loading: false });
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
  }, []);

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      enqueueSnackbar("Sorry. Product is out of stock", { variant: "error" });
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        _key: product._id,
        name: product.name,
        countInStock: product.countInStock,
        slug: product.slug.current,
        price: product.price,
        image: urlForThumbnail(product.image),
        quantity,
      },
    });
    enqueueSnackbar(`${product.name} added to the cart`, {
      variant: "success",
    });
    router.push("/cart");
  };
  return (
    <Layout title={product?.title}>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <Box>
          <Box sx={classes.section}>
            <NextLink href="/" passHref>
              <Link>
                <div className="productdetails-banner">
                  <Image
                    width={1700}
                    height={650}
                    src={image}
                    alt="chuj"
                  ></Image>
                </div>
              </Link>
            </NextLink>
          </Box>
          <Box sx={classes.section}>
            <NextLink href="/" passHref>
              <Link>
                <Typography>back to result</Typography>
              </Link>
            </NextLink>
          </Box>
          <div className="productdetails-container">
            <div className="productdetail-main">
              <div className="productdetails-image">
                <Image
                  src={urlFor(product.image)}
                  alt={product.name}
                  layout="responsive"
                  width={680}
                  height={680}
                  className="productdetails-image"
                />
              </div>

              <List style={{ width: "50vw" }}>
                <ListItem>
                  <Typography component="h1" variant="h1">
                    {product.name}
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography>{product.description}</Typography>
                </ListItem>
                <Card>
                  <List>
                    <ListItem>
                      <Grid container>
                        <Grid item xs={6}>
                          <Typography>Price</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>${product.price}</Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Grid container>
                        <Grid item xs={6}>
                          <Typography>Status</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>
                            {product.countInStock > 0
                              ? "In stock"
                              : "Unavailable"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Button
                        onClick={addToCartHandler}
                        fullWidth
                        variant="contained"
                      >
                        Add to cart
                      </Button>
                    </ListItem>
                  </List>
                </Card>
              </List>
            </div>
          </div>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography>
                  {" "}
                  {product.name == "Kit pszczeli - propolis" ? (
                    <div>
                      <h1>Dowiedz się więcej!</h1>
                      <Typography>
                        W kicie pszczelim znajduje się:
                        <ul>
                          <li>
                            • około 50% nieprzetworzonej żywicy roślinnej,
                          </li>
                          <li>
                            • około 30% sumarycznie przewożona żywica roślinna i
                            mieszanina wydzielin pszczelich (wosku pszczelego),
                          </li>
                          <li>
                            • około 10% innych związków węglowodorowych takich
                            jak: inne związki kwasowe, związki estrowe, eterowe
                            i olejków eterycznych
                          </li>
                          <li>
                            • około 5% nieprzetworzonych pyłków kwiatowych,
                          </li>
                          <li>
                            • około 5% sumarycznie, woda, białka, enzymy, inne
                            związki biologicznie aktywne (np. hamujące wzrost
                            roztoczy),
                          </li>
                          <li>
                            • śladowe ilości soli nieorganicznych i organicznych
                            związków metali.
                          </li>
                        </ul>
                        <p>
                          niemniej skład jest silnie zależny od wielu czynnik i
                          może się dynamicznie zmieniać.
                        </p>
                      </Typography>
                      <div>
                        <h1 style={{ fontWeight: "bolder" }}>
                          Propolis - nalewka propolisowa. Przepis:
                        </h1>
                        <p>
                          Do ciemnej butelki najlepiej z kroplomierzem z 10
                          gramami propolisu wlewamy 70ml spirytusu oraz 30ml
                          letniej, przegotowanej wody.
                        </p>
                        <p>
                          Nalewkę pozostawiamy w temperaturze pokojowej
                          szczelnie zamkniętą przez 2 tygodnie. W celu
                          dokładniejszego rozpuszczenia propolisu butelkę
                          codziennie mieszamy.
                        </p>
                        <h2 style={{ fontWeight: "bolder" }}>Stosowanie</h2>
                        <ul>
                          <p>Zastosowanie w chorobach układu oddechowego</p>
                          <li>
                            • 15-20 kropli na łyżeczkę cukru 3 razy dziennie
                          </li>
                          <li>
                            • 30 kropli na 200 ml ciepłej herbaty z rumianku do
                            płukania gardła oraz popijania
                          </li>
                          <li>
                            • do talerza z gorącą wodą wlać 40-50 kropli
                            nalewki, używać do inhalacji pod ręcznikiem przez 10
                            min.
                          </li>
                        </ul>
                        <ul>
                          <p>Zastosowanie w chorobach układu pokarmowego:</p>
                          <li>
                            • na połowę szklanki letniej wody 40 kropli nalewki.
                            Płukać jamę ustną kilka razy dziennie przy
                            paradontozie oraz stanach zapalnych jamy ustnej.
                          </li>
                          <li>
                            • na połowę szklanki wody, herbaty lub innego płynu
                            20-40 kropli nalewki. Pić 2-3 razy dziennie na 20-30
                            minut przed jedzeniem przy stanach zapalnych żołądka
                            i jelit oraz początkowym stadium choroby wrzodowej
                            żołądka
                          </li>
                          <li>
                            • na łyżeczkę miodu 20 kropli nalewki. Spożywać 3
                            razy dziennie na 20 minut przed jedzeniem przy
                            wrzodach żołądka i dwunastnicy.
                          </li>
                        </ul>
                        <ul>
                          <p>
                            Zastosowanie w chorobach skóry, przy ranach i
                            oparzeniach:
                          </p>
                          <li>
                            • na 100 ml przegotowanej, ciepłej wody wlać 1 ml
                            nalewki. Używać do przemywania ran, stłuczeń,
                            oparzeń oraz do kompresów nakładanych na chore
                            miejsca i stłuczenia.
                          </li>
                          <li>
                            • przemywać rozcieńczoną 1:50 nalewką palce nóg przy
                            grzybicy międzypalcowej
                          </li>
                          <li>
                            • na rany żylakowe przykładać kompresy nasączone
                            nalewką rozcieńczoną 1:50
                          </li>
                        </ul>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100vw",
                        }}
                      >
                        <ul
                          style={{
                            maxWidth: "50vw",
                            margin: "0",
                            padding: "0",
                          }}
                        >
                          <h1 style={{ fontWeight: "bolder" }}>
                            Właściwości propolisu
                          </h1>
                          <p>
                            Propolis jako jedyny, obok jadu pszczelego, produkt
                            pszczeli wykazuje silne działanie bakteriostatyczne.
                            Ta właściwość znalazła zastosowanie w leczeniu
                            człowieka. Kit pszczeli przyspiesza procesy gojenia
                            i regeneracji tkanek w przypadku lekkich oparzeń,
                            opryszczce, w opryszczce narządów płciowych,
                            paradontozie, owrzodzeniach jamy ustnej i otwartych
                            ran układu pokarmowego, również spowodowanych
                            infekcją Helikobacter Pylori, gardiozą lub
                            lambiozą., rany jamy ustanej spowodowane kandydozą a
                            także wspomagająco u chorych na gruźlice, nowotwór
                            nosa i gardła oraz chorobę wrzodową przewodu
                            pokarmowego. Wstępne badania wykazują pozytywne
                            działanie w zapobieganiu infekcji górnych dróg
                            oddechowych.
                          </p>

                          <li>
                            <span style={{ fontWeight: "bolder" }}>
                              Działanie przeciwdrobnoustrojowe
                            </span>{" "}
                            <br />
                            Propolis działa przeciwbakteryjnie, przeciwwirusowo
                            i przeciwgrzybicznie. Hamuje wzrost licznych
                            bakterii Gram dodatnich i Gram ujemnych. Alkoholowe
                            roztwory propolisu hamują wzrost grzybów
                            Trichophyton, Microsporum oraz Candida
                            odpowiedzialnych za dosyć powszechną kandydozę,
                            czyli przerost drożdżaków w przewodzie pokarmowym
                            oraz drogach rodnych. <br />
                            Propolis działa skutecznie przeciwko wirusowi
                            opryszczki pospolitej, wirusowi polio, przy leczeniu
                            rzęsistkowego, grzybicznego i bakteryjnego zapalenia
                            pochwy oraz nadżerek szyjki macicy. Ekstrakt z
                            propolisu leczy także pasożytnicze zakażenie jelit
                            pierwotniakami Giardia.
                          </li>
                          <li>
                            <span style={{ fontWeight: "bolder" }}>
                              Leczenie infekcji dróg oddechowych
                            </span>{" "}
                            <br />
                            Propolis stosuje się w leczeniu ostrych, nieżytowych
                            i przewlekłych chorób gardła i krtani różnego
                            pochodzenia. Jest też bardzo skuteczny przy aftach,
                            pleśniawkach, powierzchniowym zapaleniu języka,
                            zapaleniu ozębnej, wrzodziejącym zapaleniu dziąseł i
                            paradontozie.
                          </li>
                          <li>
                            <span style={{ fontWeight: "bolder" }}>
                              • Działanie regeneracyjne
                            </span>{" "}
                            <br />
                            Wyciągi z propolisu przyspieszają bliznowacenie ran,
                            regenerację tkanek miękkich, tkanki łącznej,
                            chrzęstnej i kostnej. Według jednego z badań,
                            propolis użyty w leczeniu ran po operacjach
                            położniczych przyspieszył gojenie w blisko 98%
                            przypadków.
                          </li>
                          <li>
                            <span style={{ fontWeight: "bolder" }}>
                              • Stymulacja układu odpornościowego
                            </span>{" "}
                            <br />
                            Wyciągi etanolowe propolisu stymulują pracę układu
                            odpornościowego, poprawiają jego reakcję na atak
                            ciał obcych i drobnoustrojów chorobotwórczych.
                            Podawany wraz ze szczepionkami zwiększa wydzielanie
                            przeciwciał.
                          </li>
                          <li>
                            <span style={{ fontWeight: "bolder" }}>
                              • Leczenie chorób skóry
                            </span>{" "}
                            <br />
                            Kremy, szampony i mydła z propolisem świetnie
                            sprawdzają się w pielęgnacji skóry tłustej, na
                            której łatwo tworzą się stany zapalne, wypryski czy
                            łupież. Badania kliniczne wskazują na aż 76%
                            skuteczność w leczeniu ropnych chorób skóry,
                            zapalenia mieszków włosowych, gruczołów potowych,
                            ropni pach czy zajadów. Propolisu używa się także w
                            leczeniu grzybic skóry. Jego preparaty są z
                            powodzeniem stosowane przy odmrożeniach,
                            oparzeniach, w leczeniu ran po zabiegach
                            chirurgicznych, zapaleniu kości i szpiku,
                            zmiażdżeniu kończyn. Preparaty z propolisem prowadzą
                            do szybkiego wyleczenia żylaków podudzi (blisko 3
                            razy szybszego niż tzw. but Unna), pomagają przy
                            guzach krwawniczych i szczelinach odbytu,
                            zapobiegając krwawieniom i ostrym nawrotom choroby.
                          </li>
                          <li>
                            <span style={{ fontWeight: "bolder" }}>
                              • Ochrona wątroby
                            </span>{" "}
                            <br />
                            Propolis może być skuteczny w leczeniu wirusowego
                            zapalenia wątroby w jego wczesnych stadiach.
                            Ekstrakty etanolowe propolisu podawane w dawce 50
                            mg/kg masy ciała pozwoliły zapobiec uszkodzeniu
                            komórek wątroby, cholestazie i znacznie zmniejszyły
                            stężenie we krwi cholesterolu, trójglicerydów,
                            fosfolipidów i innych związków wskazujących na
                            nieprawidłową pracę wątroby.
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : product.name == "Pierzga" ? (
                    <div>pierzga</div>
                  ) : (
                    ""
                  )}
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Box>
      )}
    </Layout>
  );
}

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}
