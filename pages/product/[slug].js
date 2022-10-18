import {
  Alert,
  Box,
  Card,
  CircularProgress,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Layout from "../../components/Layout";
import client from "../../utils/client";
import { urlFor, urlForThumbnail } from "../../utils/image";
import { Store } from "../../utils/Store";
import axios from "axios";
import { useRouter } from "next/router";
import logo from "../../public/images/logomiody.png";
import { motion } from "framer-motion";
import Kit from "../../components/kit";
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
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <Box>
          <div className="productdetails-banner">
            <motion.h1
              initial={{
                x: -400,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="banner-h1"
            >
              {product.name}
            </motion.h1>
            <motion.div
              initial={{
                x: 400,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Image src={logo}></Image>
            </motion.div>
          </div>

          <div className="productdetails-container">
            <div className="productdetail-main">
              <div className="productdetails-image">
                <Image
                  src={urlFor(product.image)}
                  alt={product.name}
                  layout="responsive"
                  width={1}
                  height={1}
                />
              </div>

              <List style={{ width: "100%" }}>
                <ListItem>
                  <Typography
                    className="yellow-span"
                    component="h1"
                    variant="h1"
                  >
                    {product.name}
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography className="grey-ptext">
                    {product.description}
                  </Typography>
                </ListItem>
                <Card>
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
                          <Typography className="yellow-span">
                            Status
                          </Typography>
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
          </div>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                {product.name == "Kit pszczeli - propolis" ? (
                  <Kit />
                ) : product.name == "Pierzga" ? (
                  <Pierzga />
                ) : (
                  ""
                )}
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
