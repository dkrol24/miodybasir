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

import Uloterapia from "../components/Uloterapia";
import Contact from "../components/Contact";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
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
          <Uloterapia />

          <Contact />

          <Map />
        </div>
      )}
    </Layout>
  );
}
