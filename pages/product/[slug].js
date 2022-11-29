import {
  Alert,
  Card,
  CircularProgress,
  Grid,
  List,
  ListItem,
  Typography,
  CardMedia,
} from "@mui/material";

import { useContext, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Layout from "../../components/Layout";
import client from "../../utils/client";
import { urlForThumbnail } from "../../utils/image";
import { Store } from "../../utils/Store";
import axios from "axios";
import { useRouter } from "next/router";

import Kit from "../../components/Kit";
import Pierzga from "../../components/Pierzga";
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
      enqueueSnackbar("Prosimy o kontakt w sprawie produktu.", {
        variant: "error",
      });
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
    enqueueSnackbar(`${product.name} dodany do karty`, {
      variant: "success",
    });
    router.push("/cart");
  };
  return (
    <Layout title={product?.title}>
      {loading ? (
        <div style={{ width: "100%", height: "100vh" }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            background: "rgba(222,151,9,0.1)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="productdetails-banner" />

          <div className="productdetail-main">
            <div className="productdetails-image">
              <CardMedia
                component="img"
                image={urlForThumbnail(product.image)}
                title={product.name}
              ></CardMedia>
            </div>
            <List
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <ListItem>
                <h1 className="yellow-span">{product.name}</h1>
              </ListItem>

              <ListItem>
                <Typography className="grey-ptext">
                  {product.description}
                </Typography>
              </ListItem>
              <Card style={{ boxShadow: "none" }}>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography className="yellow-span">Cena</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{product.price}zł</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography className="yellow-span">Status</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>
                          {product.countInStock > 0
                            ? "Dostępny"
                            : "Niedostępny"}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <button
                      className="yellow-button"
                      onClick={addToCartHandler}
                    >
                      Dodaj do koszyka
                    </button>
                  </ListItem>
                </List>
              </Card>
            </List>
          </div>

          {product.name == "Kit pszczeli - propolis" ? (
            <Kit />
          ) : product.name == "Pierzga" ? (
            <Pierzga />
          ) : (
            ""
          )}
        </div>
      )}
    </Layout>
  );
}

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}
