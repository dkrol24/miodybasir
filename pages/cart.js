import {
  Box,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import testowo from "../public/images/testowo.jpg";
function CartScreen() {
  const router = useRouter();
  const {
    state: {
      cart: { cartItems },
    },
    dispatch,
  } = useContext(Store);

  const { enqueueSnackbar } = useSnackbar();

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      enqueueSnackbar("Sorry. Product is out of stock", { variant: "error" });
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        _key: item._key,
        name: item.name,
        countInStock: item.countInStock,
        slug: item.slug,
        price: item.price,
        image: item.image,
        quantity,
      },
    });
    enqueueSnackbar(`${item.name} updated in the cart`, {
      variant: "success",
    });
  };
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  return (
    <Layout title="Lista zakupów" description="Miody warka">
      <div className="productdetails-banner" />
      <h1 className="banner-h1" style={{ marginTop: "7rem" }}>
        Lista zakupów
      </h1>
      {cartItems.length === 0 ? (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography style={{ alignSelf: "center" }}>
            Koszyk jest pusty.
            <NextLink href="/" passHref>
              <Link style={{ textDecoration: "none" }}>Powrót</Link>
            </NextLink>
          </Typography>
          <div
            style={{
              maxWidth: "1000px",
              width: "90%",

              display: "flex",
              justifyContent: "center",

              alignItems: "center",
            }}
          >
            <Image src={testowo} alt="image" />
          </div>
        </Box>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Zdjęcie</TableCell>
                    <TableCell>Nazwa</TableCell>
                    <TableCell align="right">Ilość</TableCell>
                    <TableCell align="right">Cena</TableCell>
                    <TableCell align="right">Usuń</TableCell>
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
                          <Link style={{ textDecoration: "none" }}>
                            <h1 className="yellow-span">{item.name}</h1>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartHandler(item, e.target.value)
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>{item.price}zł</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <button
                          className="yellow-button"
                          onClick={() => removeItemHandler(item)}
                        >
                          X
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography>
                    Suma ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    produkt) :
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}zł
                  </Typography>
                </ListItem>
                <ListItem>
                  <button
                    style={{ width: "100%" }}
                    onClick={() => {
                      router.push("/shipping");
                    }}
                    className="yellow-button"
                  >
                    Zapłać
                  </button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
