import { Alert, CircularProgress } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

import ProductItem from "../components/ProductItem";
import client from "../utils/client";
import { urlForThumbnail } from "../utils/image";
import { Store } from "../utils/Store";
import Image from "next/image";
import ulo from "../public/images/honey7.jpg";
export default function Home() {
  const {
    state: { cart },
    dispatch,
  } = useContext(Store);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    products: [],
    error: "",
    loading: true,
  });
  const { loading, error, products } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);

  const addToCartHandler = async (product) => {
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
    <Layout>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Banner />
          <div
            style={{
              width: "90%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "start",
              marginTop: "4rem",
              borderLeft: "5px dotted rgba(222,151,9,255)",
              borderRight: "5px dotted rgba(222,151,9,255)",
            }}
          >
            {products.map((product) => (
              <div
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "100%",
                  margin: "2rem",
                }}
                key={product.slug}
              >
                <ProductItem
                  product={product}
                  addToCartHandler={addToCartHandler}
                ></ProductItem>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              height: "100%",
              marginTop: "4rem",
              borderLeft: "5px dotted rgba(222,151,9,255)",
              borderRight: "5px dotted rgba(222,151,9,255)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "45vw",

                padding: "2rem",
                marginTop: "2rem",
              }}
            >
              <h1 style={{ color: "rgba(222,151,9,255)", fontSize: "3.5rem" }}>
                Uloterapia
              </h1>
              <p style={{ color: "grey", fontSize: "1.2rem" }}>
                <span
                  style={{
                    color: "rgba(222,151,9,255)",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  Apiinhalacja
                </span>
                , potocznie nazywana uloterapią, jest jednym z elementów
                stosowanej w medycynie naturalnej tzw. Apiterapii, czyli
                leczenia produktami pszczelego pochodzenia.
              </p>
              <p style={{ color: "grey", fontSize: "1.2rem" }}>
                <span
                  style={{
                    color: "rgba(222,151,9,255)",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  Uloterapia
                </span>{" "}
                (apiinhalacja), to nic innego jak oddychanie powietrzem z
                wnętrza ula. Tych z bogatą wyobraźnią uspokajamy - nie musicie w
                tym celu przytulać się do pszczół. Domek, w którym odbywa się
                apiinhalacja, został skonstruowany tak, aby był bezpieczny
                zarówno dla dzieci jak i dorosłych. Pszczoły nie mają
                bezpośredniego kontaktu z człowiekiem, a więc nie musimy się
                martwić ani koniecznością podtrzymywania rozmowy, ani groźbą
                ewentualnego użądlenia w przypadku odmiennych poglądów.
              </p>
              <button
                style={{
                  background: "rgba(222,151,9,255)",
                  cursor: "pointer",
                  padding: "1rem",
                  border: "none",
                  borderRadius: "32px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  Zobacz więcej
                </p>
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: "400px",
                width: "40vw",
                margin: "1rem",
                borderRadius: "40px",
                overflow: "hidden",
              }}
            >
              <Image src={ulo}></Image>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
