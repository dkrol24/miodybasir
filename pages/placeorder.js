import {
  Button,
  Card,
  CircularProgress,
  Grid,
  Link,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import NextLink from "next/link";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";
import classes from "../utils/classes";
import { Store } from "../utils/Store";
import { useSnackbar } from "notistack";
import { getError } from "../utils/error";
import axios from "axios";
import jsCookie from "js-cookie";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
function PlaceOrderScreen() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    userInfo,
    cart: { cartItems, shippingAddress, paymentMethod },
  } = state;
  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.456 => 123.46
  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
  );

  const taxPrice = round2(itemsPrice * 0.15);
  const totalPrice = round2(itemsPrice + taxPrice);

  useEffect(() => {
    if (!paymentMethod) {
      router.push("/payment");
    }
    if (cartItems.length === 0) {
      router.push("/cart");
    }
  }, [cartItems, paymentMethod, router]);
  const test = cartItems.map((item) => item.name);
  const [values] = useState({
    fullName: `${shippingAddress.address}`,
    email: `${test}`,
  });
  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "/api/orders",
        {
          orderItems: cartItems.map((x) => ({
            ...x,
            countInStock: null,
            slug: null,
          })),
          shippingAddress,
          paymentMethod,
          itemsPrice,
          taxPrice,
          totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      emailjs
        .send(
          "service_vp66n7q",
          "template_awe19s9",
          values,
          "VQcVhVKxGztqdiNuu"
        )
        .then(
          (response) => {
            console.log("Wiadomość wysłana!", response);
          },
          (error) => {
            console.log("Podaj dane i zaakceptuj regulamin.", error);
          }
        );

      dispatch({ type: "CART_CLEAR" });
      jsCookie.remove("cartItems");
      setLoading(false);
      router.push(`/order/${data}`);
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };

  return (
    <Layout style={{ marginTop: "7rem" }} title="Place Order">
      <CheckoutWizard activeStep={3}></CheckoutWizard>
      <h1 className="banner-h1">Złóż zamówienie</h1>
      {console.log(test + "xxx")}
      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
          <Card sx={classes.section}>
            <List>
              <ListItem>
                <h1 className="yellow-span">Adres dostawy</h1>
              </ListItem>
              <ListItem>
                {shippingAddress.fullName}, {shippingAddress.address},
                {shippingAddress.city}, {shippingAddress.postalCode},
                {shippingAddress.country}
              </ListItem>
              <input
                id="testfullname"
                value={shippingAddress.fullName}
                readOnly
                style={{ display: "none" }}
              />
              <input
                id="testadress"
                value={shippingAddress.address}
                readOnly
                style={{ display: "none" }}
              />
              <input
                id="testcity"
                value={shippingAddress.city}
                readOnly
                style={{ display: "none" }}
              />
              <ListItem>
                <Button
                  onClick={() => router.push("/shipping")}
                  variant="contianed"
                  color="secondary"
                >
                  Edytuj
                </Button>
              </ListItem>
            </List>
          </Card>
          <Card sx={classes.section}>
            <List>
              <ListItem>
                <h1 className="yellow-span">Metoda płatności</h1>
              </ListItem>
              <ListItem>{paymentMethod}</ListItem>
              <ListItem>
                <Button
                  onClick={() => router.push("/payment")}
                  variant="contianed"
                  color="secondary"
                >
                  Edytuj
                </Button>
              </ListItem>
            </List>
          </Card>
          <Card sx={classes.section}>
            <List>
              <ListItem>
                <h1 className="yellow-span">Zamówione przedmioty</h1>
              </ListItem>
              <ListItem>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Zdjęcie</TableCell>
                        <TableCell>Nazwa</TableCell>
                        <TableCell align="right">Ilość</TableCell>
                        <TableCell align="right">Cena</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item._key}>
                          <TableCell>
                            <NextLink href={`/product/${item.slug}`} passHref>
                              <Link>
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={50}
                                  height={50}
                                ></Image>
                              </Link>
                            </NextLink>
                          </TableCell>
                          <TableCell>
                            <NextLink href={`/product/${item.slug}`} passHref>
                              <Link>
                                <Typography>{item.name}</Typography>
                                <input
                                  id="testitemname"
                                  value={item.name}
                                  readOnly
                                  style={{ display: "none" }}
                                />
                              </Link>
                            </NextLink>
                          </TableCell>
                          <TableCell align="right">
                            <Typography>{item.quantity}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography>{item.price}zł</Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card sx={classes.section}>
            <List>
              <ListItem>
                <h1 className="yellow-span">Podsumowanie zamówienia</h1>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Przedmioty:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">{itemsPrice}zł</Typography>
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>
                      <strong>Suma:</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">
                      <strong>{totalPrice}zł</strong>
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <button
                  style={{ width: "100%" }}
                  className="yellow-button"
                  onClick={placeOrderHandler}
                  disabled={loading}
                >
                  Złóż zamówienie
                </button>
              </ListItem>
              {loading && (
                <ListItem>
                  <CircularProgress />
                </ListItem>
              )}
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
export default dynamic(() => Promise.resolve(PlaceOrderScreen), { ssr: false });
