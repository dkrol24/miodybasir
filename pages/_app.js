import "../styles/globals.css";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { StoreProvider } from "../utils/Store";
import { SnackbarProvider } from "notistack";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
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
              <Component {...pageProps} />
            </PayPalScriptProvider>
          </StoreProvider>
        </SnackbarProvider>
      </AnimatePresence>
    </CacheProvider>
  );
}

export default MyApp;
