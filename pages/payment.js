import {
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React, { useContext, useEffect, useState } from "react";
import CheckoutWizard from "../components/CheckoutWizard";
import Form from "../components/Form";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";

export default function PaymentScreen() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("");
  const { state, dispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;

  useEffect(() => {
    if (!shippingAddress.address) {
      router.push("/shipping");
    } else {
      setPaymentMethod(jsCookie.get("paymentMethod") || "");
    }
  }, [router, shippingAddress]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      enqueueSnackbar("Payment method is required", { variant: "error" });
    } else {
      dispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethod });
      jsCookie.set("paymentMethod", paymentMethod);
      router.push("/placeorder");
    }
  };
  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2}></CheckoutWizard>
      <Form style={{ marginTop: "7rem" }} onSubmit={submitHandler}>
        <h1 className="banner-h1">Metoda płatności</h1>
        <List>
          <ListItem>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Payment Method"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  label="Przelew bankowy"
                  value="PayPal"
                  control={<Radio />}
                ></FormControlLabel>

                <FormControlLabel
                  label="Gotówka"
                  value="Cash"
                  control={<Radio />}
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </ListItem>
          <ListItem>
            <button
              style={{ width: "100%" }}
              className="yellow-button"
              type="submit"
            >
              Przejdź dalej
            </button>
          </ListItem>
          <ListItem>
            <button
              style={{ width: "100%" }}
              className="yellow-button"
              type="button"
              onClick={() => router.push("/shipping")}
            >
              Cofnij
            </button>
          </ListItem>
        </List>
      </Form>
    </Layout>
  );
}
