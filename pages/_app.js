import "../styles/globals.css";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { StoreProvider } from "../utils/Store";
import { SnackbarProvider } from "notistack";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
const clientSideEmotionCache = createCache({ key: "css" });

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <AnimatePresence>
        <SnackbarProvider
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <StoreProvider>
            <Navbar />
            <PayPalScriptProvider deferLoading={true}>
              <Script src="https://smtpjs.com/v3/smtp.js" />
              <Script src="https://www.paypal.com/sdk/js?client-id=ASLdhRsIpIksoyV3vApNYJ9ezY6Nh5T5lTETuSsfglGZPlezKD6AmJBamNOUFCWSgOrvRzeJpdSMAWb1&components=buttons,payment-fields,marks,funding-eligibility&enable-funding=blik&currency=PLN" />
              <Component {...pageProps} />
            </PayPalScriptProvider>
          </StoreProvider>
        </SnackbarProvider>
      </AnimatePresence>
    </CacheProvider>
  );
}

export default MyApp;
